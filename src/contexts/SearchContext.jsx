import { createContext, useState, useContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  //* HANDLE SEARCH FORM SUBMIT
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchedInput);
  };

  //* CHANGE SEARCH INPUT
  const [searchedInput, setSearchedInput] = useState("Harry");

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
