import React from 'react';
import pokelogo from '../assets/images/pokemon.svg.png'

const SearchBar = ({ searchQuery, setSearchQuery, onSubmit }) => {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between fixed-top">
      <a className="navbar-brand" href="#">
        <img width={100} src={pokelogo} className="d-inline-block align-top" alt="Insy2Dex" />
      </a>
      <form className="form-inline" onSubmit={onSubmit}>
        <div className="input-group">
          <input
            className="searchf form-control"
            type="search"
            placeholder="Search.."
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
      </form>
    </nav>
  );
};

export default SearchBar;