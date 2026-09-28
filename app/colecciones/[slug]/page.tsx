import { notFound } from "next/navigation";
import { ColeccionSingle } from "@/components/ColeccionSingle";
import { getColeccionBySlug } from "@/lib/coleccion";

export default async function ColeccionPage(props: PageProps<"/colecciones/[slug]">) {
  const { slug } = await props.params;
  const coleccion = await getColeccionBySlug(slug);

  if (!coleccion) {
    notFound();
  }

  return <ColeccionSingle coleccion={coleccion} />;
}
