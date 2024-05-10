import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../../layout/HomePage";
import SearchPage from "../../layout/SearchPage";
import GenrePage from "../../layout/GenrePage";
import PlayListPage from "../../layout/PlayListPage";
import AlbumPage from "../../layout/AlbumPage";
import UserPage from "../../layout/UserPage";
import ArtistPage from "../../layout/ArtistPage";

import { Tooltip } from "react-tooltip";
import generateContent from "../../utils/TipContent";
import { useState } from "react";

export default function PageContent({ query }: { query: string }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage query={query} />} />
        <Route path="/genre/:id" element={<GenrePage />} />
        <Route path="/playlist/:id" element={<PlayListPage />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        {/* Auto redirect */}
        <Route
          path="/artist/:id"
          element={<Navigate to="overview" replace />}
        />
        <Route path="/artist/:id/*" element={<ArtistPage />} />
      </Routes>

      <Tooltip
        className="toolTip ttMain"
        id="tooltipMain"
        place="bottom"
        style={{ background: "#2e77d0" }}
        clickable={true}
        isOpen={showTooltip}
        setIsOpen={setShowTooltip}
      >
        {(dataTip) => generateContent(dataTip, setShowTooltip)}
      </Tooltip>
    </>
  );
}
