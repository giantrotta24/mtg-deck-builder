import { useState } from 'react';

/**
 *
 * A custom "useToggle" like hook to flip double sided cards
 * @param defaultCardFace The initial card face, default to 'front'
 *
 * Returns
 * @param cardFace The current card face, front or back
 * @param transformCard Toggle our cardFace state between front or back
 */
export default function useTransformCard(defaultCardFace = 'front') {
  const [cardFace, setCardFace] = useState<string>(defaultCardFace);
  const transformCard = () =>
    setCardFace(cardFace === 'front' ? 'back' : 'front');

  return [cardFace, transformCard] as [
    cardFace: string,
    transformCard: () => void
  ];
}
