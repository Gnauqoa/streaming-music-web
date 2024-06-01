import { useEffect } from "react";
import {
  Category,
  useSearchArtist,
  useSearchMusic,
  useSearchPlaylist,
} from "../hooks/useSearch";
import PlaylistCard from "../components/playlist/PlaylistCard";
import { CircularProgress, Stack, Typography } from "@mui/material";
import useLikedMusic from "../hooks/useLikedMusic";
import ArtistCard from "../components/artist/ArtistCard";

export default function HomePage() {
  const { search, data, loading } = useSearchPlaylist();
  const {
    search: searchMusic,
    data: musics,
    loading: musicLoading,
  } = useSearchMusic();
  const {
    data: artistData,
    search: searchArtist,
    loading: artistLoading,
  } = useSearchArtist();

  const { playlist } = useLikedMusic();
  useEffect(() => {
    searchArtist("", 20, Category.HOT);
    search("", 20, Category.HOT);
  }, []);
  return (
    <div className="page-content">
      <Typography sx={{ fontSize: 28, color: "#fff", fontWeight: 600 }}>
        Make for you
      </Typography>
      <PlaylistCard playlist={playlist} />
      <Typography sx={{ fontSize: 28, color: "#fff", fontWeight: 600 }}>
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
      <Typography sx={{ fontSize: 28, color: "#fff", fontWeight: 600 }}>
        Hot Artist
      </Typography>
      {artistLoading ? (
        <CircularProgress />
      ) : (
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            width: "100%",
            overflow: "auto",
          }}
          className="hide-scrollbars"
        >
          {artistData.items.map((item) => (
            <ArtistCard artist={item} key={item.id} />
          ))}
        </Stack>
      )}
    </div>
  );
}
