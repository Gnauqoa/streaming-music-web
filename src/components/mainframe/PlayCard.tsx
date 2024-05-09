import React from "react";
import { Link } from "react-router-dom";

import CardInfo from "./CardInfo";
import CardDisplay from "./CardDisplay";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const PlayCard = React.forwardRef(
  ({ info, type }: { info: any; type: string }, ref) => {
    const description = returnDescription(type, info);
    const { name, id } = info;

    let images;
    if (type === "track") {
      images = info.album.images;
    } else {
      images = info.images;
    }
    let image_url;
    try {
      image_url = images[0].url;
    } catch {
      image_url = null;
    }

    return (
      <div className="pcWrapper">
        <Link
          to={
            info.to
              ? info.to
              : type === "track"
              ? `/album/${info.album.id}?highlight=${id}`
              : `/${type}/${id}`
          }
          style={{
            textDecoration: "none",
            color: "var(--main-text)",
            zIndex: "3",
          }}
        >
          <div
            ref={ref as React.RefObject<HTMLDivElement> | null}
            className="PlayCard"
          >
            <CardDisplay url={image_url} type={type} />
            <CardInfo title={name} description={description} />
          </div>
        </Link>
        <button
          className="smallButton no-outline"
          title="Play"
          data-tip="play"
          data-for="tooltipMain"
          data-event="click"
          style={{ color: "black" }}
        >
          <PlayArrowIcon className="icon" />
        </button>
      </div>
    );
  }
);

function returnDescription(type: string, info: any) {
  let artists;
  switch (type) {
    case "playlist":
      return info.description || `By ${info.owner.display_name}`;
    case "album":
      artists = info.artists.map((object: any) => object.name);
      return artists.length === 1 ? artists[0] : artists.join(", ");
    case "artist":
      return "artist";
    case "track":
      artists = info.artists.map((object: any) => object.name);
      return artists.length === 1 ? artists[0] : artists.join(", ");
    default:
      return null;
  }
}

export default PlayCard;
