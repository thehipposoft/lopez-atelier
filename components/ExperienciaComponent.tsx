import Image from "next/image";
import { ExperienciaProceso } from "@/components/ExperienciaProceso";

const GALLERY_PLACEHOLDER_COLORS = [
  "bg-stone-300",
  "bg-neutral-400",
  "bg-neutral-800",
  "bg-stone-200",
];

type TextSection = {
  label: string;
  columnTwo: string[];
  columnThree: string[];
};

const TEXT_SECTIONS: TextSection[] = [
  {
    label: "El atelier",
    columnTwo: [
      "Entrar a López Atelier es regalarte un instante solo para vos.",
      "Un espacio donde el arte y la alta costura dialogan en cada rincón, y donde cada detalle está pensado para inspirarte.",
      "Aquí no solo nacen vestidos: aquí se celebra tu esencia, se habitan sueños y se vive la magia de la creación.",
    ],
    columnThree: [
      "Entre trazos y telas, entre obras y moldes, el tiempo se detiene para que vos seas la protagonista.",
      "Bienvenida a López Atelier.",
    ],
  },
  {
    label: "Un recorrido que comienza mucho antes del vestido",
    columnTwo: [
      "Cada creación nace de una conversación. Desde el primer encuentro hasta la última prueba, cada cita es parte de una experiencia pensada para descubrir, construir y dar vida a una pieza única, creada exclusivamente para vos.",
    ],
    columnThree: [],
  },
];

const ARTISANS_INTRO_PRIMARY =
  "En López Atelier creemos que cada vestido es más que una prenda: es la memoria de un instante que quedará para siempre. Cada costura guarda un suspiro, cada textura, una promesa.";

const ARTISANS_INTRO_SECONDARY =
  "Si tu historia merece ser única, merece ser creada a medida para vos.";

const ARTISANS_LOCATION = "Córdoba, Argentina";

const ARTISANS = [
  {
    name: "Sofía Martínez",
    role: "Maestra Bordadora",
    quote:
      "Con más de 25 años de experiencia, Sofía lidera nuestro equipo de ornamentación. Especialista en técnicas de hilo de oro.",
  },
  {
    name: "Julián Ferrero",
    role: "Patronista Senior",
    quote:
      "Arquitecto de formación y sastre de alma, Julián convierte bocetos abstractos en estructuras nupciales perfectas.",
  },
  {
    name: "Elena Ross",
    role: "Especialista en Encaje",
    quote:
      "Elena selecciona y restaura encajes antiguos, asegurando que cada pieza de Diego López tenga un alma histórica.",
  },
];

export const ExperienciaComponent = () => (
  <>
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-neutral-700 text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/50" />

      <div className="relative flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/80">
          Alta costura nupcial
        </span>

        <h1 className="max-w-3xl text-4xl uppercase tracking-[0.08em] sm:text-5xl lg:text-6xl">
          Experiencia López Couture
        </h1>

        <span className="h-px w-16 bg-white/60" />
      </div>

      <div className="relative px-6 pb-10 sm:px-10 lg:px-14">
        <a
          href="#galeria"
          aria-label="Ir al contenido"
          className="flex size-10 items-center justify-center rounded-full border border-white/50 text-white transition-colors duration-200 hover:border-white"
        >
          <ArrowDownIcon className="size-4" />
        </a>
      </div>
    </section>

    <section
      id="galeria"
      className="relative overflow-hidden bg-white px-6 py-16 sm:px-10 sm:py-24 lg:px-14"
    >
      <Image
        src="/assets/images/background-logo.png"
        alt=""
        width={642}
        height={601}
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/4 w-[45%] max-w-none sm:w-[30%]"
      />

      <div className="relative mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {GALLERY_PLACEHOLDER_COLORS.map((color, index) => (
          <div key={index} className={`aspect-4/5 w-full ${color}`} />
        ))}
      </div>
    </section>

    <section className="relative overflow-hidden bg-white px-6 pb-16 sm:px-10 sm:pb-24 lg:px-14">
      <Image
        src="/assets/images/background-logo.png"
        alt=""
        width={642}
        height={601}
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 w-[45%] max-w-none sm:w-[30%]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-20">
        {TEXT_SECTIONS.map((section) => (
          <div
            key={section.label}
            className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-3"
          >
            <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900">
              {section.label}
            </h2>

            <div className="flex flex-col gap-5">
              {section.columnTwo.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-neutral-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              {section.columnThree.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-sm leading-relaxed ${
                    index === section.columnThree.length - 1
                      ? "font-medium text-neutral-900"
                      : "text-neutral-600"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <ExperienciaProceso />

    <section className="bg-neutral-100 px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-900">
            Nuestros artesanos
          </h2>

          <div className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
            <p className="text-sm leading-relaxed text-neutral-600">
              {ARTISANS_INTRO_PRIMARY}
            </p>
            <p className="text-sm leading-relaxed text-neutral-600">
              {ARTISANS_INTRO_SECONDARY}
            </p>
          </div>

          <div className="flex items-center justify-end gap-4">
            <span className="h-px w-40 max-w-[20vw] bg-neutral-300" />
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
              {ARTISANS_LOCATION}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-3">
          {ARTISANS.map((artisan) => (
            <div key={artisan.name} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="size-16 shrink-0 rounded-full bg-neutral-300" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-garet text-base font-bold text-neutral-900">
                    {artisan.name}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                    {artisan.role}
                  </span>
                </div>
              </div>

              <p className="text-sm italic leading-relaxed text-neutral-600">
                &quot;{artisan.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const ArrowDownIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <path
      d="M8 2v11M3.5 9L8 13.5 12.5 9"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
