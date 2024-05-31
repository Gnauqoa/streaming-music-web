import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { Music } from "../../@types/music";
import { formatDuration } from "../../utils/music";
import useToggle from "../../hooks/useToggle";
import { PlayArrow } from "@mui/icons-material";
import useAudioControl from "../../hooks/useAudioControl";
import PauseIcon from "@mui/icons-material/Pause";
import { Playlist } from "../../@types/playlist";
import useMusic from "../../hooks/useMusic";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddMusicModal from "../playlist/AddMusicModal";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteMusicToPlaylistAPI } from "../../apis/playlist";

const PlaylistMusicCard = ({
  music,
  playlist,
}: {
  music: Music & { index: number };
  playlist: Playlist;
}) => {
  const location = useLocation();
  const { toggle: hover, onOpen: onHover, onClose: onLeave } = useToggle();
  const {
    toggle: openMenu,
    onOpen: onOpenMenu,
    onClose: onCloseMenu,
  } = useToggle();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const {
    toggle: modal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useToggle();
  const { likeMusic, dislikeMusic, setMusic, music: currentMusic } = useMusic();
  const {
    currentMusic: currentMusicPlaying,
    isPlaying,
    onTogglePlay,
    onStartPlaylist,
  } = useAudioControl();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    onOpenMenu();
  };
  const handleClose = () => {
    setAnchorEl(null);
    onCloseMenu();
  };
  const handleRemovePlaylist = async () => {
    try {
      await deleteMusicToPlaylistAPI({ id: playlist.id, music_id: music.id });
      toast.success("Music removed from playlist successfully");
    } catch (err) {
      toast.error("Failed to remove music from playlist");
    }
  };
  const isCurrent = currentMusicPlaying?.id === music.id;
  useEffect(() => {
    setMusic(music);
  }, [music]);
  if (!currentMusic) return <></>;
  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Stack
        sx={{
          backgroundColor: isCurrent ? "#707070" : hover ? "#535353" : "",
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
        <AddMusicModal music={music} open={modal} onClose={onCloseModal} />
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
            {location.pathname.indexOf("/playlist") !== -1 && (
              <MenuItem onClick={handleRemovePlaylist}>
                <div className="flex flex-row gap-3 py-1">
                  <RemoveCircleOutlineIcon fontSize="small" />
                  Remove from playlist
                </div>
              </MenuItem>
            )}
          </Menu>
        </Stack>
      </Stack>
    </div>
  );
};

export default PlaylistMusicCard;
