import React from "react";
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const pokemons = this.props.pokemons;
    const pokemonsHtmlElements = pokemons.map((pokemon) => {
      return <Pokemon key={pokemon.id} name={pokemon.name} type={pokemon.type} averageWeight={pokemon.averageWeight} image={pokemon.image} />
    })

    return (
      <div className="pokedex">
        { pokemonsHtmlElements }
      </div>
    );
  }
}

export default Pokedex;