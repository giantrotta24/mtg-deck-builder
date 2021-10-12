import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LoopIcon from '@mui/icons-material/Loop';

import { CardImageTypes } from '../models/CardImage';

const CardImage = ({
  images,
  name,
  isMultiFace,
  cardFace,
  transformCard,
}: CardImageTypes) => {
  return (
    <Box my={3} display="flex" justifyContent="center">
      {isMultiFace ? (
        <ImageListItem
          component="div"
          sx={{
            width: '18rem',
            height: '33rem',
          }}
        >
          <img
            src={cardFace === 'front' ? images[0] : images[1]}
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
                onClick={transformCard}
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
          width="320px"
          height="500px"
        />
      )}
    </Box>
  );
};

export default CardImage;
