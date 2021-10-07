import React, { useReducer } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import styled from 'styled-components';

import { useInput } from '../hooks/useInput';

import CardList from './CardList';
import LoadingSpinner from './LoadingSpinner';

const BASE_URL = 'https://api.scryfall.com/';

const CardSearchContainer = styled(Box)(
  ({ theme }) => `
    border: solid 1px ${
      theme.palette.mode === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.light
    };
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  `
);

const initialState = {
  cards: [],
  error: null,
  loading: false,
};

type ACTIONTYPE = { type?: string; payload?: any };

// set up our reducer
function responseReducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'fetching':
      return { ...initialState, loading: true };
    case 'success':
      return { ...initialState, cards: action.payload };
    case 'fail':
      return { ...initialState, error: action.payload };
    default:
      return state;
  }
}

const CardSearch = () => {
  const [state, dispatch] = useReducer(responseReducer, initialState);

  const { value, bind, reset } = useInput('');

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch({ type: 'fetching' });
    try {
      // fetch api
      const response = await fetch(`${BASE_URL}cards/search?q=${value}`);
      const data = await response.json();

      // sometimes api will return with error in response but isnt caught
      // we want to trigger our catch when this happens and stop the try
      if (data.object === 'error') {
        throw new Error(data.details);
      }

      dispatch({ type: 'success', payload: data.data });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'fail', payload: error });
    }

    // clear input once search is finished
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardSearchContainer>
          <Input
            placeholder="Card Name"
            id="card-search-input"
            type="text"
            {...bind}
          />
          <Button
            disabled={state.loading}
            color="primary"
            variant="contained"
            type="submit"
            value="Submit"
            sx={{
              mt: 3,
            }}
          >
            {state.loading ? (
              <LoadingSpinner style={{ width: '100%', height: 30 }} />
            ) : (
              'Search'
            )}
          </Button>
        </CardSearchContainer>
      </form>
      <CardList cards={state.cards} />
    </>
  );
};

export default CardSearch;
