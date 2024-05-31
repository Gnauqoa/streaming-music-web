import { useEffect } from "react";

import PageBanner from "../components/mainframe/PageBanner";
import PauseIcon from "@mui/icons-material/Pause";
import usePlaylist from "../hooks/usePlaylist";
import { useParams } from "react-router-dom";
import { CircularProgress, IconButton } from "@mui/material";
import PlaylistMusicCard from "../components/music/PlaylistMusicCard";
import { PlayArrow } from "@mui/icons-material";
import useAudioControl from "../hooks/useAudioControl";
import useLikedMusicPlaylist from "../hooks/useLikedMusic";
import { useDispatch } from "../redux/store";
import { getLikedMusic } from "../redux/slices/likedMusic";

const bannerInfo = {
  name: "Discover Weekly",
  description:
    "Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.",
  user: [],
  followers: { total: 412018 },
  primary_color: "#262626",
  images: [
    {
      url: "https://i.scdn.co/image/ab67616d00001e02cdb645498cd3d8a2db4d05e1",
    },
  ],
};
export default function PlayListPage() {
  const { playlist: playlistData, loading, getPlaylist } = usePlaylist();
  const params = useParams();
  const { onStartPlaylist, isPlaying, currentPlaylistId, onTogglePlay } =
    useAudioControl();
  const { playlist: likedPlaylist, isLoading } = useLikedMusicPlaylist();
  const dispatch = useDispatch();
  const playlist = Number(params.id) !== -1 ? playlistData : likedPlaylist;
  const isCurrent = currentPlaylistId === playlist?.id;
  useEffect(() => {
    if (!params.id) return;
    if (Number(params.id) !== -1) getPlaylist(params.id);
    else dispatch(getLikedMusic());
  }, [params.id]);
  if (loading || isLoading) return <CircularProgress />;
  if (!playlist) return <></>;
  return (
    <div
      className="listPage"
      style={{ display: `${playlist.musics.length === 0 ? "none" : "block"}` }}
    >
      <PageBanner
        pageTitle="playlist"
        bannerInfo={{
          name: playlist.name,
          description: playlist.description,
          user: playlist.user,
          followers: { total: playlist.liked },
          primary_color: "rgb(83, 83, 83)",
          image_url: playlist.image_url,
        }}
      />
      <div className="relative flex flex-col gap-3 px-8" >
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
      </div>
    </div>
  );
}
