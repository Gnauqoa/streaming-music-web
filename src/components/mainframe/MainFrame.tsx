import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Headerbar from "./Headerbar";
import PageContent from "./PageContent";

import HistoryNav from "./HistoryNav";
import UserPrompt from "./UserPrompt";
import SearchBar from "./SearchBar";
import Player from "../player";

function MainFrame() {
  const [query, setQuery] = useState("");

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
      <PageContent query={query} />
    </div>
  );
}

export default MainFrame;
