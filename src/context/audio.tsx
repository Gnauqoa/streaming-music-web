import {
  type ReactNode,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { AudioContextType } from "../@types/audio";
import { Music } from "../@types/music";

const AudioContext = createContext<AudioContextType | null>(null);

export const AudioContextProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [playlist, setPlaylist] = useState<Music[]>([]);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const currentMusic = playlist[index];

  const handlePlaySong = (music: Music) => {
    const findResult = playlist.findIndex((item) => item.id === music.id);
    if (findResult !== -1)
      setPlaylist((state) => [
        ...state.slice(0, findResult),
        ...state.slice(findResult),
        music,
      ]);
    else setPlaylist((state) => [...state, music]);
    setIndex(playlist.length);
    setOpen(true);
  };
  const handlePlayPause = useCallback(() => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  }, [audio, isPlaying]);

  const handleSeek = useCallback(
    (value: number | number[]) => {
      if (audio) {
        audio.currentTime = Number(value);
        setCurrentTime(audio.currentTime);
      }
    },
    [audio]
  );

  const handleNext = useCallback(() => {
    const length = playlist.length;
    if (index === length - 1) return setIndex(0);
    setIndex(index + 1);
  }, [playlist.length, index]);

  const handlePrev = useCallback(() => {
    const length = playlist.length;
    if (index === 0) return setIndex(length - 1);
    setIndex(index - 1);
  }, [playlist.length, index]);

  useEffect(() => {
    if (currentMusic) {
      if (audio) audio.pause();
      const newAudio = new Audio(currentMusic.source_url);
      newAudio.addEventListener("loadedmetadata", () => {
        setDuration(newAudio.duration);
      });
      newAudio.addEventListener("timeupdate", () => {
        setCurrentTime(newAudio.currentTime);
      });
      newAudio.addEventListener("ended", () => {
        handleNext();
      });
      setAudio(newAudio);
      if (open) {
        if (newAudio) {
          newAudio.play();
          setIsPlaying(true);
        }
      } else {
        if (newAudio) {
          newAudio.pause();
          setIsPlaying(false);
        }
      }
    }
  }, [open, currentMusic]);

  return (
    <AudioContext.Provider
      value={{
        setVolume: (volume: number) => {
          if (audio) {
            audio.volume = volume;
          }
        },
        volume: audio?.volume || 0,
        onNext: handleNext,
        onPrev: handlePrev,
        setHide,
        setOpen,
        loading: false,
        open,
        hide,
        index,
        onTogglePlay: handlePlayPause,
        onSeek: handleSeek,
        onPlaySong: handlePlaySong,
        currentTime,
        duration,
        isPlaying,
        currentMusic,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
export default AudioContext;
