import { useEffect, useReducer, useRef } from 'react';

/* 
  API base URL
  TODO: Move to env file
*/
const BASE_URL = 'https://api.scryfall.com/';

const initialState = {
  data: [],
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
      return { ...initialState, data: action.payload };
    case 'fail':
      return { ...initialState, error: action.payload };
    default:
      return state;
  }
}

/**
 *
 * @param url The request URL
 *
 * Returns
 * @param {object} data - The response from our request
 * @param {object} error - HTTP error
 * @param {boolean} loading - The loading status of our request
 */
export const useFetch = (url: string) => {
  // create a meomized object of our response
  const cache = useRef({}) as any;
  const [state, dispatch] = useReducer(responseReducer, initialState);

  useEffect(() => {
    // setup DOM api AbortController to avoid React mount/unmount error
    const abortController = new AbortController();
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: 'fetching' });
      // only call api if our cache is empty
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: 'success', payload: data });
      } else {
        try {
          const response = await fetch(`${BASE_URL}${url}`, {
            signal: abortController.signal,
          });
          const data = await response.json();
          // set our cache
          cache.current[url] = data;
          dispatch({ type: 'success', payload: data });
        } catch (error: any) {
          if (!abortController.signal.aborted) {
            console.error(error.message);
            dispatch({ type: 'fail', payload: error.message });
          }
        }
      }
    };

    fetchData();

    // run cleanup if component unmounts
    return function cleanup() {
      abortController.abort();
    };
  }, [url]);

  return state;
};
