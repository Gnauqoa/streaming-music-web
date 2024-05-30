import { useSearchParams } from "react-router-dom";
import PageTitle from "../components/mainframe/PageTitle";
import useSearch from "../hooks/useSearch";
import { Music } from "../@types/music";
import MusicCard from "../components/music/MusicCard";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import SearchMusicResults from "../sections/search/music";

export default function BrowsePage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const { data, search, loading } = useSearch();
  useEffect(() => {
    search(query);
  }, [query]);

  return (
    <div className="page-content">
      <SearchMusicResults />
    </div>
  );
}
