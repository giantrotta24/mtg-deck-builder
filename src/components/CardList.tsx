import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const CardList = ({ cards }: { cards: any[] }): JSX.Element => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {cards.map(card => (
          <ListItem key={card.id}>
            <ListItemText id={card.id} primary={card.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CardList;
