import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Divider from "@mui/material/Divider";
import { NestedMenuItem, IconMenuItem } from "mui-nested-menu";
import msTimeFormat from "../../utils/utils";

const TrackListItem = React.forwardRef(
  (
    {
      track,
      styleName,
      highlight,
      playContextTrack,
    }: {
      track: any;
      styleName?: string;
      highlight: boolean;
      playContextTrack: Function;
    },
    ref
  ) => {
    const { album, artists, name, explicit, duration_ms, uri } = track;

    let thumbNail;
    if (styleName === "simplify" && album.images.length > 0)
      thumbNail = album.images[album.images.length - 1].url;

    const formattedTime = msTimeFormat(duration_ms);

    const [moreMenuAnchorEl, setMoreMenuAnchorEl] =
      React.useState<null | HTMLElement>(null);
    const moreMenuOpen = Boolean(moreMenuAnchorEl);
    const openMoreMenu = (event: React.MouseEvent<HTMLElement>) => {
      setMoreMenuAnchorEl(event.currentTarget);
    };
    const handleMoreMenuClose = () => {
      setMoreMenuAnchorEl(null);
    };

    function handleCreatePlaylist() {
      throw new Error("Function not implemented.");
    }

    function handleAddTrack(playlistid: string) {
      throw new Error("Function not implemented.");
    }

    function handleRemoveTrack() {
      throw new Error("Function not implemented.");
    }

    return (
      <li
        ref={ref as React.Ref<HTMLLIElement>}
        className={`trackListItem ${highlight ? "highlight" : null}`}
      >
        <div
          className="trackItemPlay"
          style={styleName === "simplify" ? simplyStyle : undefined}
        >
          <button
            className={
              styleName === "simplify"
                ? "hoverIcon no-outline"
                : "hoverIcon trackTopAlign no-outline"
            }
            onClick={() => playContextTrack(uri)}
          >
            <PlayArrowIcon className="icon" height="20" width="20" />
          </button>
          <div
            className={
              styleName === "simplify" ? "itemIcon" : "itemIcon trackTopAlign"
            }
            style={{ marginTop: styleName === "simplify" ? 0 : undefined }}
          >
            <MusicNoteOutlinedIcon className="icon" />
          </div>
        </div>

        {styleName === "simplify" && (
          <div className="trackMidAlign">
            <div className="trackItemThumb">
              {thumbNail ? (
                <img
                  loading="lazy"
                  src={thumbNail}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    top: "35%",
                    bottom: "35%",
                    left: "35%",
                    right: "35%",
                  }}
                >
                  <LibraryMusicOutlinedIcon className="icon" />
                </div>
              )}
            </div>
          </div>
        )}

        <div className="trackItemInfo">
          <div
            className={
              styleName === "simplify" ? "trackMidAlign" : "trackTopAlign"
            }
          >
            <div className="trackName ellipsis-one-line">{name}</div>

            {styleName !== "simplify" && (
              <div className="trackInfo">
                <span
                  className="explicit-label"
                  style={explicit ? { display: "flex" } : { display: "none" }}
                >
                  E
                </span>
                <span className="trackArtists ellipsis-one-line">
                  {artists.map((artist: any) => (
                    <a href={`/artist/${artist.id}`} key={artist.id}>
                      {artist.name}
                    </a>
                  ))}
                </span>
                {album && (
                  <>
                    <span className="trackInfoSep">•</span>
                    <span className="trackAlbum ellipsis-one-line">
                      <a href={`/album/${album.id}`}>{album.name}</a>
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="trackItemDuration">
          <div
            className={`duration ${
              styleName === "simplify" ? "trackMidAlign" : "trackTopAlign"
            }`}
          >
            <span>{formattedTime}</span>
          </div>
        </div>

        <MoreButton
          className={`trackMoreButton ${
            styleName === "simplify" ? "trackMidAlign" : "trackTopAlign"
          }`}
          onClick={openMoreMenu}
        />

        <Menu
          anchorEl={moreMenuAnchorEl}
          open={moreMenuOpen}
          onClose={handleMoreMenuClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <NestedMenuItem
            leftIcon={<AddIcon />}
            rightIcon={<ArrowRightIcon />}
            label="Add to playlist"
            parentMenuOpen={moreMenuOpen}
            MenuProps={{
              anchorOrigin: {
                vertical: "top",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "right",
              },
            }}
          >
            <IconMenuItem
              leftIcon={<AddIcon />}
              label="New playlist"
              onClick={handleCreatePlaylist}
            />
            <Divider />
            {/* TODO: playlists = get all playlists created by the current user */}
            {/* {playlists.map((playlist: any) => (
              <MenuItem
                key={playlist.id}
                onClick={() => {
                  handleAddTrack(playlist.id);
                }}
              >
                {playlist.name}
              </MenuItem>
            ))} */}
          </NestedMenuItem>

          <IconMenuItem
            leftIcon={<DeleteIcon />}
            label="Remove from this playlist"
            onClick={handleRemoveTrack}
          />
        </Menu>
      </li>
    );
  }
);

function MoreButton({
  className,
  onClick,
}: {
  className: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <button title="More options" className={className} onClick={onClick}>
      • • •
    </button>
  );
}
const simplyStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};

export default TrackListItem;
