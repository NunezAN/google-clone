import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import { useState } from "react";

const Search = () => {
    const [searchInput, setSearchInput] = useState("");

    function search(event){
        event.preventDefault();
        console.log(`Searching...${searchInput}`);
    }
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__input--icon" />
        <input type="text" className="search__input--field" value={searchInput} onChange={event => setSearchInput(event.target.value)}/>
        <MicIcon className="mic--icon" />
      </div>
      <div className="search__buttons">
        <Button className="btn" type="submit" variant="outlined" onClick={search}>
          Google Search
        </Button>
        <Button className="btn" variant="outlined">
          I'm Feeling Lucky
        </Button>
      </div>
    </form>
  );
};

export default Search;
