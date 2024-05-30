import { Avatar, Stack, Typography } from "@mui/material";
import { Artist } from "../../@types/artist";

const ArtistCard = ({ artist }: { artist: Artist }) => {
  return (
    <Stack sx={{ p: 1, borderRadius: 3 }}>
      <Avatar src={artist.avatar_url} sx={{ width: 150, height: 150 }} />
      <Typography sx={{ fontSize: 20, fontWeight: 400, color: "#fff" }}>
        {artist.name}
      </Typography>
      <Typography
        sx={{
          fontSize: 16,
          color: "#6a6a6a",
        }}
      >
        Artist
      </Typography>
    </Stack>
  );
};

export default ArtistCard;
