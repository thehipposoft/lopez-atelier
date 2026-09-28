import Image from "next/image";
import type { Coleccion } from "@/types/coleccion";

const LOREM_COLUMN_ONE = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.",
  "Sed nisi nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum, praesent mauris. Fusce nec tellus sed augue semper porta.",
  "Mauris massa vitae tortor condimentum lacinia quis vel eros. Donec ac odio tempor orci dapibus ultrices in iaculis nunc.",
  "Sed augue lacus, viverra vitae congue eu, consequat ac felis. Donec pulvinar, elementum integer enim neque volutpat ac.",
];

const LOREM_COLUMN_TWO = [
  "Tincidunt vitae, semper quis, lectus. Nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis.",
  "Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Suspendisse sed nisi lorem.",
  "Mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum, porttitor a interdum non consequat.",
];

const GALLERY_TILE_ASPECTS = [
  "aspect-3/4",
  "aspect-square",
  "aspect-4/5",
  "aspect-3/4",
  "aspect-4/5",
  "aspect-square",
];

type ColeccionSingleProps = {
  coleccion: Coleccion;
};

export const ColeccionSingle = ({ coleccion }: ColeccionSingleProps) => {
  const [coverImage] = coleccion.galeria;

  return (
    <>
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-neutral-900 text-white">
        {coverImage && (
          <Image
            src={coverImage.url}
            alt={coverImage.alt || coleccion.titulo}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative flex flex-1 flex-col items-center justify-center px-6 text-center">
          <h1 className="font-garet text-5xl sm:text-6xl lg:text-7xl">
            {coleccion.titulo}
          </h1>
        </div>

        <div className="relative flex flex-col gap-4 px-6 pb-10 sm:px-10 lg:px-14">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/90">
            {coleccion.titulo} {coleccion.fecha}
          </span>

          <a
            href="#sobre-la-coleccion"
            aria-label="Ir al contenido de la colección"
            className="flex size-10 items-center justify-center rounded-full border border-white/50 text-white transition-colors duration-200 hover:border-white"
          >
            <ArrowDownIcon className="size-4" />
          </a>
        </div>
      </section>

      <section
        id="sobre-la-coleccion"
        className="relative overflow-hidden bg-white px-6 py-16 sm:px-10 sm:py-24 lg:px-14"
      >
        <Image
          src="/assets/images/background-logo.png"
          alt=""
          width={642}
          height={601}
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-10 w-[45%] max-w-none sm:w-[32%]"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
          <h2 className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900">
            Sobre la colección
          </h2>

          <div className="grid grid-cols-1 gap-x-16 gap-y-6 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              {LOREM_COLUMN_ONE.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-neutral-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {LOREM_COLUMN_TWO.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-neutral-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-16 sm:px-10 sm:pb-24 lg:px-14">
        <div className="mx-auto columns-1 gap-6 sm:columns-2 sm:max-w-6xl">
          {coleccion.galeria.map((imagen, index) => (
            <div
              key={imagen.id}
              className={`relative mb-6 w-full break-inside-avoid bg-neutral-100 ${
                GALLERY_TILE_ASPECTS[index % GALLERY_TILE_ASPECTS.length]
              }`}
            >
              <Image
                src={imagen.url}
                alt={imagen.alt || coleccion.titulo}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

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
