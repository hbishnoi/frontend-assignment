import React from "react";
import logo from "../images/logo.svg";
import { SearchBox } from "./AppStyle";

const SearchMovies = (props) => {
  const handleChange = (e) => {
    props.searchValue(e.target.value);
  };
  return (
    <>
      <a href="/">
        <img src={logo} alt="Timescale" />
      </a>
      <SearchBox
        autoComplete="off"
        type="text"
        name="searchTerm"
        placeholder="Search for a movie"
        onChange={handleChange}
      />
    </>
  );
};

export default SearchMovies;
