import { useEffect, useReducer, useRef } from 'react';

const BASE_URL = 'https://api.scryfall.com/';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

type ACTIONTYPE = { type?: string; payload?: any };

function responseReducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'fetching':
      return { ...initialState, loading: true };
    case 'success':
      return { ...initialState, data: action.payload };
    case 'fail':
      return { ...initialState, error: action.payload };
    default:
      return state;
  }
}

export const useFetch = (url: string) => {
  const cache = useRef({}) as any;
  const [state, dispatch] = useReducer(responseReducer, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: 'fetching' });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: 'success', payload: data });
      } else {
        try {
          const response = await fetch(`${BASE_URL}${url}`);
          const data = await response.json();
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({ type: 'success', payload: data });
        } catch (error: any) {
          if (cancelRequest) return;
          console.error(error.message);
          dispatch({ type: 'fail', payload: error.message });
        }
      }
    };

    fetchData();
    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};
