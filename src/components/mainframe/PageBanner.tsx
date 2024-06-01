import React from "react";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import { Avatar } from "@mui/material";

export default function PageBanner({
  pageTitle,
  bannerInfo,
}: {
  pageTitle: string;
  bannerInfo: any;
}) {
  const {
    name,
    description,

    following,
    primary_color,
    avatar_url,
  } = bannerInfo;
  let formattedLikes;

  if (following) formattedLikes = following.total.toLocaleString("en-US");

  return (
    <div
      className="banner"
      style={{
        backgroundColor: primary_color ? `${primary_color}` : "rgb(83, 83, 83)",
        height: pageTitle === "artist" ? "40vh" : "30vh",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {avatar_url ? (
          <Avatar sx={{ width: 250, height: 250 }} src={avatar_url} alt="" />
        ) : (
          <div className="svgSizing">
            <LibraryMusicOutlinedIcon className="icon" />
          </div>
        )}

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
