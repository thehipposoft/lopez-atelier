"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const EYEBROW = "Diego López";
const CATALOGO_LINK_LABEL = "Ver catálogo de géneros disponibles";
const CATALOGO_LINK_HREF = "#";

type ConoceSection = {
  imageSide: "left" | "right";
  isPortrait?: boolean;
  placeholderColor?: string;
  paragraphs: string[];
};

const SECTIONS: ConoceSection[] = [
  {
    imageSide: "left",
    isPortrait: true,
    paragraphs: [
      "Diseñar vestidos de novia es, para mí, un acto profundamente artesanal. Cada puntada, cada tela elegida, cada forma que toma un diseño, es parte de un lenguaje que viene a mí ancestralmente. Trabajo con técnicas que aprendí de manos expertas, con un respeto absoluto por los oficios que nos preceden y nos enseñan a mirar el detalle con otra profundidad.",
      "Pero también creo en el poder de la innovación. En este atelier no se trata de elegir entre lo tradicional o lo contemporáneo: acá las dos cosas conviven.",
      "Incorporamos tecnologías que potencian la precisión, la personalización y nos permiten mantener vivas las técnicas de siempre, llevándolas a su mejor versión, en tiempo presente.",
    ],
  },
  {
    imageSide: "right",
    placeholderColor: "bg-rose-100",
    paragraphs: [
      "Cada diseño que creamos con mi equipo es exclusivo. No porque sea costoso o inalcanzable, sino porque está hecho para cada una de ustedes. Desde su esencia, desde su historia, desde su cuerpo.",
      "El lujo, para mí, es eso: lo que se hace con tiempo, con saber, con dedicación, con el alma. Lo que no se repite. Lo que respira humanidad.",
      "Si sentís que este es el tipo de vestido con el que querés caminar hacia una nueva etapa, escribinos. Estamos para escuchar tu historia y crear juntos algo que cuente quién sos.",
    ],
  },
  {
    imageSide: "left",
    placeholderColor: "bg-amber-100",
    paragraphs: [
      "Cada textil tiene su propio lenguaje. Algunos susurran suavidad, otros imponen presencia. Elegir la tela correcta no es solo una cuestión técnica, es también una decisión emocional.",
      "Porque las telas transmiten. Un mikado habla de estructura y elegancia. Un encaje evoca romanticismo y delicadeza. La pedrería expresa brillo, intención y carácter.",
      "En López Atelier creemos que el alma del vestido se completa cuando el textil y la morfología dialogan. Solo ahí, la silueta cobra vida.",
    ],
  },
];

export const ConoceComponent = () => {
  const container = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      sectionRefs.current.forEach((section) => {
        if (!section) {
          return;
        }

        gsap.from(section.querySelectorAll(".image"), {
          scrollTrigger: { trigger: section, start: "15% center" },
          opacity: 0,
          duration: 1.2,
        });

        gsap.from(section.querySelectorAll(".reveal"), {
          scrollTrigger: { trigger: section, start: "20% center" },
          opacity: 0,
          yPercent: 25,
          duration: 0.6,
          stagger: 0.15,
        });
      });
    },
    { scope: container }
  );

  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <Image
        src="/assets/images/background-logo.png"
        alt=""
        width={642}
        height={601}
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 w-[55%] max-w-none sm:w-[38%]"
      />

      <div ref={container} className="relative mx-auto flex max-w-6xl flex-col gap-24">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900">
          {EYEBROW}
        </span>

        {SECTIONS.map((section, index) => (
          <div
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className={`flex flex-col gap-8 md:gap-16 ${
              section.imageSide === "right"
                ? "md:flex-row-reverse"
                : "md:flex-row"
            }`}
          >
            <div className="md:w-1/2">
              {section.isPortrait ? (
                <div className="relative aspect-742/778 w-[78vw] max-w-[380px] sm:max-w-[420px]">
                  <Image
                    src="/assets/images/about/aboutbg.webp"
                    alt=""
                    width={742}
                    height={778}
                    aria-hidden="true"
                    className="h-full w-full object-contain"
                  />
                  <Image
                    src="/assets/images/about/diego-about.png"
                    alt="Diego López"
                    width={542}
                    height={593}
                    className="image absolute left-[16%] top-[10%] w-[73%] object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`image aspect-4/5 w-full ${section.placeholderColor}`}
                />
              )}
            </div>

            <div className="flex flex-col justify-center gap-5 md:w-1/2">
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="reveal text-sm leading-relaxed text-neutral-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}

        <Link
          href={CATALOGO_LINK_HREF}
          className="ml-auto w-fit text-xs font-medium uppercase tracking-[0.15em] text-neutral-900 underline underline-offset-4 transition-opacity duration-200 hover:opacity-70"
        >
          {CATALOGO_LINK_LABEL}
        </Link>
      </div>
    </section>
  );
};
