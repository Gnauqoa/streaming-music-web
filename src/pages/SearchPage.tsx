import BrowsePage from "./BrowsePage";
import QueryPage from "./QueryPage";

export default function SearchPage({ query }: { query: string }) {
  if (query === "") {
    return <BrowsePage />;
  } else {
    return <QueryPage query={query} />;
  }
}
