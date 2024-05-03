import React, { useState } from 'react'
import SearchBar from './SearchBar';
import PokemonList from './PokemonList';

export const Home = () => {
    const [selectedPokemonId, setSelectedPokemonId] = useState('1');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSubmit={handleSearchSubmit} />
            <div>
                <div>
            <PokemonList />
                </div>
            </div>
        </div>
    )
}

export default Home;
