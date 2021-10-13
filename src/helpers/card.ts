import { CardData } from '../models/Cards';

export const createCard = (data: CardData, cardFace: string) => {
  if (!data.id) {
    return { isMultiFace: false, card: null };
  }

  const card = data;
  const isMultiFace = !!card?.card_faces?.length;
  if (isMultiFace) {
    const i = cardFace === 'front' ? '0' : '1';
    const cardFaces = card?.card_faces || [];

    return {
      isMultiFace,
      card: {
        ...card,
        name: cardFaces[i].name,
        type_line: cardFaces[i].type_line,
        images: [
          cardFaces[0].image_uris?.normal,
          cardFaces[1].image_uris?.normal,
        ],
      },
    };
  }

  return {
    isMultiFace: false,
    card: {
      ...card,
      images: [card.image_uris?.normal],
    },
  };
};
