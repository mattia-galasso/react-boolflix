import { useState } from "react";

export default function Navbar() {
  const [searchedInput, setSearchedInput] = useState("");

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex" role="search">
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
            <button className="btn btn-outline-success">Search</button>
          </form>
        </div>
      </nav>
    </>
  );
}
