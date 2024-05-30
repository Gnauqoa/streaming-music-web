import { IconButton, Stack, Typography } from "@mui/material";
import { Music } from "../../@types/music";
import { formatDuration } from "../../utils/music";
import useToggle from "../../hooks/useToggle";
import { PlayArrow } from "@mui/icons-material";
import useAudioControl from "../../hooks/useAudioControl";
import PauseIcon from "@mui/icons-material/Pause";

const PlaylistMusicCard = ({ music }: { music: Music & { index: number } }) => {
  const { toggle: hover, onOpen: onHover, onClose: onLeave } = useToggle();
  const { onPlaySong, currentMusic, isPlaying, onTogglePlay } =
    useAudioControl();
  const isCurrent = currentMusic?.id === music.id;
  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Stack
        sx={{
          backgroundColor: isCurrent ? "#535353" : hover ? "#707070" : "",
          p: 1,
          pr: 3,
          borderRadius: 1,
          gap: 3,
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
          transition: "background-color 0.3s",
        }}
      >
        {hover ? (
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
        ) : (
          <Typography sx={{ width: 40, textAlign: "center" }}>
            {music.index}
          </Typography>
        )}
        <Stack sx={{ maxWidth: 50, maxHeight: 50, position: "relative" }}>
          {/* <Stack
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
          
          </Stack> */}

          <img className="object-cover" src={music.image_url} alt="" />
        </Stack>
        <Stack>
          <Typography sx={{ fontSize: 20, fontWeight: 400 }}>
            {music.name}
          </Typography>
        </Stack>
        <Typography sx={{ ml: "auto" }}>
          {formatDuration(music.duration_ms)}
        </Typography>
      </Stack>
    </div>
  );
};

export default PlaylistMusicCard;
