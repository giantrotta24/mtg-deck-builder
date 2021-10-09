import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const CardList = ({ cards }: { cards: any[] }): JSX.Element => {
  console.log('🚀 ~ file: CardList.tsx ~ line 11 ~ cards', cards);
  return (
    <Box>
      <List>
        {cards.map(card => (
          <ListItem
            component={Paper}
            elevation={3}
            sx={{ marginTop: '.5rem' }}
            key={card.id}
          >
            <ListItemText id={card.id} primary={card.name} />
            <Button component={Link} to={`/cards/${card.id}`} size="small">
              Details
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CardList;
