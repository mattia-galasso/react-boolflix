import { useSearchFunction } from "../contexts/SearchContext";

export default function Navbar() {
  const { searchedInput, setSearchedInput, handleSearchSubmit } =
    useSearchFunction();

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              //
              value={searchedInput}
              onChange={(e) => setSearchedInput(e.target.value)}
              //
            />
            <button className="btn btn-outline-info">Search</button>
          </form>
        </div>
      </nav>
    </>
  );
}
