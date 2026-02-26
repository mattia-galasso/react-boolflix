import { useSearchFunction } from "../contexts/SearchContext";
import Cards from "./Cards";

export default function Results() {
  const { movieList, seriesList, isLoading, searchedInput } =
    useSearchFunction();

  return (
    <>
      <div className="bg-grey">
        <div className="main-box">
          <div className="ps-4 pb-4">
            <h2 className="text-light">MOVIES</h2>
            <h5 className="text-light">Results for: {searchedInput}</h5>
          </div>
          <Cards elements={movieList} loading={isLoading} type="movie" />

          <div className="px-4 py-4">
            <h2 className="text-light">TV SERIES</h2>
            <h5 className="text-light">Results for: {searchedInput}</h5>
          </div>
          <Cards elements={seriesList} loading={isLoading} type="tv" />
        </div>
      </div>
    </>
  );
}

{
  /*         <div className="loading-box">
          <Loading />
        </div> */
}
