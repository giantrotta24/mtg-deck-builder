import React, { useState } from 'react';
import { useParams } from 'react-router';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import LoopIcon from '@mui/icons-material/Loop';

import { useFetch } from '../../hooks/useFetch';
import LoadingSpinner from '../LoadingSpinner';

type TParams = { id: string };

const CardDetails = (): JSX.Element | null => {
  const { id }: TParams = useParams();
  const { data, error, loading } = useFetch(`/cards/${id}`);
  const [isFlippedImage, setIsFlippedImage] = useState<boolean>(false);

  const toggleFlipImage = () => {
    setIsFlippedImage(prev => !prev);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!loading && error) {
    // TODO: figure out error handling for pages
    return null;
  }

  const isMultiFace = !!data?.card_faces?.length;

  return (
    <>
      {isMultiFace ? (
        <ImageListItem component="div">
          <img
            src={
              !isFlippedImage
                ? data.card_faces[0].image_uris.normal
                : data.card_faces[1].image_uris.normal
            }
            alt={data.name}
            loading="lazy"
            style={{ borderRadius: '4.75% / 3.5%' }}
          />
          <ImageListItemBar
            sx={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            position="top"
            actionIcon={
              <IconButton
                sx={{ color: 'white' }}
                aria-label={`star ${data.name}`}
                onClick={toggleFlipImage}
              >
                <LoopIcon />
              </IconButton>
            }
            actionPosition="left"
          />
        </ImageListItem>
      ) : (
        <img
          src={data?.image_uris?.normal}
          alt={data.name}
          loading="lazy"
          style={{ borderRadius: '4.75% / 3.5%' }}
        />
      )}
    </>
  );
};

export default CardDetails;
