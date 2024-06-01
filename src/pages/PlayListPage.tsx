import { useEffect } from "react";

import PageBanner from "../components/mainframe/PageBanner";
import PauseIcon from "@mui/icons-material/Pause";
import usePlaylist from "../hooks/usePlaylist";
import { useParams } from "react-router-dom";
import { CircularProgress, IconButton, Typography } from "@mui/material";
import PlaylistMusicCard from "../components/music/PlaylistMusicCard";
import { PlayArrow } from "@mui/icons-material";
import useAudioControl from "../hooks/useAudioControl";
import useLikedMusicPlaylist from "../hooks/useLikedMusic";
import { useDispatch } from "../redux/store";
import { getLikedMusic } from "../redux/slices/likedMusic";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useAuth from "../hooks/useAuth";

export default function PlayListPage() {
  const { user } = useAuth();
  const params = useParams();
  const {
    playlist: playlistData,
    fullLoading,
    getPlaylist,
    likePlaylist,
    dislikePlaylist,
    updatePlaylist,
  } = usePlaylist();
  const { onStartPlaylist, isPlaying, currentPlaylistId, onTogglePlay } =
    useAudioControl();
  const { playlist: likedPlaylist, isLoading } = useLikedMusicPlaylist();
  const playlist = Number(params.id) !== -1 ? playlistData : likedPlaylist;

  const dispatch = useDispatch();
  const isCurrent = currentPlaylistId === playlist?.id;
  useEffect(() => {
    if (!params.id) return;
    if (Number(params.id) !== -1) {
      getPlaylist(params.id);
    } else {
      dispatch(getLikedMusic());
    }
  }, [params.id]);
  if (fullLoading || isLoading) return <CircularProgress />;
  if (!playlist) return <></>;
  return (
    <div className="flex flex-col w-full h-full">
      <PageBanner
        pageTitle="playlist"
        updatePlaylist={updatePlaylist}
        bannerInfo={{
          name: playlist.name,
          description: playlist.description,
          user: playlist.user,
          followers: { total: playlist.liked },
          primary_color: "rgb(83, 83, 83)",
          image_url: playlist.image_url,
        }}
      />
      <div className="relative flex flex-col gap-3 px-8 pt-3">
        {!playlist.musics.length ? (
          <Typography sx={{ fontSize: 18, color: "#fff" }}>
            Look like this playlist don't have any music
          </Typography>
        ) : (
          <>
            <div className="flex flex-row gap-3 py-2">
              <IconButton
                onClick={() =>
                  isCurrent ? onTogglePlay() : onStartPlaylist(playlist, 0)
                }
                sx={{
                  backgroundColor: "primary.main",
                  ":hover": {
                    backgroundColor: "primary.main",
                  },
                }}
              >
                {isCurrent ? (
                  isPlaying ? (
                    <PauseIcon sx={{ color: "#000" }} />
                  ) : (
                    <PlayArrow sx={{ color: "#000" }} />
                  )
                ) : (
                  <PlayArrow sx={{ color: "#000" }} />
                )}
              </IconButton>
              {playlist.id !== -1 && playlist?.user?.id !== user?.id && (
                <IconButton
                  onClick={() =>
                    playlist.liked ? dislikePlaylist() : likePlaylist()
                  }
                >
                  {playlist.liked ? (
                    <FavoriteIcon sx={{ color: "primary.main" }} />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
              )}
            </div>
            <div className="flex flex-col">
              {playlist.musics.map((music, index) => (
                <PlaylistMusicCard
                  playlist={playlist}
                  music={{ ...music, index: index + 1 }}
                  key={music.id}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
