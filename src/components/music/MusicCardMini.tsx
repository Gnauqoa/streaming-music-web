import { IconButton, Stack, Typography } from "@mui/material";
import { Music } from "../../@types/music";
import { formatDuration } from "../../utils/music";
import useToggle from "../../hooks/useToggle";
import { PlayArrow } from "@mui/icons-material";
import useAudioControl from "../../hooks/useAudioControl";
import PauseIcon from "@mui/icons-material/Pause";

const MusicCardMini = ({ music }: { music: Music }) => {
  const { toggle: hover, onOpen: onHover, onClose: onLeave } = useToggle();
  const { onPlaySong, currentMusic, isPlaying, onTogglePlay } =
    useAudioControl();
  const isCurrent = currentMusic?.id === music?.id;
  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Stack
        sx={{
          backgroundColor: isCurrent ? "#535353" : "",
          p: 1,
          pr: 3,
          borderRadius: 1,
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
            <IconButton
              onClick={() => (isCurrent ? onTogglePlay() : onPlaySong(music))}
            >
              {isCurrent ? (
                isPlaying ? (
                  <PauseIcon sx={{ color: "#fff" }} />
                ) : (
                  <PlayArrow sx={{ color: "#fff" }} />
                )
              ) : (
                <PlayArrow sx={{ color: "#fff" }} />
              )}
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
