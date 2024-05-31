import { dislikePlaylistAPI, getPlaylistAPI } from "./../apis/playlist";
import { useNavigate } from "react-router-dom";
import { createPlaylistAPI, likePlaylistAPI } from "../apis/playlist";
import { useState } from "react";
import { Playlist } from "../@types/playlist";
import useToggle from "./useToggle";
import { toast } from "react-toastify";

const usePlaylist = () => {
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const { toggle: loading, onOpen: onLoading, onClose: onLoaded } = useToggle();
  const navigate = useNavigate();
  const createPlaylist = async () => {
    try {
      onLoading();
      const res = await createPlaylistAPI();
      onLoaded();
      setPlaylist(res.data.data);
      toast.success("Playlist created successfully");
      navigate(`/playlist/${res.data.data.id}`);
    } catch (error) {
      onLoaded();
      toast.error("Failed to create playlist");
    }
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
