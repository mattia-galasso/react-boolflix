import { useSearchFunction } from "../contexts/SearchContext";
import Card from "./Card";

export default function Cards() {
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
          <Card elements={movieList} loading={isLoading} />

          <div className="px-4 py-4">
            <h2 className="text-light">TV SERIES</h2>
            <h5 className="text-light">Results for: {searchedInput}</h5>
          </div>
          <Card elements={seriesList} loading={isLoading} />
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
