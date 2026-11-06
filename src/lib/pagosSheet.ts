/**
 * Pega aquí el enlace CSV de “Publicar en la web”.
 * Archivo → Compartir → Publicar en la web → pestaña Web → CSV.
 * Debe terminar en output=csv
 *
 * Hoja esperada:
 *   A1 meta | B1 (costo total de la fiesta, sin puntos)
 *   fila de títulos: nombre | fecha | valor
 *   una fila por pago. El recaudo lo suma el sitio solo.
 */
export const PAGOS_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjONqRp2ZyWgEpXRhrEFg3lm5-kcxGlmxpHchUOSNOL_SdDpbnyPFwQeP3AIWFszElmJAW4jGiO7DM/pub?gid=0&single=true&output=csv";

export type PagoRow = {
  nombre: string;
  fecha: string;
  valor: number;
};

export type PagosData = {
  meta: number | null;
  recaudado: number;
  rows: PagoRow[];
};

const META_KEYS = new Set(["meta", "objetivo", "presupuesto", "total"]);

function stripAccents(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function normalizeKey(value: string): string {
  return stripAccents(value).toLowerCase().replace(/\s+/g, " ").trim();
}

export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;
  const src = text.replace(/^\uFEFF/, "");

  for (let i = 0; i < src.length; i += 1) {
    const c = src[i];
    if (inQuotes) {
      if (c === '"') {
        if (src[i + 1] === '"') {
          cell += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        cell += c;
      }
      continue;
    }
    if (c === '"') {
      inQuotes = true;
      continue;
    }
    if (c === ",") {
      row.push(cell.trim());
      cell = "";
      continue;
    }
    if (c === "\n" || c === "\r") {
      if (c === "\r" && src[i + 1] === "\n") i += 1;
      row.push(cell.trim());
      cell = "";
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      continue;
    }
    cell += c;
  }
  row.push(cell.trim());
  if (row.some((value) => value !== "")) rows.push(row);
  return rows;
}

function parseMoney(value: string): number | null {
  const cleaned = value.replace(/[$\s]/g, "").replace(/\./g, "").replace(",", ".");
  if (!cleaned) return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

function isNameHeader(value: string): boolean {
  const key = normalizeKey(value);
  return ["nombre", "nombres", "egresado", "persona", "asistente", "name"].includes(
    key,
  );
}

function isDateHeader(value: string): boolean {
  const key = normalizeKey(value);
  return ["fecha", "cuando", "cuándo", "date", "dia", "día"].includes(key);
}

function isAmountHeader(value: string): boolean {
  const key = normalizeKey(value);
  return [
    "valor",
    "monto",
    "aporte",
    "pago",
    "pagó",
    "cantidad",
    "cuota",
  ].includes(key);
}

export function parsePagosCsv(text: string): PagosData {
  const table = parseCsv(text);
  let meta: number | null = null;
  let headerIndex = -1;
  let nameCol = 0;
  let dateCol = 1;
  let amountCol = 2;

  for (let i = 0; i < table.length; i += 1) {
    const [rawKey, rawValue] = table[i];
    const key = normalizeKey(rawKey ?? "");
    if (META_KEYS.has(key)) {
      const amount = parseMoney(rawValue ?? "");
      if (amount != null) meta = amount;
      continue;
    }
    const nameIdx = table[i].findIndex(isNameHeader);
    if (nameIdx >= 0) {
      headerIndex = i;
      nameCol = nameIdx;
      const foundDate = table[i].findIndex(isDateHeader);
      const foundAmount = table[i].findIndex(isAmountHeader);
      dateCol = foundDate >= 0 ? foundDate : nameIdx + 1;
      amountCol = foundAmount >= 0 ? foundAmount : nameIdx + 2;
      break;
    }
  }

  if (headerIndex < 0) {
    throw new Error("No se encontró la columna Nombre en la hoja.");
  }

  const rows: PagoRow[] = [];
  for (let i = headerIndex + 1; i < table.length; i += 1) {
    const nombre = (table[i][nameCol] ?? "").trim();
    if (!nombre) continue;
    const fecha = (table[i][dateCol] ?? "").trim();
    const valor = parseMoney(table[i][amountCol] ?? "") ?? 0;
    rows.push({ nombre, fecha, valor });
  }

  const recaudado = rows.reduce((sum, row) => sum + row.valor, 0);
  return { meta, recaudado, rows };
}

export function formatCop(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}
