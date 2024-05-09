import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Headerbar from "./Headerbar";
import PageContent from "./PageContent";

import HistoryNav from "./HistoryNav";
import UserPrompt from "./UserPrompt";
import SearchBar from "./SearchBar";

function MainFrame() {
  const [query, setQuery] = useState("");

  const resetQuery = () => {
    setQuery("");
  };

  return (
    <div className="featured">
      <Headerbar>
        <HistoryNav />
        <Routes>
          <Route
            path="/search"
            element={
              <SearchBar
                query={query}
                setQuery={setQuery}
                resetQuery={resetQuery}
              />
            }
          />
        </Routes>
        <UserPrompt />
      </Headerbar>

      <PageContent query={query} />
    </div>
  );
}

export default MainFrame;