/**
 * type for individual card data fetch
 */
export type CardData = {
  id: string;
  lang: string;
  uri: string;
  name: string;
  type_line: string;
  card_faces?: any[];
  image_uris?: {
    normal: string;
  };
};
