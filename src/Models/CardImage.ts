export type CardFaces = any[];

export interface CardImageTypes {
  images?: CardFaces;
  name: string;
  isMultiFace: boolean;
  cardFace: string;
  transformCard: () => void;
}
