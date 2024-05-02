import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonDetails = ({ pokemonId }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonId}`)
      .then(response => {
        setPokemonDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching pokemon details:', error);
      });
  }, [pokemonId]);

  if (!pokemonDetails) {
    return <div>INSY2DEX</div>;
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark justify-content-between">
        <span className="navbar-brand mb-0 h1">INSY2DEX</span>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      <div className="container mt-3">
        <h2>Détails du Pokémon</h2>
        <p>Nom : {pokemonDetails.name}</p>
        <p>Type : {pokemonDetails.type}</p>
        <p>Capacités : {pokemonDetails.abilities ? pokemonDetails.abilities.join(', ') : 'Aucune capacité'}</p>
      </div>
    </div>
  );
};

export default PokemonDetails;