import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex'

class App extends React.Component {
  render() {

    return(
      <div className='container'>
        <h1>Pokedex</h1>
        <Pokedex pokemons={ pokemons } />
      </div>
    )
  }
}

export default App;
