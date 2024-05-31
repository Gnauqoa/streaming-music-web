import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Headerbar from "./Headerbar";
import PageContent from "./PageContent";

import HistoryNav from "./HistoryNav";
import UserPrompt from "./UserPrompt";
import SearchBar from "./SearchBar";
import Player from "../player";
import useAudioControl from "../../hooks/useAudioControl";
import { Stack } from "@mui/material";

function MainFrame() {
  const [query, setQuery] = useState("");
  const { open } = useAudioControl();
  return (
    <div className="featured">
      <Headerbar>
        <HistoryNav />
        <Routes>
          <Route path="/search" element={<SearchBar />} />
        </Routes>
        <UserPrompt />
      </Headerbar>
      <Player />
      <Stack sx={{ pb: open ? 20 : 0 }}>
        <PageContent query={query} />
      </Stack>
    </div>
  );
}

export default MainFrame;
