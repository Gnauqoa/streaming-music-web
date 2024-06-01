import { CircularProgress, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useSearchArtist } from "../../hooks/useSearch";
import { useEffect } from "react";
import ArtistCard from "../../components/artist/ArtistCard";

const SearchArtistResult = () => {
const [searchParams] = useSearchParams();
const query = searchParams.get("query") || "";
const { data, search, loading } = useSearchArtist();

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
          Artist result
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
            <ArtistCard artist={item} key={item.id} />
          ))}
        </Stack>
      </>
    ) : (
      <Typography sx={{ fontSize: 28, fontWeight: 600 }}>
        {/* Artist result: Look like don't have any artist match */}
      </Typography>
    )}
  </Stack>
);
};
export default SearchArtistResult;
