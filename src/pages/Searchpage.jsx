import React from "react";
import Search from "../components/Search";
import { useStateValue } from "../StateProvider";
import UseGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";

const Searchpage = () => {
    const [{term}, dispatch] = useStateValue();
    const {data} = UseGoogleSearch(term);
    console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Search hideButtons></Search>
        <h1>{term}</h1>
      </div>
      <div className="searhPage__results">

      </div>
    </div>
  );
};

export default Searchpage;
