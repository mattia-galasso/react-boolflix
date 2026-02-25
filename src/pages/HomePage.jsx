import { useSearchFunction } from "../contexts/SearchContext";

import en from "../assets/img/en.png";
import fr from "../assets/img/fr.png";
import it from "../assets/img/it.png";
import ja from "../assets/img/ja.png";
import undefined from "../assets/img/undefined.png";
import posterNull from "../assets/img/poster_null.png";

export default function HomePage() {
  const { movieList, seriesList } = useSearchFunction();

  const posterImage = (path) => {
    if (path === null) return posterNull;
    else return "https://image.tmdb.org/t/p/w342" + path;
  };

  const languageFlag = (language) => {
    if (language === "en") return en;
    if (language === "fr") return fr;
    if (language === "it") return it;
    if (language === "ja") return ja;
    else return undefined;
  };

  return (
    <>
      <h1>MOVIES</h1>

      {movieList.map((movie) => (
        <ul key={movie.id}>
          <li>
            <img src={posterImage(movie.poster_path)} alt={movie.title} />
          </li>
          <li>{movie.title}</li>
          <li>{movie.original_title}</li>
          <li>
            <img
              src={languageFlag(movie.original_language)}
              alt={movie.original_language}
              className="flagImage"
            />
          </li>
          <li>{movie.vote_average}</li>
        </ul>
      ))}

      <h1>TV SERIES</h1>
      {seriesList.map((series) => (
        <ul key={series.id}>
          <li>
            <img src={posterImage(series.poster_path)} alt={series.name} />
          </li>
          <li>{series.name}</li>
          <li>{series.original_name}</li>
          <li>
            <img
              src={languageFlag(series.original_language)}
              alt={series.original_language}
              className="flagImage"
            />
          </li>
          <li>{series.vote_average}</li>
        </ul>
      ))}
    </>
  );
}
