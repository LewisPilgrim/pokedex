import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { setPokemon } from "../pokemon/PokeSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("bulbasaur");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchPoke = async (q) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${q}`);
    const json = await response.json();
    dispatch(setPokemon(json))
  }

  useEffect(() => {
    fetchPoke(query);
  }, [query, fetchPoke]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchQuery);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <label className="visually-hidden">Search</label>
        <input 
          placeholder="Search by name or id" 
          value={searchQuery} 
          type="text" 
          spellCheck="false"
          id="queryBox" 
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
