import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import SearchBar from './components/SearchBar'; 
function App() {
  const [selectedPokemonId, setSelectedPokemonId] = useState(1); 
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSubmit={handleSearchSubmit} />
      <div className="row">
        <div className="col-md-6">
          <PokemonList />
        </div>
        <div className="col-md-6">
          <PokemonDetails pokemonId={selectedPokemonId} />
        </div>
      </div>
    </div>
  );
}

export default App;