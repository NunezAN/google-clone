import React from 'react';
import "./SearchResult.css"

const SearchResult = ({item}) => {
    return (
        <div className="searchPage__result">
              <a className="searchPage__result--link" href={item.link} target="_blank">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__result--img"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link} className="searchPage__Result-title" target="_blank">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
    );
}

export default SearchResult;
