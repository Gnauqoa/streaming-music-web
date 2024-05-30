import { dislikePlaylistAPI, getPlaylistAPI } from "./../apis/playlist";
import { useNavigate } from "react-router-dom";
import { createPlaylistAPI, likePlaylistAPI } from "../apis/playlist";
import { useState } from "react";
import { Playlist } from "../@types/playlist";
import useToggle from "./useToggle";

const usePlaylist = () => {
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const { toggle: loading, onOpen: onLoading, onClose: onLoaded } = useToggle();
  const navigate = useNavigate();
  const createPlaylist = async () => {
    onLoading();
    const res = await createPlaylistAPI();
    onLoaded();
    setPlaylist(res.data.data);
    navigate(`/playlist/${res.data.data.id}`);
  };
  const likePlaylist = async () => {
    if (!playlist) return;
    onLoading();
    const res = await likePlaylistAPI(playlist.id);
    onLoaded();
    setPlaylist(res.data.data);
  };
  const dislikePlaylist = async () => {
    if (!playlist) return;
    onLoading();
    const res = await dislikePlaylistAPI(playlist.id);
    onLoaded();
    setPlaylist(res.data.data);
  };
  const getPlaylist = async (id: string | number) => {
    onLoading();
    const res = await getPlaylistAPI(id);
    onLoaded();
    setPlaylist(res.data.data);
  };
  return {
    getPlaylist,
    createPlaylist,
    likePlaylist,
    dislikePlaylist,
    playlist,
    loading,
  };
};
export default usePlaylist;
