import Image from "next/image";
import Link from "next/link";

export type SecondaryGridItem = {
  id: number;
  titulo: string;
  tag: string;
  year: number | null;
  foto: {
    url: string;
    alt: string;
    width: number;
    height: number;
  } | null;
};

type SecondaryGridProps = {
  items: SecondaryGridItem[];
  ctaLabel: string;
  ctaHref: string;
};

export const SecondaryGrid = ({
  items,
  ctaLabel,
  ctaHref,
}: SecondaryGridProps) => (
  <div className="grid grid-cols-1 items-start gap-x-4 gap-y-16 sm:grid-cols-2 md:grid-cols-3">
    {items.map((item) => (
      <article key={item.id} className="flex flex-col border border-neutral-200 bg-white">
        {item.foto ? (
          <Image
            src={item.foto.url}
            alt={item.foto.alt || item.titulo}
            width={item.foto.width}
            height={item.foto.height}
            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="h-auto w-full bg-neutral-100"
          />
        ) : (
          <div className="aspect-4/5 w-full bg-neutral-100" />
        )}

        <div className="flex flex-col items-center gap-4 px-5 py-5">
          <div className="flex w-full items-center justify-between">
            {item.tag && (
              <span className="border border-neutral-200 px-2 py-0.5 text-[10px] text-neutral-600">
                {item.tag}
              </span>
            )}
            {item.year && (
              <span className="ml-auto text-[10px] text-neutral-400">
                {item.year}
              </span>
            )}
          </div>

          <Link
            href={ctaHref}
            className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900 underline underline-offset-4 transition-opacity duration-200 hover:opacity-70"
          >
            {ctaLabel}
          </Link>
        </div>
      </article>
    ))}
  </div>
);
