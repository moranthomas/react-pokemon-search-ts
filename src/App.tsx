import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonSearch from './components/PokemonSearch';

function App() {
  return (
    <div className="App">
      <h1> Pokemon Search </h1>
      <PokemonSearch name="Thomas"></PokemonSearch>
    </div>
  );
}

export default App;
