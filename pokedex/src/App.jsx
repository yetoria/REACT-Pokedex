import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<PokemonList />} />
    <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;