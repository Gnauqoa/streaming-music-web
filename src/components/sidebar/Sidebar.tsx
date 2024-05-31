import React from "react";

import { Tooltip } from "react-tooltip";

import Logo from "../../assets/Logo.png";
import NavList from "./NavList";
import NavItem from "./NavItem";
import PlayLists from "./PlayLists";
import FeaturedItem from "./FeaturedItem";
import OtherPlaylist from "./OtherPlaylist";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

import generateContent from "../../utils/TipContent";
import CreatePlaylist from "./CreatePlaylist";

function Sidebar({ playlists }: { playlists: any[] }) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <>
      <div className="sidebar">
        <img
          src={Logo}
          style={{
            width: "150px",
            objectFit: "cover",
            display: "block",
            padding: "25px 0",
            margin: "0 auto",
          }}
          alt="Logo"
        />
        <NavList>
          <NavItem to="/" icon={<HomeIcon className="icon" />} label="Home" />
          <NavItem
            to="/search"
            icon={<SearchIcon className="icon" />}
            label="Search"
          />
          <NavItem
            to="/collection"
            icon={<LibraryMusicIcon className="icon" />}
            label="Your Library"
            data_tip="library"
            data_for="tooltip"
            data_event="click"
            style={{ pointerEvents: "none" }}
          />
        </NavList>
        <PlayLists
          top={
            <div className="flex flex-col">
              <CreatePlaylist />
              <FeaturedItem label="Liked Songs" to="/playlist/-1" />
            </div>
          }
          bottom={<OtherPlaylist playlists={playlists} />}
        />
      </div>
      <Tooltip
        className="toolTip"
        id="tooltip"
        place="right"
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

export default Sidebar;
