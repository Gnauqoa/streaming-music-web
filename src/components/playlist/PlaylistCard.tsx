import { Box, Stack, Typography } from "@mui/material";
import { Playlist } from "../../@types/playlist";
import { Link } from "react-router-dom";

const PlaylistCard = ({ playlist }: { playlist: Playlist }) => {
  return (
    <Link to={`/playlist/${playlist.id}`}>
      <Stack sx={{ maxWidth: 500, p: 2, borderRadius: 2, gap: 2 }}>
        <Box>
          <img
            src={playlist.image_url}
            alt=""
            className="min-w-[300px] h-auto w-[300px] object-cover"
          />
        </Box>
        <Stack>
          <Typography sx={{ fontSize: 16 }}>{playlist.name}</Typography>
          <Typography sx={{ fontSize: 12, color: "#a7a7a7" }}>
            {playlist.description.slice(0, 15)}
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
};

export default PlaylistCard;
