import { useSearchFunction } from "../contexts/SearchContext";

export default function HomePage() {
  const { movieList, seriesList } = useSearchFunction();

  return (
    <>
      <h1>MOVIES</h1>

      {movieList.map((movie) => (
        <ul key={movie.id}>
          <li>{movie.title}</li>
          <li>{movie.original_title}</li>
          <li>{movie.original_language}</li>
          <li>{movie.vote_average}</li>
        </ul>
      ))}

      <h1>TV SERIES</h1>
      {seriesList.map((series) => (
        <ul key={series.id}>
          <li>{series.name}</li>
          <li>{series.original_name}</li>
          <li>{series.original_language}</li>
          <li>{series.vote_average}</li>
        </ul>
      ))}
    </>
  );
}
