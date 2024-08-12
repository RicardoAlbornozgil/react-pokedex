import React from 'react';
import Pokecard from './Pokecard';
import '../assets/Pokedex.css';

/** Index of Pokemon: show individual cards. */
const Pokedex = ({ pokemon, exp, isWinner }) => {
  const winMessage = isWinner ? (
    <p className="Pokedex-winner">THIS HAND WINS!</p>
  ) : null;

  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {pokemon.map(p => (
          <Pokecard
            key={p.id} // Added key for React list rendering
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4>Total experience: {exp}</h4>
      {winMessage}
    </div>
  );
};

export default Pokedex;
