"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const historias = [
  {
    title: "Un cepillo para dos melenas",
    text: "Estábamos en una sala de clase sobre la cual no se pueden dar muchos detalles. La profesora salió hacia la sala de profesores al fondo del corredor y, en ese breve momento de libertad adolescente, un personaje X se subió a la mesa principal con el cepillo de la profesora en la mano y empezó a bailar un reguetón como se bailaba en esa época: un poco tieso, moviendo la cadera mientras todo el salón estallaba en aplausos y carcajadas. Pero bastaba escuchar pasos por el corredor para que todo volviera a la normalidad. Cada uno en su puesto, caras de inocencia absoluta. Solo quedaba mirar de reojo el momento inevitable en que la profesora regresaba, tomaba su cepillo —como siempre— y se lo llevaba a la cabeza sin sospechar el pequeño espectáculo que había ocurrido minutos antes.",
  },
  {
    title: "Encerrada en el colegio",
    text: "Ese día salimos muy temprano de clase. Era un salón solo de mujeres y decidimos irnos para el coliseo a pasar el rato, hablando de cualquier cosa mientras escuchábamos música en un celular Nokia naranja con blanco, de esos que apenas empezaban a reproducir MP3. Entre conversación y conversación, una de las chicas se quedó profundamente dormida. Cuando llegó la hora de irnos, nadie la despertó. Todas salimos. Cerraron el colegio. Y cuando finalmente despertó, estaba sola dentro del colegio completamente cerrado. Nunca supimos cómo hizo para salir ni quién le abrió, pero ese día su jornada escolar duró mucho más que la del resto.",
  },
  {
    title: "Los besitos del paseo de once",
    text: "Al parecer, hay una pareja de esposos de la promoción que todavía se conserva. Y ahora, veinte años después, el chat del grupo parece despertar cierta energía adolescente. Se cruzan indirectas, se hacen guiños y aparecen bromas que solo entiende quien estuvo ahí. Nos dimos unos besitos en el paseo de once. Cosas de esa edad, de ese momento en que todo parecía nuevo. Y viendo cómo se mueve el chat hoy en día, parece que esos besitos podrían repetirse este año para celebrar las dos décadas que han pasado desde entonces.",
  },
  {
    title: "Fiestas en la funeraria",
    text: "Hubo un tiempo en que hacíamos fiestas en una funeraria. Fiestas con música, mezclas imposibles de bebidas y esa sensación de que el mundo nos pertenecía. Tengo una escena que nunca se me borró: bailando alrededor del anfiteatro donde arreglaban los cuerpos, como si fuera simplemente otro lugar más de la ciudad. Ese recuerdo se mezcla con otro: bailando reguetón en una sala donde al día siguiente habría un velorio. No creo que fuéramos irrespetuosos; simplemente vivíamos la vida como si fuera infinita, como si cada noche fuera la última.",
  },
  {
    title: "La trampa del boxer",
    text: "Un parche de cinco o seis decidió hacer una broma. Dijimos que al día siguiente, en clase de educación física, todos íbamos a ir sin ropa interior. Luego hablamos por interno y acordamos que en realidad todos sí iríamos con ropa interior… menos uno. Cuando llegó, tenía cara de pícaro, convencido de que todos estábamos en la misma situación. Pero poco a poco se fue dando cuenta de la trampa. Pasó el día entero caminando con extrema cautela, tratando de que nadie descubriera la broma que habíamos armado.",
  },
  {
    title: "Frente a Don Javier Cruz",
    text: "Los tres estábamos frente al coordinador de disciplina. Aquí no hay que ser anónimos: era Don Javier Cruz. Nos dijo que uno de los tres tenía que confesar quién estaba llamando a altas horas de la madrugada a una docente. Nadie habló. Nadie señaló a nadie. Con el tiempo supimos que el responsable era otra persona. Tampoco nos echaron. Aquí estamos, veinte años después de habernos graduado, recordando todavía a esa profesora con mucho cariño.",
  },
  {
    title: "La fiscalía llega al colegio",
    text: "Un día la fiscalía llegó al colegio a buscar a uno de nosotros. El día anterior habíamos estado jugando con un celular traído de Estados Unidos que tenía minutos ilimitados. Lo que empezó como una broma terminó pareciendo algo mucho más serio. La familia del afectado acudió a las autoridades y todo escaló rápidamente. Fue uno de esos momentos en que uno entiende que ciertas bromas pueden salirse completamente de control.",
  },
  {
    title: "El profesor ISO 9001",
    text: 'Había un profesor que por alguna razón que nunca entendimos usaba una camiseta sin mangas con un símbolo muy particular. Venía de alguna región del país marcada por el conflicto y la llevaba con absoluta naturalidad. Otro profesor decía en broma que él era el "profe del ISO 9001", porque parecía certificar la calidad de todo lo que pasaba por ciertos lugares de la ciudad. La historia terminó involucrando incluso a la policía en un episodio que nadie terminó de entender del todo, pero que hoy recordamos entre risas.',
  },
  {
    title: "Pachulí y pica-pica",
    text: "No podemos decir dónde se compraban esos pachulís mezclados con polvo pica-pica, pero el caso es que llegaron al salón. Y lo curioso es que no fue un grupo de hombres: fue un grupo de mujeres. En plena clase se activaron todas las maldades posibles. Lo que nadie sabía era que la profesora tenía una alergia fuerte. Terminó varios días hospitalizada por culpa de la broma. Hoy lo recordamos con una mezcla de risa y arrepentimiento.",
  },
  {
    title: "El sótano de Gargolín",
    text: "Si usted está leyendo esto y no sabe qué es el sótano de Gargolín, probablemente perdió una parte importante de la historia. Ese lugar era casi mítico. Tal vez fue el origen de lo que hoy llamaríamos una fiesta clandestina en Riosucio. El sótano quedaba justo al lado de la casa donde vivía toda su familia. Y aun así hacíamos fiestas hasta el amanecer con unos bafles capaces de despertar a toda la cuadra. Dentro de ese sótano pasaba de todo. Pero todo lo que pasó ahí, se quedó ahí.",
  },
];

