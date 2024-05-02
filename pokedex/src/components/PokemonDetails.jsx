import { useState, useEffect } from "react";
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
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>Détails du Pokémon</h2>
        <p>Nom : {pokemonDetails.name}</p>
        <p>Type : {pokemonDetails.type}</p>
        <p>Capacités : {pokemonDetails.abilities ? pokemonDetails.abilities.join(', ') : 'Aucune capacité'}</p>
      </div>
    );
  };

  export default PokemonDetails;