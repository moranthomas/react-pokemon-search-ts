import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonSearch from './components/PokemonSearch';

function App() {
  return (
    <div className="App">
      <PokemonSearch name="john doe"></PokemonSearch>
    </div>
  );
}

export default App;
