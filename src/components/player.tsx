import {
  Box,
  IconButton,
  Slider,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import useAudioControl from "../hooks/useAudioControl";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const formatTime = (time: number) => {
  const date = new Date(time * 1000);
  const hh = date.getUTCHours().toString().padStart(2, "0");
  const mm = date.getUTCMinutes().toString().padStart(2, "0");
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
};

const CustomSlider = styled(Slider)(({ theme }) => ({
  // width: '100%',
  color: "#00AB55",

  "& .MuiSlider-thumb": {
    backgroundColor: "#00AB55",
    boxShadow: "none",
    "&:hover, &:focus, &:before, &:after": {
      boxShadow: "none",
    },
  },
  "& .MuiSlider-rail": {
    color: "#A0A1A1",
  },
}));
const Player = () => {
  const {
    currentTime,
    duration,
    onSeek,
    onTogglePlay,
    open,
    onNext,
    onPrev,
    isPlaying,
    volume,
    setVolume,
    currentMusic,
  } = useAudioControl();
  if (!open || !currentMusic) return <></>;

  return (
    <div
      style={{
        width: "calc(100vw - 232px)",
      }}
      className="fixed z-20 bottom-0 flex flex-row items-center gap-2 bg-black p-2"
    >
      <Stack
        flexDirection={"row"}
        gap={4}
        py={1}
        alignItems={"center"}
        width={"100%"}
      >
        <Box sx={{ width: 56, height: 56, borderRadius: 4 }}>
          <img src={currentMusic.image_url} alt="" className=" object-cover" />
        </Box>
        <Stack sx={{ flexDirection: "column" }}>
          <Typography sx={{ fontSize: 16 }}>
            {currentMusic.name.slice(0, 15)}
            {currentMusic.name.length > 15 && "..."}
          </Typography>
          <Typography sx={{ fontSize: 12, color: "#b3b3b3" }}>
            {currentMusic.artists ? currentMusic.artists[0].name : ""}
          </Typography>
        </Stack>
      </Stack>
      <Stack position={"absolute"} width="100%" alignItems={"center"}>
        <Stack flexDirection={"column"} alignItems={"center"} width={700}>
          <Stack
            flexDirection={"row"}
            gap={4}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <IconButton onClick={onPrev}>
              <SkipPreviousIcon sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton
              onClick={onTogglePlay}
              sx={{
                backgroundColor: "#fff",
                ":hover": { backgroundColor: "#fff" },
              }}
            >
              {isPlaying ? (
                <PauseIcon sx={{ color: "#000" }} />
              ) : (
                <PlayArrowIcon sx={{ color: "#000" }} />
              )}
            </IconButton>
            <IconButton onClick={onNext}>
              <SkipNextIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              gap: 3,
              width: "100%",
            }}
          >
            <p className="text-sm font-[500]">{formatTime(currentTime)}</p>
            <CustomSlider
              size="small"
              value={currentTime}
              onChange={(e, val) => onSeek(val)}
              min={0}
              max={duration}
            />{" "}
            <p className="text-sm font-[500]">{formatTime(duration)}</p>
          </Stack>
        </Stack>
      </Stack>

      <Stack sx={{ width: 200, flexDirection: "row", gap: 2, mr: 2 }}>
        <VolumeUpIcon />
        <CustomSlider
          value={volume * 100}
          onChange={(e, val) => setVolume(Number(val) / 100)}
          min={0}
          max={100}
          step={1}
        />
      </Stack>
    </div>
  );
};

export default Player;
