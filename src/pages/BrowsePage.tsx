import SearchArtistResult from "../sections/search/artist";
import SearchMusicResults from "../sections/search/music";
import SearchPlaylistResult from "../sections/search/playlist";

export default function BrowsePage() {
  return (
    <div className="page-content">
      <SearchMusicResults />
      <SearchArtistResult />
      <SearchPlaylistResult />
    </div>
  );
}
