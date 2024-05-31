import { Box, Stack, Typography } from "@mui/material";
import { Playlist } from "../../@types/playlist";
import { Link, useParams } from "react-router-dom";
import useToggle from "../../hooks/useToggle";

const PlaylistMiniCard = ({ playlist }: { playlist: Playlist }) => {
  const params = useParams();
  const isCurrent = Number(params["*"]?.split("/")[1]) === playlist.id;
  const { toggle: hover, onOpen: onHover, onClose: onLeave } = useToggle();

  return (
    <Link to={`/playlist/${playlist.id}`}>
      <div onMouseEnter={onHover} onMouseLeave={onLeave}>
        <Stack
          sx={{
            backgroundColor: isCurrent ? "#707070" : hover ? "#535353" : "",
            py: 1,
            px: 1,
            borderRadius: 1,
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Box sx={{ maxWidth: 48, maxHeight: 48 }}>
            <img
              src={playlist.image_url}
              alt=""
              className="object-cover rounded-[4px]"
            />
          </Box>
          <Stack>
            <Typography sx={{ fontSize: 18, fontWeight: 600, color: "#fff" }}>
              {playlist.name.slice(0, 23)}
              {playlist.name.length > 23 && "..."}
            </Typography>

            {playlist.user?.first_name && playlist.user?.last_name && (
              <div className="flex flex-row items-center gap-1">
                <Typography>Playlist </Typography>
                <span className="w-[5px] h-[5px] bg-[#bababa] rounded-[99px]"></span>
                <Typography>
                  {playlist.user?.first_name + playlist.user?.last_name}
                </Typography>
              </div>
            )}
          </Stack>
        </Stack>
      </div>
    </Link>
  );
};

export default PlaylistMiniCard;
