import React from 'react';
import { useParams } from 'react-router';

import { createCard } from '../../helpers/card';
import { useFetch } from '../../hooks/useFetch';
import useTransformCard from '../../hooks/useTransformCard';

import CardImage from '../CardImage';
import LoadingSpinner from '../LoadingSpinner';

// type for router params
type TParams = { id: string };

const CardDetails = (): JSX.Element | null => {
  // grab id from router
  const { id }: TParams = useParams();
  // fetch individual card
  const { data, error, loading } = useFetch(`/cards/${id}`);
  // useState toggle for transforming double sided cards
  const [cardFace, transformCard] = useTransformCard();

  if (!loading && error) {
    // TODO: figure out error handling for pages
    return null;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  // TODO: Work through typescript errors so we dont depend so much on typeof any with this function
  // Shape our data into dynamic "card" object
  const { isMultiFace, card } = createCard(data, cardFace);

  return (
    <div>
      <CardImage
        images={card?.images}
        name={card?.name}
        isMultiFace={isMultiFace}
        cardFace={cardFace}
        transformCard={transformCard}
      />
      <div>
        <h2>{card?.name}</h2>
        {/* <span>{card.mana_cost}</span> */}
      </div>
      <div>
        <p>{card?.type_line}</p>
      </div>
      <div>{/* <p>{card.oracle_text}</p> */}</div>
    </div>
  );
};

export default CardDetails;
