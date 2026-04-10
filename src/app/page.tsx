import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";

const EMPRENDIMIENTOS_ITEMS = [
  {
    categoria: "Salud mental",
    nombre: "Psicología y Neuropsicología Infantil",
    descripcionCorta:
      "Al menos ya sabemos lo importante que es la salud mental",
    servicios:
      "Evaluación neuropsicológica infanto juvenil · Rehabilitación neuropsicológica infanto juvenil",
    proveedor: "Maritza García Gutiérrez",
    whatsapp: "573022737573",
    ctaWhatsapp: "Escríbeme por WhatsApp 💬",
  },
  {
    categoria: "Belleza y cuidado personal",
    nombre: "Diosas del Look",
    descripcionCorta:
      "Ya saben, para cuando estén en Pereira y quieran verse más lindas",
    servicios: "Sala de belleza, cosmética y cuidado personal",
    proveedor: "Johanna Restrepo Diosa",
    whatsapp: "573205519881",
    ctaWhatsapp: "Te leo en WhatsApp — agenda tu cita ✨",
  },
  {
    categoria: "Servicios jurídicos",
    nombre: "Asesoría Jurídica",
    descripcionCorta: "Si este encuentro te trae problemas…",
    servicios:
      "Asesoría jurídica especializada · Divorcios · Capitulaciones · Y todo lo necesario para la vida de adulto",
    proveedor: "Santiago Pava González",
    whatsapp: "573148872430",
    ctaWhatsapp: "Consulta por WhatsApp, sin vueltas ⚖️",
  },
  {
    categoria: "Salud y fitness",
    nombre: "Entrenamiento y Estilo de Vida",
    descripcionCorta:
      "Transforma tu salud, tu energía y tu calidad de vida con un enfoque profesional y personalizado.",
    servicios:
      "Programas presenciales y online para mejorar tu condición física, reducir riesgo de enfermedades, aumentar energía diaria y sentirte mejor desde la base: tu salud",
    proveedor: "David Alejandro Calvo (Chory)",
    whatsapp: "573102348939",
    ctaWhatsapp: "Coordinemos tu plan por WhatsApp 💪",
  },
  {
    categoria: "Tecnología y creatividad",
    nombre: "GuineoLab",
    descripcionCorta:
      "Laboratorio creativo y tecnológico, tropical y humano, que convierte ideas en proyectos con propósito como este.",
    servicios:
      "Desarrollo web · Invitaciones digitales · Landing pages · Automatizaciones · CV digital · Y todo lo que se te ocurra en la web",
    proveedor: "GuineoLab",
    whatsapp: "573043397256",
    ctaWhatsapp: "Cuéntame tu idea por WhatsApp 🍌",
  },
  {
    categoria: "Bebidas y alimentos",
    nombre: "RioExpress",
    descripcionCorta:
      "Licores y alimentos, en la plaza de San Sebastián y a domicilio.",
    servicios: "Licores · Alimentos · Domicilios desde la plaza de San Sebastián",
    proveedor: "RioExpress",
    whatsapp: "573228483820",
    ctaWhatsapp: "Pide a domicilio por WhatsApp 🛵",
  },
] as const;

