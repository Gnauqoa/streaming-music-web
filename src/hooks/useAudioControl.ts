import { useContext } from "react";
import AudioContext from "../context/audio";
import { AudioContextType } from "../@types/audio";

const useAudioControl = () => {
  return useContext(AudioContext) as AudioContextType;
};
export default useAudioControl;
