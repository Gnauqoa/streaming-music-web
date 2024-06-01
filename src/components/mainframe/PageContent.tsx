import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";
import GenrePage from "../../pages/GenrePage";
import PlayListPage from "../../pages/PlayListPage";
import AlbumPage from "../../pages/AlbumPage";
import UserPage from "../../pages/UserPage";
import LoginPage from "../../pages/LoginPage";
import ArtistPage from "../../pages/ArtistPage";
import ProfilePage from "../../pages/ProfilePage";

import { Tooltip } from "react-tooltip";
import generateContent from "../../utils/TipContent";
import { useState } from "react";
import useAudioControl from "../../hooks/useAudioControl";

export default function PageContent({ query }: { query: string }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const { open } = useAudioControl();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage query={query} />} />
        <Route path="/genre/:id" element={<GenrePage />} />
        <Route path="/playlist/:id" element={<PlayListPage />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/artist/:id" element={<ArtistPage />} />
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
