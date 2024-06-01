import { useEffect, useState } from "react";

import PageBanner from "../components/mainframe/PageBanner";
import PlayListFunctions from "../components/mainframe/PlayListFunctions";
import AboutMenu from "../components/mainframe/AboutMenu";
import useArtist from "../hooks/useArtist";
import { useParams } from "react-router-dom";
import { CircularProgress, IconButton } from "@mui/material";
import useAudioControl from "../hooks/useAudioControl";
import { PlayArrow } from "@mui/icons-material";
import PauseIcon from "@mui/icons-material/Pause";
import PlaylistMusicCard from "../components/music/PlaylistMusicCard";

export default function ArtistPage() {
  const params = useParams();
  const { artist, loading, artistPlaylists, getArtist } = useArtist();
  useEffect(() => {
    if (params?.id) getArtist(params.id);
  }, [params]);

  const { onStartPlaylist, isPlaying, currentPlaylistId, onTogglePlay } =
    useAudioControl();
  const isCurrent = currentPlaylistId === artistPlaylists?.id;

  if (loading) return <CircularProgress />;
  if (!artist) return <></>;
  return (
    <div className="listPage">
      <PageBanner pageTitle="artist" bannerInfo={artist} />
      <div className="playListContent">
        <div className="flex flex-row gap-3 py-2 px-8">
          <IconButton
            onClick={() =>
              isCurrent ? onTogglePlay() : onStartPlaylist(artistPlaylists, 0)
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
        <div className="flex flex-col px-4">
          {artistPlaylists.musics.map((music, index) => (
            <PlaylistMusicCard
              playlist={artistPlaylists}
              music={{ ...music, index: index + 1 }}
              key={music.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
