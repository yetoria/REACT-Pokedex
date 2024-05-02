import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokebuildapi.fr/api/v1/pokemon')
      .then(response => {
        setPokemonList(response.data);
      })
      .catch(error => {
        console.error('Error fetching pokemon:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mt-3 mb-4">Liste des Pokémon</h2>
      <div className="row">
        {pokemonList.map(pokemon => (
          <div key={pokemon.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={pokemon.image_url} className="card-img-top" alt={pokemon.name} />
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <p className="card-text">#{pokemon.id}</p>
                <button className="btn btn-primary">Voir détails</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;