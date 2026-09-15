export type EditionBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type Edition = {
  slug: string;
  kicker: string;
  title: string;
  dek: string;
  date: string;
  theme: string;
  image?: string;
  imageAlt?: string;
  relatedTickers?: string[];
  body: EditionBlock[];
};
