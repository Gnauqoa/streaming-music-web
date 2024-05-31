import { CircularProgress, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useSearchPlaylist } from "../../hooks/useSearch";
import { useEffect } from "react";
import PlaylistCard from "../../components/playlist/PlaylistCard";

const SearchPlaylistResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const { data, search, loading } = useSearchPlaylist();

  useEffect(() => {
    search(query, 10);
  }, [query]);
  return (
    <Stack sx={{ flexDirection: "column", gap: 3 }}>
      {loading ? (
        <CircularProgress />
      ) : data.items.length ? (
        <>
          <Typography sx={{ fontSize: 28, fontWeight: 600 }}>
            Playlist result
          </Typography>
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
            {data.items.map((item) => (
              <PlaylistCard playlist={item} key={item.id} />
            ))}
          </Stack>
        </>
      ) : (
        <Typography sx={{ fontSize: 28, fontWeight: 600 }}>
          {/* Playlist result: Look like don't have any playlist match */}
        </Typography>
      )}
    </Stack>
  );
};
export default SearchPlaylistResult;
