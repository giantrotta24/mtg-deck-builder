import { useState } from 'react';

export default function useTransformCard(defaultCardFace = 'front') {
  const [cardFace, setCardFace] = useState<string>(defaultCardFace);
  const transformCard = () =>
    setCardFace(cardFace === 'front' ? 'back' : 'front');

  return [cardFace, transformCard] as [
    cardFace: string,
    transformCard: () => void
  ];
}
