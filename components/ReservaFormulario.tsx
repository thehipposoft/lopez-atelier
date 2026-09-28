import type { InputHTMLAttributes } from "react";

const INFO_BULLETS = [
  "Recomendamos reservar con un mínimo de 6 a 9 meses de antelación.",
  "Las citas en el Atelier son exclusivas y requieren confirmación previa.",
  "Ofrecemos fittings remotos para novias internacionales.",
];

const CONSULTA_OPTIONS = [
  "Vestido de novia a medida",
  "Second dress",
  "Ajustes y arreglos",
  "Otra consulta",
];

export const ReservaFormulario = () => (
  <section id="formulario" className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-14">
    <div className="mx-auto flex max-w-5xl flex-col gap-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[3fr_2fr] md:gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="font-garet text-3xl text-neutral-900 sm:text-4xl">
            La Experiencia del Atelier comienza aquí
          </h2>

          <p className="text-sm leading-relaxed text-neutral-600">
            Cada creación en Diego López Atelier es un viaje compartido. Te
            invitamos a completar nuestro cuestionario nupcial para que
            podamos preparar tu consulta con el cuidado y la atención al
            detalle que tu historia merece.
          </p>

          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center gap-3 text-sm text-neutral-700">
              <PinIcon className="size-4 shrink-0 text-neutral-500" />
              Córdoba, Argentina | Atelier Privado
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-700">
              <GlobeIcon className="size-4 shrink-0 text-neutral-500" />
              Consultas Globales Disponibles
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-neutral-50 p-6">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-900">
            Información Importante
          </span>

          <ul className="flex flex-col gap-3">
            {INFO_BULLETS.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-2 text-xs leading-relaxed text-neutral-600"
              >
                <span>•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <form className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <SectionHeading step="01" title="Datos personales" />

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <FormField
              label="Nombre completo"
              name="nombre"
              placeholder="Ej. Sofia Martínez"
            />
            <FormField
              label="Correo electrónico"
              type="email"
              name="email"
              placeholder="sofia@ejemplo.com"
            />
            <FormField
              label="Teléfono / WhatsApp"
              type="tel"
              name="telefono"
              placeholder="+54 9 351 000-0000"
            />
            <FormField
              label="Ciudad / País"
              name="ciudad"
              placeholder="Córdoba, Argentina"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading step="02" title="Tu gran día" />

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <FormField label="Fecha de boda" type="date" name="fechaBoda" />

            <label className="flex flex-col gap-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                Tipo de consulta
              </span>
              <div className="relative">
                <select
                  name="tipoConsulta"
                  defaultValue=""
                  className="w-full appearance-none border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-neutral-400 focus:outline-none"
                >
                  <option value="" disabled>
                    Seleccione una opción
                  </option>
                  {CONSULTA_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-neutral-500" />
              </div>
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading step="03" title="Cuestionario nupcial" />

          <label className="flex flex-col gap-2">
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-500">
              Tu visión (estilo, silueta, telas)
            </span>
            <textarea
              name="vision"
              rows={4}
              placeholder="Contanos sobre tu estilo, qué te inspira y cómo imaginás tu vestido ideal..."
              className="resize-none border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
            />
          </label>
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading step="04" title="Preferencia de cita" />

          <p className="text-sm italic text-neutral-500">
            Por favor, indicá tres fechas tentativas para tu consulta privada
            en el Atelier.
          </p>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
            <FormField label="Opción 1" name="opcion1" />
            <FormField label="Opción 2" name="opcion2" />
            <FormField label="Opción 3" name="opcion3" />
          </div>
        </div>

        <label className="flex items-start gap-3 text-sm text-neutral-600">
          <input
            type="checkbox"
            name="aceptaPolitica"
            className="mt-0.5 size-4 shrink-0 accent-neutral-900"
          />
          Entiendo que mi cita está sujeta a disponibilidad y que el Atelier
          me contactará para confirmar el horario final. He leído y acepto la
          Política de Privacidad.
        </label>

        <div className="flex flex-col items-center gap-3 pt-2">
          <button
            type="submit"
            className="flex items-center gap-2 bg-neutral-900 px-10 py-4 text-xs font-medium uppercase tracking-[0.15em] text-white transition-opacity duration-200 hover:opacity-90"
          >
            Enviar Consulta
            <WhatsAppIcon className="size-4" />
          </button>

          <span className="text-[11px] uppercase tracking-[0.15em] text-neutral-400">
            Respuesta en 48hs hábiles
          </span>
        </div>
      </form>
    </div>
  </section>
);

const SectionHeading = ({ step, title }: { step: string; title: string }) => (
  <div className="flex items-center gap-4">
    <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.15em] text-neutral-900">
      <span className="mr-2 text-neutral-400">{step}</span>
      {title}
    </span>
    <span className="h-px flex-1 bg-neutral-200" />
  </div>
);

const FormField = ({
  label,
  ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) => (
  <label className="flex flex-col gap-2">
    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-500">
      {label}
    </span>
    <input
      {...props}
      className="border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
    />
  </label>
);

const PinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path
      d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth={1.4} />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={1.4} />
    <path
      d="M3.5 12h17M12 3.5c2.5 2.4 3.8 5.3 3.8 8.5s-1.3 6.1-3.8 8.5c-2.5-2.4-3.8-5.3-3.8-8.5S9.5 5.9 12 3.5Z"
      stroke="currentColor"
      strokeWidth={1.4}
    />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1 1.5L6 6.5L11 1.5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path
      d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.4-1.3A8.4 8.4 0 1 0 12 3.5Z"
      stroke="currentColor"
      strokeWidth={1.4}
    />
    <path
      d="M8.7 8.6c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .5.4.2.5.6 1.5.6 1.6.1.1.1.3 0 .4-.1.2-.1.3-.3.5s-.3.3-.1.6c.2.3.8 1.2 1.7 1.9 1.1.9 1.9 1.2 2.2 1.3.2.1.4.1.5-.1.2-.2.6-.7.8-.9.2-.2.3-.2.5-.1s1.4.7 1.7.8c.2.1.4.2.4.3.1.2.1.9-.2 1.6-.3.7-1.6 1.4-2.2 1.4-.6 0-1.3.1-4.2-1.1-3.5-1.5-5.7-5.1-5.9-5.3-.2-.2-1.4-1.8-1.4-3.4 0-1.6.9-2.4 1.2-2.7Z"
      fill="currentColor"
    />
  </svg>
);
