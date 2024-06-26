import { CircularProgress, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useSearchMusic } from "../../hooks/useSearch";
import { useEffect } from "react";
import MusicCardMini from "../../components/music/MusicCardMini";
import MusicCard from "../../components/music/MusicCard";

const SearchMusicResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const { data, search, loading } = useSearchMusic();

  useEffect(() => {
    search(query, 5);
  }, [query]);

  return (
    <Stack sx={{ display: "flex", flexDirection: "row", gap: 3, pt: 3 }}>
      {loading ? (
        <CircularProgress />
      ) : data.items.length ? (
        <>
          <Stack flexDirection={"column"} gap={3}>
            <Typography sx={{ fontSize: 28, fontWeight: 600 }}>
              Top Result
            </Typography>
            <MusicCard music={data.items[0]} />
          </Stack>
          <Stack flexDirection={"column"} gap={3} width={"100%"}>
            <Typography sx={{ fontSize: 28, fontWeight: 600 }}>
              Songs
            </Typography>
            <Stack>
              {data.items.map((item) => (
                <MusicCardMini music={item} key={item.id} />
              ))}
            </Stack>
          </Stack>
        </>
      ) : (
        <Typography sx={{ fontSize: 28, fontWeight: 600 }}>
          Song result: Look like don't have any song match
        </Typography>
      )}
    </Stack>
  );
};

export default SearchMusicResults;
