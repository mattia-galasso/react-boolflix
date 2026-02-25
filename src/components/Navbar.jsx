import { useSearchFunction } from "../contexts/SearchContext";

export default function Navbar() {
  const { searchedInput, setSearchedInput, handleSearchSubmit } =
    useSearchFunction();

  return (
    <>
      <nav className="navbar bg-black">
        <div className="container-fluid">
          <a className="titleNavbar">BOOLFLIX</a>
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
            <button className="btn btn-outline-light">Search</button>
          </form>
        </div>
      </nav>
    </>
  );
}
