import { IconButton, Stack, Typography } from "@mui/material";
import { Music } from "../../@types/music";
import useToggle from "../../hooks/useToggle";
import { PlayArrow } from "@mui/icons-material";
import useAudioControl from "../../hooks/useAudioControl";
import PauseIcon from "@mui/icons-material/Pause";

const MusicCard = ({ music }: { music: Music }) => {
  const { toggle: hover, onOpen: onHover, onClose: onLeave } = useToggle();
  const { onPlaySong, isPlaying, currentMusic, onTogglePlay } =
    useAudioControl();
  const isCurrent = music?.id === currentMusic?.id;
  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Stack
        sx={{
          backgroundColor: "#272727",
          borderRadius: 3,
          p: 3,
          width: 600,
          gap: 1,
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => (isCurrent ? onTogglePlay() : onPlaySong(music))}
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
          {isCurrent ? (
            isPlaying ? (
              <PauseIcon sx={{ width: 32, height: 32, color: "#fff" }} />
            ) : (
              <PlayArrow sx={{ width: 32, height: 32, color: "#fff" }} />
            )
          ) : (
            <PauseIcon sx={{ width: 32, height: 32, color: "#fff" }} />
          )}
        </IconButton>

        <Stack sx={{ maxWidth: 150, maxHeight: 150 }}>
          <img style={{ objectFit: "cover" }} src={music?.image_url} alt="" />
        </Stack>
        <Typography sx={{ fontSize: 24 }}>{music?.name}</Typography>
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
          <Typography>{music?.artists[0].name}</Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default MusicCard;
