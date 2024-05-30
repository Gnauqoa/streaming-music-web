import { useEffect } from "react";

import PageBanner from "../components/mainframe/PageBanner";
import PauseIcon from "@mui/icons-material/Pause";
import usePlaylist from "../hooks/usePlaylist";
import { useParams } from "react-router-dom";
import { CircularProgress, IconButton } from "@mui/material";
import PlaylistMusicCard from "../components/music/PlaylistMusicCard";
import { PlayArrow } from "@mui/icons-material";
import useAudioControl from "../hooks/useAudioControl";

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
  const { playlist, loading, getPlaylist } = usePlaylist();
  const params = useParams();
  const { onStartPlaylist, isPlaying, currentPlaylistId, onTogglePlay } =
    useAudioControl();
  const isCurrent = currentPlaylistId === playlist?.id;
  useEffect(() => {
    if (!params.id) return;
    getPlaylist(params.id);
  }, [params.id]);
  if (loading) return <CircularProgress />;
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
      <div className="playListContent">
        <div
          className="playListOverlay"
          style={{ backgroundColor: `${bannerInfo.primary_color}` }}
        />
        <div className="flex flex-row gap-3 py-2 px-5">
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
        <div className="flex flex-col px-8">
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
