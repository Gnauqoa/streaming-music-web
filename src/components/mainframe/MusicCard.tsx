import { IconButton, Stack, Typography } from "@mui/material";
import { Music } from "../../@types/music";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import useToggle from "../../hooks/useToggle";
const MusicCard = ({ music }: { music: Music }) => {
  const { toggle: hover, onOpen: onHover, onClose: onLeave } = useToggle();
  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Stack
        sx={{
          backgroundColor: "#272727",
          borderRadius: 3,
          p: 3,
          width: 500,
          gap: 1,
          position: "relative",
        }}
      >
        <IconButton
          sx={{
            backgroundColor: "primary.main",
            ":hover": {
              backgroundColor: "primary.dark",
            },
            color: "#fff",
            position: "absolute",
            bottom: hover ? 25 : 0,
            right: 25,
            opacity: hover ? 1 : 0,
            transition: "bottom 0.3s, right 0.3s, opacity 0.3s",
          }}
        >
          <PlayArrowIcon sx={{ width: 32, height: 32 }} />
        </IconButton>

        <Stack sx={{ maxWidth: 150, maxHeight: 150 }}>
          <img style={{ objectFit: "cover" }} src={music.image_url} alt="" />
        </Stack>
        <Typography sx={{ fontSize: 24 }}>{music.name}</Typography>
        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
          <Typography sx={{ color: "#b3b3b3" }}>Song</Typography>
          <span
            style={{
              width: "5px",
              height: "5px",
              backgroundColor: "#b3b3b3",
              borderRadius: "999px",
            }}
          ></span>
          <Typography>{music.artists[0].name}</Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default MusicCard;
