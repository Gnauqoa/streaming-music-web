import React from "react";
import { Link } from "react-router-dom";

import CardInfo from "./CardInfo";
import CardDisplay from "./CardDisplay";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Playlist } from "../../@types/playlist";

const PlayCard = React.forwardRef(
  ({ playlist }: { playlist: Playlist }, ref) => {
    return (
      <div className="pcWrapper max-w-[400px] max-h-[400px]">
        <Link
          to={`/playlists/${playlist.id}`}
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
            <CardDisplay url={playlist.image_url} type={"playlist"} />
            <CardInfo title={playlist.name} description={playlist.description} />
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
