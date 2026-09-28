import type {
  SecondDress,
  SecondDressFoto,
  WPMediaRaw,
  WPSecondDressRaw,
} from "@/types/secondDress";
import { WP_MAX_PER_PAGE, wpFetch } from "@/lib/wordpress";

const SECOND_DRESS_ENDPOINT = "/second-dress";
const MEDIA_ENDPOINT = "/media";

const collectFotoIds = (items: WPSecondDressRaw[]): number[] => {
  const ids = items
    .map((item) => item.acf.foto_principal)
    .filter((id): id is number => typeof id === "number");

  return [...new Set(ids)];
};

const getFotosByIds = async (
  ids: number[]
): Promise<Map<number, SecondDressFoto>> => {
  if (ids.length === 0) {
    return new Map();
  }

  const response = await wpFetch(
    `${MEDIA_ENDPOINT}?include=${ids.join(",")}&per_page=${WP_MAX_PER_PAGE}&_fields=id,source_url,alt_text,media_details`,
    "No se pudieron obtener las fotos de second dress"
  );
  const raw = (await response.json()) as WPMediaRaw[];

  return new Map(
    raw.map((media) => [
      media.id,
      {
        id: media.id,
        url: media.source_url,
        alt: media.alt_text,
        width: media.media_details.width,
        height: media.media_details.height,
      },
    ])
  );
};

const mapWPSecondDress = (
  raw: WPSecondDressRaw,
  fotos: Map<number, SecondDressFoto>
): SecondDress => {
  const fotoId = raw.acf.foto_principal;

  return {
    id: raw.id,
    slug: raw.slug,
    titulo: raw.title.rendered,
    tag: raw.acf.tag ?? "",
    year: raw.acf.year ?? null,
    foto: typeof fotoId === "number" ? (fotos.get(fotoId) ?? null) : null,
  };
};

const mapWPSecondDressList = async (
  items: WPSecondDressRaw[]
): Promise<SecondDress[]> => {
  const fotos = await getFotosByIds(collectFotoIds(items));

  return items.map((item) => mapWPSecondDress(item, fotos));
};

export const getSecondDresses = async (): Promise<SecondDress[]> => {
  const response = await wpFetch(
    `${SECOND_DRESS_ENDPOINT}?per_page=${WP_MAX_PER_PAGE}`,
    "No se pudo obtener el listado de second dress"
  );
  const raw = (await response.json()) as WPSecondDressRaw[];

  return mapWPSecondDressList(raw);
};

export const getSecondDressBySlug = async (
  slug: string
): Promise<SecondDress | null> => {
  const response = await wpFetch(
    `${SECOND_DRESS_ENDPOINT}?slug=${encodeURIComponent(slug)}`,
    `No se pudo obtener el second dress "${slug}"`
  );
  const raw = (await response.json()) as WPSecondDressRaw[];

  if (raw.length === 0) {
    return null;
  }

  const [secondDress] = await mapWPSecondDressList(raw);

  return secondDress;
};
