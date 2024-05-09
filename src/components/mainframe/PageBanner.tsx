import React from "react";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";

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
    user,
    followers,
    primary_color,
    images,
    release_date,
    total,
  } = bannerInfo;
  let formattedLikes;
  let imgUrl;
  if (images && images.length > 0) imgUrl = images[0].url;

  if (followers) formattedLikes = followers.total.toLocaleString("en-US");

  return (
    <div
      className="banner"
      style={{
        backgroundColor: `${primary_color}`,
        height: pageTitle === "artist" ? "40vh" : "30vh",
      }}
    >
      <div
        className={`bannerImgDiv ${
          pageTitle === "profile" || pageTitle === "artist" ? "circleDiv" : null
        }`}
      >
        {imgUrl ? (
          <img
            loading="lazy"
            src={imgUrl}
            className={`bannerImg ${
              pageTitle === "profile" || pageTitle === "artist"
                ? "circleDiv"
                : null
            }`}
            alt=""
          />
        ) : (
          <div className="svgSizing">
            <LibraryMusicOutlinedIcon className="icon" />
          </div>
        )}
      </div>

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
        <div className="additionalInfo">
          {user &&
            user[0] &&
            user.map(
              (
                person: {
                  type: string;
                  id: string;
                  name: string;
                  display_name: string;
                },
                index: number
              ) => (
                <a key={index} href={`/${person.type}/${person.id}`}>
                  {person.type === "artist" ? person.name : person.display_name}
                </a>
              )
            )}
          {total !== 0 && total && <h2>{total} Playlists</h2>}
          {followers !== 0 && (
            <h2 style={pageTitle === "artist" ? followerStyle : undefined}>
              {formattedLikes} {followerTitle(pageTitle)}
            </h2>
          )}
          {release_date && <h2>{release_date}</h2>}
        </div>
      </div>
      <div className="bannerOverlay"></div>
    </div>
  );
}

function followerTitle(title: string) {
  switch (title) {
    case "profile":
      return "Followers";
    case "artist":
      return "monthly listeners";
    default:
      return "Likes";
  }
}

const followerStyle: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "2",
  marginTop: "4px",
  color: "#fff",
};

const spanStyle: React.CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  marginTop: "4px",
  wordBreak: "break-word",
  overflow: "hidden",
};
