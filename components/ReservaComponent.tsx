import Image from "next/image";
import { ReservaFormulario } from "@/components/ReservaFormulario";

export const ReservaComponent = () => (
  <>
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-900">
      <Image
        src="/assets/images/reserva.webp"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative flex flex-col items-center gap-6 px-6 text-center text-white">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/80">
          Reservar una cita
        </span>

        <h1 className="max-w-3xl text-3xl uppercase tracking-[0.08em] sm:text-4xl lg:text-5xl">
          Tu vestido comienza con una conversación
        </h1>

        <span className="h-px w-16 bg-white/60" />
      </div>

      <a
        href="#formulario"
        aria-label="Ir al formulario"
        className="absolute bottom-8 left-6 flex size-10 items-center justify-center rounded-full border border-white/50 text-white transition-colors duration-200 hover:border-white sm:left-10 lg:left-14"
      >
        <ArrowDownIcon className="size-4" />
      </a>
    </section>

    <ReservaFormulario />
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
