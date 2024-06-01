import React from "react";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import { Avatar, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import useToggle from "../../hooks/useToggle";
import EditPlaylistModal from "../playlist/EditPlayListModal";

export default function PageBanner({
  pageTitle,
  bannerInfo,
  updatePlaylist,
}: {
  updatePlaylist?: (payload: any) => void;
  pageTitle: string;
  bannerInfo: any;
}) {
  const { name, description, primary_color, avatar_url } = bannerInfo;
  const { toggle, onOpen, onClose } = useToggle();

  return (
    <div
      className="banner"
      style={{
        backgroundColor: primary_color ? `${primary_color}` : "rgb(83, 83, 83)",
        height: pageTitle === "artist" ? "40vh" : "30vh",
      }}
    >
      <div className="flex flex-col w-full relative">
        {avatar_url ? (
          <Avatar sx={{ width: 250, height: 250 }} src={avatar_url} alt="" />
        ) : (
          <div className="svgSizing">
            <LibraryMusicOutlinedIcon className="icon" />
          </div>
        )}

        <IconButton
          onClick={onOpen}
          sx={{
            position: "absolute",
            top: 50,
            right: 50,
            zIndex: 20,
            backgroundColor: "primary.main",
            color: "#fff",
          }}
        >
          <EditIcon />
        </IconButton>
        <EditPlaylistModal
          open={toggle}
          onClose={onClose}
          updatePlaylist={updatePlaylist}
        />
        <div className="bannerInfo">
          <h2 className="pageTitle">{pageTitle}</h2>
          <span style={spanStyle}>
            <h1 className={name.length > 15 ? "bannerTitleXL" : "bannerTitle"}>
              {name}
            </h1>
          </span>
          <p
            className="bannerDescription"
            style={{ display: description === "" ? "none" : "flex" }}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="bannerOverlay"></div>
    </div>
  );
}

const spanStyle: React.CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  marginTop: "4px",
  wordBreak: "break-word",
  overflow: "hidden",
};
