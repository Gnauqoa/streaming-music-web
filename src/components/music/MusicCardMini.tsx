import { IconButton, Stack, Typography } from "@mui/material";
import { Music } from "../../@types/music";
import { formatDuration } from "../../utils/music";
import useToggle from "../../hooks/useToggle";
import { PlayArrow } from "@mui/icons-material";

const MusicCardMini = ({ music }: { music: Music }) => {
  const { toggle: hover, onOpen: onHover, onClose: onLeave } = useToggle();

  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Stack
        sx={{
          p: 1,
          borderRadius: 3,
          gap: 3,
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Stack sx={{ maxWidth: 50, maxHeight: 50, position: "relative" }}>
          <Stack
            sx={{
              position: "absolute",
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0000004d",
              opacity: hover ? 1 : 0,
              transition: "opacity 0.3s",
            }}
          >
            <IconButton>
              <PlayArrow sx={{ color: "#fff" }} />
            </IconButton>
          </Stack>

          <img className="object-cover" src={music.image_url} alt="" />
        </Stack>
        <Stack>
          <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
            {music.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            {music.artists.map((artist) => artist.name).join(", ")}
          </Typography>
        </Stack>
        <Typography sx={{ ml: "auto" }}>
          {formatDuration(music.duration_ms)}
        </Typography>
      </Stack>
    </div>
  );
};
export default MusicCardMini;
