export const transformTitle = (cardFaces: any[], cardFace: string): string => {
  const title = cardFace === 'front' ? cardFaces[0].name : cardFaces[1].name;

  return title;
};

export const transformType = (cardFaces: any[], cardFace: string): string => {
  const type =
    cardFace === 'front' ? cardFaces[0].type_line : cardFaces[1].type_line;

  return type;
};
