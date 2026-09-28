"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CATALOGO_LINK_LABEL = "Ver catálogo de géneros disponibles";
const CATALOGO_LINK_HREF = "#";
const SCROLL_TRIGGER_ID = "experiencia-proceso";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Descubrimos la historia detrás del vestido.",
    text: "No comenzamos hablando de telas, sino de vos. De tu esencia, de cómo imaginás ese día y de las emociones que querés recordar para siempre. Escuchamos cada detalle, tomamos tus medidas y empezamos a transformar un sueño en una idea posible.",
  },
  {
    number: "02",
    title: "Donde la inspiración encuentra su textura.",
    text: "Exploramos juntos géneros, encajes, sedas y terminaciones cuidadosamente seleccionadas. Cada material aporta carácter, movimiento y personalidad para que el diseño cobre vida con la identidad que imaginaste.",
  },
  {
    number: "03",
    title: "El diseño empieza a encontrarte.",
    text: "Es el momento en que el vestido deja de ser un boceto y comienza a convertirse en una pieza viva. Ajustamos proporciones, perfeccionamos la silueta y refinamos cada detalle para que todo se sienta naturalmente tuyo.",
  },
  {
    number: "04",
    title: "La alta costura está en lo que casi no se ve.",
    text: "Cada terminación se revisa con precisión artesanal. Bordados, caídas, costuras y acabados reciben la atención que transforma un vestido en una obra hecha exclusivamente para una única mujer.",
  },
  {
    number: "05",
    title: "El vestido encuentra a quien siempre perteneció.",
    text: "La entrega marca el final del proceso de creación y el comienzo de un recuerdo que permanecerá para siempre. Más que un vestido, llevás contigo una pieza concebida para acompañarte en uno de los momentos más importantes de tu vida.",
  },
];

export const ExperienciaProceso = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!wrapper || !viewport || !track) {
        return;
      }

      // Guard against a duplicate ScrollTrigger if this effect ever runs
      // twice for the same section (e.g. React Strict Mode in dev).
      ScrollTrigger.getById(SCROLL_TRIGGER_ID)?.kill();

      // Single source of truth: the wrapper's height and the animation's
      // end point both come from this one measured value, so they can't
      // drift apart — the pin can only release once the shift is done.
      const scrollDistance = track.scrollWidth - viewport.offsetWidth;
      wrapper.style.height = `calc(100vh + ${scrollDistance}px)`;

      gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          id: SCROLL_TRIGGER_ID,
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: wrapperRef }
  );

  return (
    <section ref={wrapperRef} className="relative min-h-screen bg-white">
      <div
        ref={viewportRef}
        className="sticky top-0 flex h-screen flex-col justify-center gap-16 overflow-hidden px-6 py-16 sm:px-10 lg:px-14"
      >
        <div className="mx-auto w-full max-w-6xl overflow-hidden">
          <div ref={trackRef} className="flex">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="w-full shrink-0 pr-8 sm:w-1/2 lg:w-1/3 lg:pr-16"
              >
                <span className="font-garet text-5xl text-neutral-900">
                  {step.number}
                </span>

                <div className="mt-8 flex flex-col gap-4">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900">
                    {step.title}
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto flex flex-col items-center gap-4">
          <Link
            href={CATALOGO_LINK_HREF}
            className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900 underline underline-offset-4 transition-opacity duration-200 hover:opacity-70"
          >
            {CATALOGO_LINK_LABEL}
          </Link>
          <span className="h-px w-16 bg-neutral-300" />
        </div>
      </div>
    </section>
  );
};
