import React, { useState } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import LoopIcon from '@mui/icons-material/Loop';

import { CardImageTypes } from '../Models/CardImage';

const CardImage = ({ images, name, isMultiFace }: CardImageTypes) => {
  const [isFlippedImage, setIsFlippedImage] = useState<boolean>(false);

  const toggleFlipImage = () => {
    setIsFlippedImage(prev => !prev);
  };

  return (
    <>
      {isMultiFace ? (
        <ImageListItem component="div">
          <img
            src={!isFlippedImage ? images[0] : images[1]}
            alt={name}
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
                aria-label={`Loop ${name}`}
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
          src={images[0]}
          alt={name}
          loading="lazy"
          style={{ borderRadius: '4.75% / 3.5%' }}
        />
      )}
    </>
  );
};

export default CardImage;
