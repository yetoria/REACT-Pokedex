import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('https://pokebuildapi.fr/api/v1/pokemon')
      .then(response => {
        setPokemonList(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching pokemon:', error);
        setLoading(false);
      });
  }, []);

  const sortedPokemonList = pokemonList.sort((a, b) => a.id - b.id);

  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) {
        return [...acc, arr.slice(i, i + size)];
      }
      return acc;
    }, []);
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favoriteId => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const navigateToPokemon = (id) => {
    navigate(`/pokemon/${id}`);
  }

  return (
  
    <div className="container">
      <h2 className="text-center mt-3 mb-4">Liste des Pokémons</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {sortedPokemonList.map(pokemon => (
            <div key={pokemon.id} className="col-md-3 mb-4">
              <div className="card">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} className="card-img-top" alt={pokemon.name} />
                <div className="card-body">
                  <h5 className="card-title">{pokemon.name}</h5>
                  <p className="card-text">#{pokemon.id}</p>
                  <button onClick={() => navigateToPokemon(pokemon.id)} className="details btn btn-primary">Voir détails</button>
                  <span onClick={() => toggleFavorite(pokemon.id)} style={{ cursor: 'pointer', position: 'absolute', top: '5px', right: '5px' }}>
                    {favorites.includes(pokemon.id) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
