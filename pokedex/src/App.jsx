import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import SearchBar from './components/SearchBar';
import Home from './components/Home';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pokemon/:id" element={<PokemonDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;