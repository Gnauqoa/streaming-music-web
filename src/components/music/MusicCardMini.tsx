import { IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { Music } from "../../@types/music";
import { formatDuration } from "../../utils/music";
import useToggle from "../../hooks/useToggle";
import { PlayArrow } from "@mui/icons-material";
import useAudioControl from "../../hooks/useAudioControl";
import PauseIcon from "@mui/icons-material/Pause";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useMusic from "../../hooks/useMusic";
import { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddMusicModal from "../playlist/AddMusicModal";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MusicCardMini = ({ music }: { music: Music }) => {
  const {
    toggle: openMenu,
    onOpen: onOpenMenu,
    onClose: onCloseMenu,
  } = useToggle();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { toggle: hover, onOpen: onHover, onClose: onLeave } = useToggle();
  const {
    toggle: modal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useToggle();
  const {
    onPlaySong,
    currentMusic: currentMusicPlaying,
    isPlaying,
    onTogglePlay,
  } = useAudioControl();
  const isCurrent = currentMusicPlaying?.id === music?.id;
  const { likeMusic, dislikeMusic, setMusic, music: currentMusic } = useMusic();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    onOpenMenu();
  };
  const handleClose = () => {
    setAnchorEl(null);
    onCloseMenu();
  };

  useEffect(() => {
    setMusic(music);
  }, [music]);
  if (!currentMusic) return <></>;
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
              onClick={() =>
                isCurrent ? onTogglePlay() : onPlaySong(currentMusic)
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
          </Stack>

          <img className="object-cover" src={currentMusic.image_url} alt="" />
        </Stack>
        <Stack>
          <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
            {currentMusic.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            {currentMusic.artists.map((artist) => artist.name).join(", ")}
          </Typography>
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
          <Typography sx={{ ml: "auto" }}>
            {formatDuration(currentMusic.duration_ms)}
          </Typography>
          <AddMusicModal music={music} open={modal} onClose={onCloseModal} />
          <IconButton
            aria-label="more"
            id="long-button"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={openMenu}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={onOpenModal}>
              <div className="flex flex-row gap-3 py-1">
                <AddCircleIcon />
                Add
              </div>
            </MenuItem>
          </Menu>
        </Stack>
      </Stack>
    </div>
  );
};
export default MusicCardMini;
