import { useSearchParams } from "react-router-dom";
import PageTitle from "../components/mainframe/PageTitle";
import useSearch from "../hooks/useSearch";
import { Music } from "../@types/music";
import MusicCard from "../components/mainframe/MusicCard";
import { useEffect } from "react";

export default function BrowsePage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const { data, search } = useSearch();
  useEffect(() => {
    search(query);
  }, [query]);

  return (
    <div className="page-content">
      <div className="browsePage">
        <PageTitle name={`Result for searching ${query}`} />
        <div className="grid grid-cols-3 gap-4">
          {data.items.map((item: Music) => (
            <MusicCard music={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
