import axios from "axios";
import { createContext, useState, useContext } from "react";

const SearchContext = createContext();
const baseURL = new URL("https://api.themoviedb.org/3/search/");
const APIKey = "e1bf65829171b3ed59447bd3240e2bcf";

function SearchProvider({ children }) {
  //* useSTATE CONSTANT
  const [searchedInput, setSearchedInput] = useState("Harry");
  const [movieList, setMovieList] = useState([]);
  const [seriesList, setSeriesList] = useState([]);

  //* MOVIE API FUNCTION
  function getMovies(query) {
    /* API MOVIE URL */
    const movieURL = new URL("movie", baseURL);
    movieURL.searchParams.set("api_key", APIKey);
    movieURL.searchParams.set("query", query);
    movieURL.searchParams.set("language", "it-IT");

    return axios.get(movieURL.href);
  }

  //* SERIES API FUNCTION
  function getSeries(query) {
    /* API SERIES URL */
    const seriesURL = new URL("tv", baseURL);
    seriesURL.searchParams.set("api_key", APIKey);
    seriesURL.searchParams.set("query", query);
    seriesURL.searchParams.set("language", "it-IT");

    return axios.get(seriesURL.href);
  }
  //? HANDLE SEARCH FORM SUBMIT
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    /* PROMISE ALL MULTIPLE API REQUEST */
    Promise.all([getMovies(searchedInput), getSeries(searchedInput)])
      //
      .then(([moviesRespose, seriesResponse]) => {
        setMovieList(moviesRespose.data.results);
        setSeriesList(seriesResponse.data.results);
      })
      //
      .catch((err) => {
        console.error("API ERROR", err.message);
      });

    console.log(movieList);
    console.log(seriesList);
  };

  //? CONTEXT VALUE
  const contextValue = {
    searchedInput,
    setSearchedInput,
    handleSearchSubmit,
    movieList,
    seriesList,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearchFunction() {
  return useContext(SearchContext);
}

export { SearchProvider, useSearchFunction };
