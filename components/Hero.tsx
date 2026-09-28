import Image from "next/image";
import Link from "next/link";

const COLLECTION_NAME = "Melanstalgia";
const COLLECTION_TAGLINE = "-la belleza en su estado más frágil-";
const COLLECTION_CAPTION = "Melanstalgia Mayo 2026";
const COLLECTION_LINK_LABEL = "Descubre esta colección";
const COLLECTION_LINK_HREF = "/colecciones/melanstalgia";

export const Hero = () => (
  <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-neutral-900 text-white">
    <Image
      src="/assets/images/hero-portada.webp"
      alt=""
      fill
      priority
      aria-hidden="true"
      className="object-cover grayscale"
    />
    <div className="absolute inset-0 bg-black/40" />

    <div className="relative flex flex-col gap-2 px-6 pb-10 sm:px-10 lg:px-14 lg:w-7xl mx-auto">
      <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/90">
        {COLLECTION_CAPTION}
      </span>
      <Link
        href={COLLECTION_LINK_HREF}
        className="w-fit text-xs font-medium uppercase tracking-[0.15em] text-white underline underline-offset-4 transition-opacity duration-200 hover:opacity-70"
      >
        {COLLECTION_LINK_LABEL}
      </Link>
    </div>
  </section>
);
