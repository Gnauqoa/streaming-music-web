import { Stack, Typography } from "@mui/material";
import { Music } from "../../@types/music";

const MusicCard = ({ music }: { music: Music }) => {
  return (
    <Stack sx={{ backgroundColor: "#272727", borderRadius: 12, p: 3 }}>
      <Stack sx={{ maxWidth: 100, maxHeight: 100 }}>
        <img style={{ objectFit: "cover" }} src={music.source_url} alt="" />
      </Stack>
      <Typography>{music.name}</Typography>
      <Stack flexDirection={"row"} alignItems={"center"}>
        <Typography sx={{ color: "#b3b3b3" }}>Song</Typography>
        <span
          style={{
            width: "2px",
            height: "2px",
            backgroundColor: "#b3b3b3",
            borderRadius: "999px",
          }}
        ></span>
        <Typography>{music.artists[0].name}</Typography>
      </Stack>
    </Stack>
  );
};

export default MusicCard;
