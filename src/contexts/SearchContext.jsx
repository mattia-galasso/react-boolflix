import { createContext, useState, useContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  //* CHANGE SEARCH INPUT
  const [searchedInput, setSearchedInput] = useState("Harry");

  //* HANDLE SEARCH FORM SUBMIT
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  //? CONTEXT VALUE
  const contextValue = {
    searchedInput,
    setSearchedInput,
    handleSearchSubmit,
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
