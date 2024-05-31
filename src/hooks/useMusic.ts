import { useState } from "react";
import useToggle from "./useToggle";
import { Music } from "../@types/music";
import { dislikeMusicAPI, getMusicByIdAPI, likeMusicAPI } from "../apis/music";

const useMusic = () => {
  const [music, setMusic] = useState<Music | null>(null);
  const { toggle: loading, onOpen: onLoading, onClose: onLoaded } = useToggle();

  const likeMusic = async () => {
    if (!music) return;
    onLoading();
    const res = await likeMusicAPI(music.id);
    onLoaded();
    setMusic(res.data.data);
  };
  const dislikeMusic = async () => {
    if (!music) return;
    onLoading();
    const res = await dislikeMusicAPI(music.id);
    onLoaded();
    setMusic(res.data.data);
  };
  const getMusic = async (id: string | number) => {
    onLoading();
    const res = await getMusicByIdAPI(id);
    onLoaded();
    setMusic(res.data.data);
  };

  return {
    getMusic,
    likeMusic,
    dislikeMusic,
    setMusic,
    music,
    loading,
  };
};
export default useMusic;
