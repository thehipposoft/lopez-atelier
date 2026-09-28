export type SecondDressFoto = {
  id: number;
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type SecondDress = {
  id: number;
  slug: string;
  titulo: string;
  tag: string;
  year: number | null;
  foto: SecondDressFoto | null;
};

export type WPSecondDressRaw = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  acf: {
    foto_principal?: number | false | null;
    tag?: string;
    year?: number;
  };
};

export type WPMediaRaw = {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
  };
};
