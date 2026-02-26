import Results from "../components/Results";
import Welcome from "../components/Welcome";
import { useSearchFunction } from "../contexts/SearchContext";

export default function HomePage() {
  const { isSearching } = useSearchFunction();

  return isSearching ? <Results /> : <Welcome />;
}
