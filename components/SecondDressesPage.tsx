import { SecondaryGrid } from "@/components/SecondaryGrid";
import type { SecondDress } from "@/types/secondDress";

const TITLE = "Second Dress";

const PARAGRAPH_PRIMARY =
  "Hay un momento de la boda donde todo cambia. Ya diste el “sí”, brindaste, abrazaste a quienes más querías... y llega el momento de disfrutar sin límites.";

const PARAGRAPH_SECONDARY =
  "Pensados para seguir sintiéndote increíble, con la misma exclusividad y el mismo nivel de diseño, pero con la libertad de bailar, celebrar y vivir cada instante de tu boda.";

const CTA_LABEL = "Quiero más información";
const CTA_HREF = "/reserva";

const EMPTY_MESSAGE = "No hay second dress publicados todavía.";

type SecondDressesPageProps = {
  secondDresses: SecondDress[];
};

export const SecondDressesPage = ({ secondDresses }: SecondDressesPageProps) => (
  <main className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-14">
    <div className="mx-auto flex max-w-6xl flex-col gap-16 sm:gap-20">
      <header className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-4">
        <div className="flex flex-col gap-3 md:px-3">
          <h1 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-900">
            {TITLE}
          </h1>
          <span className="block h-px w-8 bg-neutral-200" />
        </div>

        <p className="font-garet text-xs leading-relaxed text-neutral-700 md:px-3">
          {PARAGRAPH_PRIMARY}
        </p>

        <p className="font-garet text-xs leading-relaxed text-neutral-700 md:px-3">
          {PARAGRAPH_SECONDARY}
        </p>
      </header>

      {secondDresses.length === 0 ? (
        <p className="text-center text-sm text-neutral-500">{EMPTY_MESSAGE}</p>
      ) : (
        <SecondaryGrid
          items={secondDresses}
          ctaLabel={CTA_LABEL}
          ctaHref={CTA_HREF}
        />
      )}
    </div>
  </main>
);