const INTERVAL_MS = 12000;

export function Testimonials() {
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
    if (historias.length < 2) return;
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % historias.length);
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
    setCurrent((i) => (i - 1 + historias.length) % historias.length);
    startTimer();
  };

  const next = () => {
    setCurrent((i) => (i + 1) % historias.length);
    startTimer();
  };

  return (
    <>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-inalfu-700">
            Anécdotas
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Historias y recuerdos
          </h2>
          <p className="max-w-2xl text-slate-700">
            Hemos recibido historias inmortales y legendarias que serán posteadas
            anónimamente y en primera persona de quien la envió para no boletear
            a nadies, cada quién sabrá el agua que lo moja y el guante que se
            chantó: alegría, jocosidad y nostalgia.
          </p>
          <div className="max-w-2xl rounded-xl border border-inalfu-200/90 bg-inalfu-fondo/70 px-4 py-3 text-sm leading-relaxed text-slate-700 shadow-sm">
            <p>
              envía tu historia escrita o en nota de voz para ir nutriendo esta
              sección —{" "}
              <a
                href="https://wa.me/573043397256"
                className="font-semibold text-inalfu-800 underline decoration-inalfu-300 decoration-2 underline-offset-2 transition hover:text-inalfu-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2" aria-label="Controles de anécdotas">
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

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="min-h-0 space-y-4">
          {historias.map((h, index) => (
            <article
              key={h.title}
              className={index === current ? "block" : "hidden"}
              aria-hidden={index !== current}
            >
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                {h.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {h.text}
              </p>
            </article>
          ))}
        </div>
        <div
          className="mt-6 flex flex-wrap items-center gap-2"
          aria-label="Indicador de anécdotas"
        >
          {historias.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-2 w-2 shrink-0 rounded-full sm:h-2.5 sm:w-2.5 ${
                index === current ? "bg-inalfu-600" : "bg-slate-300"
              }`}
              aria-label={`Ir a la historia ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
