import {
  dislikePlaylistAPI,
  getPlaylistAPI,
  updatePlaylistAPI,
} from "./../apis/playlist";
import { useNavigate } from "react-router-dom";
import { createPlaylistAPI, likePlaylistAPI } from "../apis/playlist";
import { useState } from "react";
import { Playlist } from "../@types/playlist";
import useToggle from "./useToggle";
import { toast } from "react-toastify";

const usePlaylist = () => {
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const {
    toggle: fullLoading,
    onOpen: onFullLoading,
    onClose: onFullLoaded,
  } = useToggle();
  const { toggle: loading, onOpen: onLoading, onClose: onLoaded } = useToggle();
  const disableAPI = loading || fullLoading;
  const navigate = useNavigate();
  const updatePlaylist = async (payload: any) => {
    try {
      if (!playlist) return;
      onLoading();
      const res = await updatePlaylistAPI({ id: playlist?.id, payload });
      onLoaded();
      setPlaylist(res.data.data);
      toast.success("Playlist updated successfully");
    } catch (error) {
      onLoaded();
      toast.error("Failed to update playlist");
    }
  };
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
    if (!playlist || disableAPI) return;
    onLoading();
    const res = await likePlaylistAPI(playlist.id);
    onLoaded();
    setPlaylist(res.data.data);
  };
  const dislikePlaylist = async () => {
    if (!playlist || disableAPI) return;
    onLoading();
    const res = await dislikePlaylistAPI(playlist.id);
    onLoaded();
    setPlaylist(res.data.data);
  };
  const getPlaylist = async (id: string | number) => {
    if (disableAPI) return;
    onFullLoading();
    const res = await getPlaylistAPI(id);
    onFullLoaded();
    setPlaylist(res.data.data);
  };
  return {
    getPlaylist,
    createPlaylist,
    likePlaylist,
    dislikePlaylist,
    updatePlaylist,
    playlist,
    loading,
    fullLoading,
  };
};
export default usePlaylist;
