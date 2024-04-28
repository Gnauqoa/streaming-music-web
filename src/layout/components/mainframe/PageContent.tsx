import { Route, Routes } from "react-router-dom";

import HomePage from "../../HomePage";
import SearchPage from "../../SearchPage";
import GenrePage from "../../GenrePage";
import PlayListPage from "../../PlayListPage";
import AlbumPage from "../../AlbumPage";

import { Tooltip } from "react-tooltip";
import generateContent from "../../../utils/TipContent";
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