export default function Home() {
  return (
    <>
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-inalfu-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>

      <SiteHeader />

      <main id="contenido-principal">
        <div
          id="inicio-landing"
          className="border-b border-inalfu-200/40 bg-gradient-to-b from-white via-inalfu-fondo/30 to-inalfu-fondo/50 py-6 sm:py-8"
        >
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
            <div className="relative mx-auto overflow-hidden rounded-2xl shadow-sm ring-1 ring-inalfu-200/30">
              <Image
                src="/assets/images/thelast.png"
                alt="The Last INALFU — 20 años después"
                width={1200}
                height={240}
                className="block h-auto w-full max-w-4xl object-contain object-center md:mx-auto md:max-w-5xl"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_28px_14px_rgb(251_249_241)] sm:shadow-[inset_0_0_40px_22px_rgb(251_249_241)]"
                aria-hidden
              />
            </div>
          </div>
        </div>

        <section
          id="sobre-el-encuentro"
          className="relative overflow-hidden bg-gradient-to-br from-white via-inalfu-fondo to-inalfu-100/60"
          aria-labelledby="titulo-encuentro"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:gap-12 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
            <Reveal className="flex flex-col space-y-6">
              <p className="w-full text-center text-xs font-semibold uppercase tracking-[0.2em] text-inalfu-800">
                Sobre el encuentro
              </p>
              <div className="flex w-full flex-col items-center text-center">
                <h1
                  id="titulo-encuentro"
                  className="inline-flex max-w-xl flex-col items-center justify-center gap-1 rounded-full border border-inalfu-200 bg-white/95 px-9 py-2.5 text-center text-lg font-medium tracking-wide text-inalfu-oscuro shadow-sm sm:px-11 sm:py-3 sm:text-xl"
                >
                  <span className="font-semibold">The Last INALFU</span>
                  <span className="text-base text-inalfu-800 sm:text-lg">
                    Otro JeanDay · 20 años después
                  </span>
                </h1>
              </div>
              <div className="max-w-xl space-y-3 text-base leading-relaxed text-inalfu-texto/88">
                <p>
                  Eran los días en que el reggaetón aún era un tabú. Nosotros ya
                  habíamos sobrevivido al cambio de milenio y a los Ovnis de
                  Sipirra; a las Torres Gemelas y al guarapo; al cariño de Don
                  Javier y a la balacera de la peatonal. Sobrevivimos a las
                  identidades trigonométricas de Alba Lucía y hasta a las arepas
                  con mortadela de Maira.
                </p>
                <p>
                  Buscábamos superar la selección natural mejorando el quiebre
                  de cadera, cantando Ella y Yo como si nos estuviera pasando:{" "}
                  <em className="italic">
                    &ldquo;tú y ella en una cama, allá en Bonafont&rdquo;
                  </em>
                  . Queríamos aprender, pero sobre todo quemar los cartuchos de
                  la juventud. En física nos dijeron que el amor no existe, pero
                  en química nos volvió la duda. Gracias a la profe de filosofía
                  abrimos el primer correo, solo para llenar el PC de virus
                  bajando canciones en Ares y flowhot.net.
                </p>
                <p>
                  Nos dábamos duro, como el cabezazo de Zidane a Materazzi.
                  Éramos unos pubertos con ganas de comernos el mundo, sin saber
                  que seríamos la última promoción de la historia del INALFU.
                  Hoy, aunque seamos más unos tíos chavorucos casi cuarentones,
                  nos convocamos para celebrar que compartimos esa etapa.
                </p>
              </div>
              <p className="mx-auto max-w-xl text-center font-display text-lg italic text-inalfu-800/90 sm:text-xl">
                📢 Camareras, Hadas, Faraones, Bufones y Vikingos
                ¡Bienvenidos a la Fiesta!
              </p>
              <div className="flex justify-center pt-1">
                <a
                  href="https://chat.whatsapp.com/H2MBfKG3SPA5kyL436iNJP"
                  className="hero-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ser parte del encuentro
                </a>
              </div>
            </Reveal>
            <Reveal className="relative min-h-[280px] aspect-[4/3] overflow-hidden rounded-2xl border border-inalfu-200 bg-white shadow-xl ring-1 ring-black/5 sm:min-h-[320px] md:aspect-square md:min-h-0">
              <Image
                src="/assets/images/hero-colegio.png"
                alt="El colegio INALFU — lugar que nos vio crecer"
                width={800}
                height={600}
                className="h-full w-full rounded-2xl object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Reveal>
          </div>
        </section>

        <section
          id="invitados"
          className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20"
        >
          <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-inalfu-800">
              Invitados
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              PROM 2026
            </h2>
            <div className="mx-auto max-w-2xl text-left text-base leading-relaxed text-slate-700 sm:max-w-3xl sm:text-lg">
              <p>
                Esta es una fiesta incluyente, no sólo abarca a quienes nos
                graduamos formalmente, sino también a quienes se graduaron por
                ventanilla, a quienes fueron reclutados por el ejército y no
                pudieron asistir al grado, a quienes se pasaron a la nocturna en
                10° u 11°, a los que perdieron el año, y quienes fueron muy
                cercanos a nuestra promoción, y no se graduaron con nosotros.
                Incluso queremos convocar profesores.
              </p>
            </div>
          </Reveal>
        </section>

        <section
          id="crush"
          className="border-t border-slate-100 bg-white py-16 md:py-20"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <Reveal className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Descubre quién era tu crush dos décadas atrás
              </h2>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
                Escribe tu primer nombre, veinte años de misterio, resueltos en
                segundos.
              </p>
              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                <label htmlFor="input-nombre" className="sr-only">
                  Tu primer nombre
                </label>
                <input
                  id="input-nombre"
                  type="text"
                  name="nombre-crush"
                  autoComplete="given-name"
                  placeholder="Tu primer nombre..."
                  className="w-full min-w-0 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-inalfu-600 focus:ring-2 focus:ring-inalfu-200 sm:max-w-xs"
                />
                <button
                  id="btn-crush"
                  type="button"
                  className="btn-primary shrink-0 justify-center px-8 py-3.5"
                >
                  Descúbrelo 💚
                </button>
              </div>
              <p
                id="error-crush"
                className="hidden text-sm font-medium text-red-600"
                role="alert"
              />
              <div
                id="resultado-crush"
                className="hidden space-y-5 rounded-2xl border border-inalfu-200 bg-inalfu-50/60 p-6 text-center shadow-sm sm:p-8"
              >
                <div
                  id="nombre-crush"
                  className="font-display min-h-[2.75rem] text-2xl font-semibold text-inalfu-800 sm:text-3xl"
                />
                <p
                  id="frase-crush"
                  className="hidden text-base italic leading-relaxed text-slate-700 sm:text-lg"
                />
                <button
                  id="btn-reintentar"
                  type="button"
                  className="btn-secondary mx-auto"
                >
                  Intentar de nuevo
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="galeria"
          className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20"
        >
          <Reveal className="mb-10 max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-inalfu-700">
              Galería
            </p>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Recuerdos en imagen y audio
            </h2>
            <p className="font-display text-base italic tracking-wide text-inalfu-800/75 sm:text-lg">
              #sendnudes
            </p>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <a
                href="https://open.spotify.com/playlist/2Aqw2ijTuVqsHbBbpY9Qzj?si=eaeb597053d24f93&pt=fb45c3a96de645ddcc12876e4488469c"
                className="font-medium text-inalfu-800 underline decoration-inalfu-200 underline-offset-2 transition hover:text-inalfu-600 hover:decoration-inalfu-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Añade a la lista de reproducción oficial del encuentro, esos
                temas que no pueden faltar
              </a>
            </p>
          </Reveal>
          <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:col-span-2 lg:col-span-2">
              <Image
                src="/assets/images/galeria-1-fiesta.jpeg"
                alt="Recuerdo del parche — fiesta y celebración"
                width={1200}
                height={800}
                className="h-full w-full max-h-[28rem] object-cover"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 66vw"
              />
              <figcaption className="sr-only">
                Primera imagen de la galería del encuentro
              </figcaption>
            </figure>
          </Reveal>
        </section>

        <section id="evento" className="bg-white py-16 md:py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <Reveal className="mb-10 max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-inalfu-800">
                Evento
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                The Last INALFU - 26 de diciembre de 2026
              </h2>
              <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                Prográmense desde la tarde, porque habrá misa 🙏,
                desfile👩🏼‍🎓, cena como si fuera la tienda del colegio 🤍💚, fiesta
                tipo miniTK y jeanday🎉, música en vivo 🕺🏼, invitados
                especiales💞 y mucho más
              </p>
              <p className="pt-2 text-center font-display text-xl italic tracking-wide text-inalfu-800 sm:text-2xl">
                anímesen
              </p>
            </Reveal>
            <ul className="grid gap-4 md:grid-cols-2">
              <li className="rounded-2xl border border-slate-200 p-5">
                <Reveal>
                  <h3 className="font-semibold text-slate-900">
                    Misa / conmemoración
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Para honrar y recordar a los que ya no están y agradecer por
                    este reencuentro.
                  </p>
                </Reveal>
              </li>
              <li className="rounded-2xl border border-slate-200 p-5">
                <Reveal>
                  <h3 className="font-semibold text-slate-900">Jean Day</h3>
                  <p className="mt-2 text-slate-700">
                    Encuentro previsto después del final de la tarde. Club
                    Colombia Rosúcio.
                  </p>
                </Reveal>
              </li>
              <li className="rounded-2xl border border-slate-200 p-5">
                <Reveal>
                  <h3 className="font-semibold text-slate-900">Horarios</h3>
                  <p className="mt-2 text-slate-700">
                    Cronograma del día: habrá francachela y habrá comilona.
                    Religión, Química, Educación Física.
                  </p>
                </Reveal>
              </li>
              <li className="rounded-2xl border border-slate-200 p-5">
                <Reveal>
                  <h3 className="font-semibold text-slate-900">DressCode</h3>
                  <p className="mt-2 text-slate-700">
                    Papis, mamis, chimbitas, picao a locos, como siempre.
                  </p>
                </Reveal>
              </li>
            </ul>
          </div>
        </section>

        <section
          id="anecdotas"
          className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20"
        >
          <Reveal>
            <Testimonials />
          </Reveal>
        </section>

        <section
          id="emprendimientos"
          className="bg-slate-50 py-12 text-sm text-slate-800 md:py-16"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <Reveal className="mb-8 max-w-3xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-inalfu-700">
                Emprendimientos
              </p>
              <h2 className="text-2xl font-bold text-slate-900 md:text-[1.65rem]">
                Lo que hacemos hoy
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Algunos nunca se fueron, otros nunca regresaron, otros vuelven
                con cierta frecuencia. Aquí tendremos un espacio para
                conectarnos
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {EMPRENDIMIENTOS_ITEMS.map((item) => (
                <Reveal
                  key={item.nombre}
                  className="card flex flex-col gap-2 p-4 sm:p-5"
                >
                  <p className="inline-flex w-fit rounded-full border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-slate-500">
                    {item.categoria}
                  </p>
                  <h3 className="text-base font-semibold leading-snug text-slate-900">
                    {item.nombre}
                  </h3>
                  <p className="text-[0.8125rem] italic leading-relaxed text-slate-600">
                    {item.descripcionCorta}
                  </p>
                  <p className="text-xs leading-relaxed text-slate-700">
                    {item.servicios}
                  </p>
                  <p className="pt-0.5 text-xs font-semibold text-inalfu-800">
                    {item.proveedor}
                  </p>
                  <a
                    href={`https://wa.me/${item.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex w-fit text-xs font-semibold text-inalfu-600 underline-offset-2 transition hover:text-inalfu-800 hover:underline"
                  >
                    {item.ctaWhatsapp}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="whatsapp" className="bg-slate-900 py-16 text-slate-100 md:py-20">
          <div className="mx-auto max-w-3xl space-y-6 px-4 text-center sm:px-6">
            <Reveal className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-inalfu-300">
                WhatsApp
              </p>
              <h2 className="text-3xl font-bold">Grupo oficial del encuentro</h2>
              <p className="text-slate-300">
                Si llegaste hasta aquí, fijo ya estas en el grupo. Si lo tienes
                archivado, entra de vez en cuando a motivar las diales y
                participa para cuadrar fechas, lugares, misa, fiesta y todo sobre
                el encuentro de The Last INALFU.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://chat.whatsapp.com/H2MBfKG3SPA5kyL436iNJP"
                  className="btn-primary w-full min-w-[14rem] justify-center sm:w-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entrar al grupo de WhatsApp
                </a>
                <a
                  href="#inicio-landing"
                  className="btn-primary w-full min-w-[14rem] justify-center sm:w-auto"
                >
                  Volver arriba
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 py-6 text-xs text-slate-600 sm:gap-x-4 sm:px-6 sm:text-sm">
          <span className="inline-flex shrink-0 items-center gap-2 text-center text-xs leading-none sm:text-sm sm:whitespace-nowrap">
            <span className="leading-none">
              © 2026 GuineoLab. Tecnología hecha a mano
            </span>
            <Image
              src="/assets/images/Guineolabpng.png"
              alt="Guineo Lab"
              width={96}
              height={14}
              className="h-[1.95cap] w-auto shrink-0 object-contain object-bottom opacity-90 sm:h-[2.15cap]"
              loading="lazy"
            />
          </span>
          <span className="hidden text-slate-300 sm:inline" aria-hidden>
            |
          </span>
          <a
            href="#sobre-el-encuentro"
            className="shrink-0 whitespace-nowrap font-medium hover:text-inalfu-700"
          >
            Sobre el encuentro
          </a>
        </div>
      </footer>
    </>
  );
}
