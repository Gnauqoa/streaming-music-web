import SearchArtistResult from "../sections/search/artist";
import SearchMusicResults from "../sections/search/music";

export default function BrowsePage() {
  return (
    <div className="page-content">
      <SearchMusicResults />
      <SearchArtistResult />
    </div>
  );
}
