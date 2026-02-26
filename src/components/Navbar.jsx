import { Link } from "react-router-dom";
import { useSearchFunction } from "../contexts/SearchContext";

export default function Navbar() {
  const {
    searchedInput,
    setSearchedInput,
    handleSearchSubmit,
    genreList,
    genreSelected,
    setGenreSelected,
  } = useSearchFunction();

  return (
    <>
      <nav className="navbar bg-black">
        <div className="container-fluid">
          <Link to="#" className="titleNavbar">
            BOOLFLIX
          </Link>
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <select
              className="form-select me-2"
              aria-label="Select Genre"
              //
              value={genreSelected}
              onChange={(e) =>
                setGenreSelected(e.target.value ? parseInt(e.target.value) : "")
              }
            >
              <option value={""}>Select Genre</option>
              {genreList.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              //
              value={searchedInput}
              onChange={(e) => setSearchedInput(e.target.value)}
              required
              //
            />
            <button className="btn btn-outline-light">Search</button>
          </form>
        </div>
      </nav>
    </>
  );
}
