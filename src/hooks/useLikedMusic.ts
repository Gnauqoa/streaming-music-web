import { Playlist } from "../@types/playlist";
import { useSelector } from "../redux/store";
import useAuth from "./useAuth";

const useLikedMusicPlaylist = () => {
  const { user } = useAuth();
  const { data, isLoading } = useSelector((state) => state.likeMusic);
  return {
    isLoading,
    playlist: {
      id: -1,
      name: "liked music",
      user,
      description: "Your liked music",
      liked: true,
      likes_count: 0,
      created_at: "",
      updated_at: "",
      image_url: "https://misc.scdn.co/liked-songs/liked-songs-300.png",
      musics: data.items,
    } as Playlist,
  };
};

export default useLikedMusicPlaylist;
