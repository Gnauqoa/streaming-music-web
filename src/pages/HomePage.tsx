import { useEffect } from "react";
import { useSearchPlaylist } from "../hooks/useSearch";
import PlaylistCard from "../components/playlist/PlaylistCard";
import { CircularProgress, Typography } from "@mui/material";
import useLikedMusic from "../hooks/useLikedMusic";

export default function HomePage() {
  const { search, data, loading } = useSearchPlaylist();
  const { playlist } = useLikedMusic();
  useEffect(() => {
    search("");
  }, []);
  return (
    <div className="page-content">
      <Typography sx={{ fontSize: 28, color: "#fff" }}>Make for you</Typography>
      <PlaylistCard playlist={playlist} />
      <Typography sx={{ fontSize: 28, color: "#fff" }}>
        Hot playlists
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="flex flex-row w-full gap-3 overflow-auto hide-scrollbars">
          {data.items.map((playlist) => (
            <PlaylistCard playlist={playlist} key={playlist.id} />
          ))}
        </div>
      )}
    </div>
  );
}
