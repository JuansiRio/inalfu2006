"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { withBasePath } from "@/lib/basePath";

const FOTOS = [
  {
    src: "/assets/images/galeria-1-fiesta.jpeg",
    alt: "Recuerdo del parche — fiesta y celebración",
  },
  { src: "/assets/images/foto2.jpeg", alt: "Recuerdo 2 — galería The Last INALFU" },
  { src: "/assets/images/Foto3.jpeg", alt: "Recuerdo 3 — galería The Last INALFU" },
  { src: "/assets/images/Foto4.jpeg", alt: "Recuerdo 4 — galería The Last INALFU" },
  { src: "/assets/images/Foto5.jpeg", alt: "Recuerdo 5 — galería The Last INALFU" },
  { src: "/assets/images/Foto6.jpeg", alt: "Recuerdo 6 — galería The Last INALFU" },
  { src: "/assets/images/Foto7.jpeg", alt: "Recuerdo 7 — galería The Last INALFU" },
] as const;

const INTERVAL_MS = 9000;

export function GalleryAlbum() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    if (FOTOS.length < 2) return;
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % FOTOS.length);
    }, INTERVAL_MS);
  }, [clearTimer]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  const goTo = (index: number) => {
    setCurrent(index);
    startTimer();
  };

  const prev = () => {
    setCurrent((i) => (i - 1 + FOTOS.length) % FOTOS.length);
    startTimer();
  };

  const next = () => {
    setCurrent((i) => (i + 1) % FOTOS.length);
    startTimer();
  };

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-end gap-2">
        <div
          className="flex items-center gap-2"
          aria-label="Controles del álbum de fotos"
        >
          <button
            type="button"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold hover:border-inalfu-500 hover:text-inalfu-700"
            onClick={prev}
          >
            Anterior
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold hover:border-inalfu-500 hover:text-inalfu-700"
            onClick={next}
          >
            Siguiente
          </button>
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm"
        role="region"
        aria-roledescription="carrusel"
        aria-label="Álbum de recuerdos, siete fotografías"
      >
        <figure className="relative aspect-[4/3] w-full max-h-[min(70vh,32rem)] min-h-[220px] sm:min-h-[280px]">
          {FOTOS.map((foto, index) => (
            <div
              key={foto.src}
              className={
                index === current
                  ? "absolute inset-0 z-10"
                  : "absolute inset-0 z-0 opacity-0 pointer-events-none"
              }
              aria-hidden={index !== current}
            >
              <Image
                src={withBasePath(foto.src)}
                alt={foto.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1152px) 90vw, 72rem"
                loading={index === 0 ? "eager" : "lazy"}
                priority={index === 0}
              />
            </div>
          ))}
          <figcaption className="sr-only">
            Fotografía {current + 1} de {FOTOS.length}
          </figcaption>
        </figure>

        <div
          className="flex flex-wrap items-center justify-center gap-2 border-t border-slate-200 bg-white px-4 py-4"
          aria-label="Indicador del álbum"
        >
          {FOTOS.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-2 w-2 shrink-0 rounded-full sm:h-2.5 sm:w-2.5 ${
                index === current ? "bg-inalfu-600" : "bg-slate-300"
              }`}
              aria-label={`Ir a la foto ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
