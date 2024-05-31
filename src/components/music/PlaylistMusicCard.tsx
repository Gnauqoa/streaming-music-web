import { IconButton, Stack, Typography } from "@mui/material";
import { Music } from "../../@types/music";
import { formatDuration } from "../../utils/music";
import useToggle from "../../hooks/useToggle";
import { PlayArrow } from "@mui/icons-material";
import useAudioControl from "../../hooks/useAudioControl";
import PauseIcon from "@mui/icons-material/Pause";
import { Playlist } from "../../@types/playlist";
import useMusic from "../../hooks/useMusic";
import { useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PlaylistMusicCard = ({
  music,
  playlist,
}: {
  music: Music & { index: number };
  playlist: Playlist;
}) => {
  const { toggle: hover, onOpen: onHover, onClose: onLeave } = useToggle();
  const { likeMusic, dislikeMusic, setMusic, music: currentMusic } = useMusic();
  const {
    currentMusic: currentMusicPlaying,
    isPlaying,
    onTogglePlay,
    onStartPlaylist,
  } = useAudioControl();
  const isCurrent = currentMusicPlaying?.id === music.id;
  useEffect(() => {
    setMusic(music);
  }, [music]);
  if (!currentMusic) return <></>;
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
            onClick={() =>
              isCurrent
                ? onTogglePlay()
                : onStartPlaylist(playlist, music.index - 1)
            }
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
          <img className="object-cover" src={currentMusic.image_url} alt="" />
        </Stack>
        <Stack sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: 20, fontWeight: 400 }}>
            {currentMusic.name}
          </Typography>
          {currentMusic?.artists?.length >= 1 && (
            <Typography
              sx={{ fontSize: 14, color: "#bababa", fontWeight: 400 }}
            >
              {currentMusic.artists[0].name}
            </Typography>
          )}
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            ml: "auto",
            alignItems: "center",
            gap: 2,
          }}
        >
          {(hover || currentMusic.liked) && (
            <IconButton
              onClick={() =>
                currentMusic.liked ? dislikeMusic() : likeMusic()
              }
            >
              {currentMusic.liked ? (
                <FavoriteIcon sx={{ color: "primary.main" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          )}
          <Typography>{formatDuration(currentMusic.duration_ms)}</Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default PlaylistMusicCard;
