"use client";

import { useEffect, useMemo, useState } from "react";
import { withBasePath } from "@/lib/basePath";
import {
  formatCop,
  PAGOS_SHEET_CSV_URL,
  parsePagosCsv,
  type PagosData,
} from "@/lib/pagosSheet";

function csvUrl(): string {
  const configured = PAGOS_SHEET_CSV_URL.trim();
  if (configured) return configured;
  if (process.env.NODE_ENV === "development") {
    return withBasePath("/data/pagos-ejemplo.csv");
  }
  return "";
}

export function PagosSheet() {
  const [data, setData] = useState<PagosData | null>(null);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const url = csvUrl();

  useEffect(() => {
    if (!url) return;
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error("fetch");
        const text = await res.text();
        if (text.trim().startsWith("<")) throw new Error("html");
        const parsed = parsePagosCsv(text);
        if (!cancelled) {
          setData(parsed);
          setError(false);
        }
      } catch {
        if (!cancelled) setError(true);
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [url]);

  const paidCount = data?.rows.length ?? 0;
  const filtered = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    if (!q) return data.rows;
    return data.rows.filter((row) => row.nombre.toLowerCase().includes(q));
  }, [data, query]);

  const budgetRatio =
    data?.meta && data.meta > 0
      ? Math.min(100, Math.round((data.recaudado / data.meta) * 100))
      : 0;
  const faltante =
    data?.meta != null ? Math.max(0, data.meta - data.recaudado) : null;

  return (
    <section
      id="aportes"
      className="border-t border-slate-100 bg-inalfu-50/50 py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-inalfu-800">
            Aportes
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-slate-900 sm:text-4xl">
            Quiénes ya se sumaron
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Cada pago entra acá con nombre y fecha. El recaudo se suma solo; la
            meta es lo que cuesta la fiesta. Si aún no apareces, el aporte sigue
            abierto.
          </p>
        </div>

        {!url ? (
          <p className="mx-auto mt-10 max-w-xl text-center text-slate-700">
            Estamos armando el tablero de aportes. En unos días verás aquí los
            nombres y cómo va el presupuesto.
          </p>
        ) : error ? (
          <p className="mx-auto mt-10 max-w-xl text-center text-slate-700">
            No se pudo cargar la lista en este momento. Intenta de nuevo en un
            rato; Google a veces tarda unos minutos en publicar los cambios.
          </p>
        ) : !data ? (
          <p className="mx-auto mt-10 max-w-xl text-center text-slate-700">
            Cargando la lista…
          </p>
        ) : (
          <div className="mx-auto mt-10 max-w-3xl space-y-6">
            <div className="rounded-2xl border border-inalfu-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <p className="text-lg font-semibold text-slate-900">
                  {paidCount === 1
                    ? "1 persona ya aportó"
                    : `${paidCount} personas ya aportaron`}
                </p>
                {data.meta != null ? (
                  <p className="text-sm text-slate-700">
                    Recaudo {formatCop(data.recaudado)} de {formatCop(data.meta)}
                  </p>
                ) : (
                  <p className="text-sm text-slate-700">
                    Recaudo {formatCop(data.recaudado)}
                  </p>
                )}
              </div>
              {faltante != null ? (
                <p className="mt-1 text-sm text-inalfu-800">
                  {faltante === 0
                    ? "Meta alcanzada."
                    : `Faltan ${formatCop(faltante)}`}
                </p>
              ) : null}
              <div
                className="mt-3 h-3 overflow-hidden rounded-full bg-inalfu-100"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={budgetRatio}
                aria-label="Avance del recaudo frente a la meta"
              >
                <div
                  className="h-full rounded-full bg-inalfu-600 transition-[width] duration-700 ease-out motion-reduce:transition-none"
                  style={{ width: `${budgetRatio}%` }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <label className="sr-only" htmlFor="buscar-aporte">
                Buscar nombre
              </label>
              <input
                id="buscar-aporte"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Busca tu nombre…"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition placeholder:text-slate-500 focus:border-inalfu-600 focus:ring-2 focus:ring-inalfu-200 sm:max-w-xs"
              />
              <p className="text-sm text-slate-600">
                {filtered.length} en esta vista
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full text-left text-sm sm:text-base">
                <caption className="sr-only">
                  Lista de aportes: nombre, fecha y valor
                </caption>
                <thead className="bg-inalfu-50 text-sm font-semibold uppercase tracking-wide text-inalfu-800">
                  <tr>
                    <th scope="col" className="px-4 py-3 sm:px-5">
                      Nombre
                    </th>
                    <th scope="col" className="px-4 py-3 sm:px-5">
                      Fecha
                    </th>
                    <th scope="col" className="px-4 py-3 text-right sm:px-5">
                      Valor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td
                        colSpan={3}
                        className="px-4 py-8 text-center text-slate-700 sm:px-5"
                      >
                        Nadie con ese nombre en la lista.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((row, index) => (
                      <tr
                        key={`${row.nombre}-${row.fecha}-${index}`}
                        className="border-t border-slate-100"
                      >
                        <td className="px-4 py-3 font-medium text-slate-900 sm:px-5">
                          {row.nombre}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-slate-700 sm:px-5">
                          {row.fecha || "—"}
                        </td>
                        <td className="px-4 py-3 text-right tabular-nums text-slate-900 sm:px-5">
                          {formatCop(row.valor)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
