import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

const CardList = ({ cards }: { cards: any[] }): JSX.Element => {
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
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CardList;
