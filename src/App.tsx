import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {
  const test = useFetch('cards/search?q=BrilliantHalo');
  console.log('🚀 ~ file: App.tsx ~ line 8 ~ App ~ test', test);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
