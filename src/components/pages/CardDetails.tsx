import React from 'react';
import { useParams } from 'react-router';

import { useFetch } from '../../hooks/useFetch';

import CardImage from '../CardImage';
import LoadingSpinner from '../LoadingSpinner';

type TParams = { id: string };

const CardDetails = (): JSX.Element | null => {
  const { id }: TParams = useParams();
  const { data, error, loading } = useFetch(`/cards/${id}`);

  if (!loading && error) {
    // TODO: figure out error handling for pages
    return null;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  const isMultiFace = !!data?.card_faces?.length;
  const images = isMultiFace
    ? [
        data.card_faces[0].image_uris?.normal,
        data.card_faces[1].image_uris?.normal,
      ]
    : [data?.image_uris?.normal];

  return (
    <>
      <CardImage images={images} name={data.name} isMultiFace={isMultiFace} />
    </>
  );
};

export default CardDetails;
