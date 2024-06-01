import { useState } from "react";
import useToggle from "./useToggle";

import { Artist } from "../@types/artist";
import { getArtistByIdAPI, getArtistMusicsAPI } from "../apis/artist";
import { Music } from "../@types/music";
import { Playlist } from "../@types/playlist";

const useArtist = () => {
  const [artist, setArtist] = useState<Artist | null>(null);
  const [artistPlaylists, setArtistPlaylists] = useState<Music[]>([]);
  const {
    toggle: fullLoading,
    onOpen: onFullLoading,
    onClose: onFullLoaded,
  } = useToggle();
  const getArtist = async (id: string | number) => {
    onFullLoading();
    const res = await getArtistByIdAPI(id);
    const res2 = await getArtistMusicsAPI(id);
    onFullLoaded();
    setArtist(res.data.data);
    setArtistPlaylists(res2.data.data.items);
  };
  return {
    loading: fullLoading,
    artist,
    artistPlaylists: {
      id: 999,
      musics: artistPlaylists,
      name: artist?.name,
      description: `artist ${artist?.name} playlists`,
      image_url: artist?.avatar_url,
      liked: false,
    } as Playlist,
    getArtist,
  };
};
export default useArtist;
