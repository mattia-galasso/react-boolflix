import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const SearchContext = createContext();
const baseURL = new URL("https://api.themoviedb.org/3/");
const APIKey = "e1bf65829171b3ed59447bd3240e2bcf";

function SearchProvider({ children }) {
  //* useSTATE CONSTANT
  const [searchedInput, setSearchedInput] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [seriesList, setSeriesList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [genreSelected, setGenreSelected] = useState();
  const [genreMovieFiltered, setGenreMovieFiltered] = useState([]);
  const [genreSeriesFiltered, setGenreSeriesFiltered] = useState([]);

  //* MOVIE API FUNCTION
  function getMovies(query) {
    /* API MOVIE URL */
    const movieURL = new URL("search/" + "movie", baseURL);
    movieURL.searchParams.set("api_key", APIKey);
    movieURL.searchParams.set("query", query);
    movieURL.searchParams.set("language", "it-IT");

    return axios.get(movieURL.href);
  }

  //* SERIES API FUNCTION
  function getSeries(query) {
    /* API SERIES URL */
    const seriesURL = new URL("search/" + "tv", baseURL);
    seriesURL.searchParams.set("api_key", APIKey);
    seriesURL.searchParams.set("query", query);
    seriesURL.searchParams.set("language", "it-IT");

    return axios.get(seriesURL.href);
  }
  //? HANDLE SEARCH FORM SUBMIT
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setIsSearching(true);
    setIsLoading(true);

    /* PROMISE ALL MULTIPLE API REQUEST */
    Promise.all([getMovies(searchedInput), getSeries(searchedInput)])
      //
      .then(([moviesRespose, seriesResponse]) => {
        setMovieList(moviesRespose.data.results);
        setSeriesList(seriesResponse.data.results);
        setIsLoading(false);
      })
      //
      .catch((err) => {
        console.error("API ERROR", err.message);
      });
  };

  //* MOVIE GENRE API
  function genreMovie() {
    /* API MOVIE URL */
    const movieGenreURL = new URL("genre/movie/list", baseURL);
    movieGenreURL.searchParams.set("api_key", APIKey);
    movieGenreURL.searchParams.set("language", "it-IT");

    return axios.get(movieGenreURL.href);
  }

  //* SERIES GENRE API
  function genreTV() {
    /* API SERIES URL */
    const seriesGenreURL = new URL("genre/tv/list", baseURL);
    seriesGenreURL.searchParams.set("api_key", APIKey);
    seriesGenreURL.searchParams.set("language", "it-IT");

    return axios.get(seriesGenreURL.href);
  }

  //? GENRE API CALL
  function genreAPI() {
    /* PROMISE ALL MULTIPLE API REQUEST */
    Promise.all([genreMovie(), genreTV()])
      //
      .then(([moviesGenreRespose, seriesGenreResponse]) => {
        const movieGenres = moviesGenreRespose.data.genres;
        const seriesGenres = seriesGenreResponse.data.genres;
        const uniqueList = [...movieGenres, ...seriesGenres];
        const filteredList = uniqueList.filter(
          (currentGenre, index, array) =>
            index ===
            array.findIndex((genreArray) => genreArray.id === currentGenre.id),
        );
        setGenreList(filteredList);
      })
      //
      .catch((err) => {
        console.error("API ERROR", err.message);
      });
  }
  useEffect(genreAPI, []);

  //* FILTER GENRE
  useEffect(() => {
    if (!genreSelected) {
      setGenreMovieFiltered(movieList);
      setGenreSeriesFiltered(seriesList);
      return;
    }

    console.log(typeof genreSelected, genreSelected);

    const filteredMovie = movieList.filter((movie) =>
      movie.genre_ids.includes(parseInt(genreSelected)),
    );

    const filteredSeries = seriesList.filter((series) =>
      series.genre_ids.includes(genreSelected),
    );

    setGenreMovieFiltered(filteredMovie);
    setGenreSeriesFiltered(filteredSeries);
  }, [genreSelected, movieList, seriesList]);

  //? CONTEXT VALUE
  const contextValue = {
    searchedInput,
    setSearchedInput,
    handleSearchSubmit,
    movieList: genreMovieFiltered,
    seriesList: genreSeriesFiltered,
    isSearching,
    isLoading,
    genreList,
    genreSelected,
    setGenreSelected,
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
