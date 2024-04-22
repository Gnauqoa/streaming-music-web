import SearchRow from "./components/mainframe/SearchRow";

export default function QueryPage({ query }: { query: string }) {
  return (
    <div className="page-content">
      <div className="pageContent">
        <SearchRow title="Songs" type="track" query={query} />
        <SearchRow title="Artists" type="artist" query={query} />
        <SearchRow title="Albums" type="album" query={query} />
        <SearchRow title="Playlists" type="playlist" query={query} />
      </div>
    </div>
  );
}
