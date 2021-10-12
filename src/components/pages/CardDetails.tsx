import React from 'react';
import { useParams } from 'react-router';

import { transformTitle, transformType } from '../../helpers/multi-face';
import { useFetch } from '../../hooks/useFetch';
import useTransformCard from '../../hooks/useTransformCard';

import CardImage from '../CardImage';
import LoadingSpinner from '../LoadingSpinner';

type TParams = { id: string };

const CardDetails = (): JSX.Element | null => {
  const { id }: TParams = useParams();
  const { data: card, error, loading } = useFetch(`/cards/${id}`);
  const [cardFace, transformCard] = useTransformCard();

  if (!loading && error) {
    // TODO: figure out error handling for pages
    return null;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  const isMultiFace = !!card?.card_faces?.length;
  const images = isMultiFace
    ? [
        card.card_faces[0].image_uris?.normal,
        card.card_faces[1].image_uris?.normal,
      ]
    : [card?.image_uris?.normal];

  return (
    <div>
      <CardImage
        images={images}
        name={card.name}
        isMultiFace={isMultiFace}
        cardFace={cardFace}
        transformCard={transformCard}
      />
      <div>
        <h2>
          {isMultiFace ? transformTitle(card.card_faces, cardFace) : card.name}
        </h2>
        <span>{card.mana_cost}</span>
      </div>
      <div>
        <p>
          {isMultiFace
            ? transformType(card.card_faces, cardFace)
            : card.type_line}
        </p>
      </div>
      <div>
        <p>{card.oracle_text}</p>
      </div>
    </div>
  );
};

export default CardDetails;
