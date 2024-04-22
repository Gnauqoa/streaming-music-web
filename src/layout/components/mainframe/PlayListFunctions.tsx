import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function PlayListFunctions({
  type,
  follow,
}: {
  type?: string;
  follow: boolean;
}) {
  switch (type) {
    case "playOnly":
      return (
        <div className="playListFunctions">
          <PlayButtonLarge />
        </div>
      );
    case "none":
      return (
        <div className="playListFunctions">
          <MoreButton onClick={() => {}} />
        </div>
      );
    case "user":
      return (
        <div className="playListFunctions">
          <FollowButton follow={follow} />
          <MoreButton onClick={() => {}} />
        </div>
      );
    case "artist":
      return (
        <div className="playListFunctions">
          <PlayButtonLarge />
          <FollowButton follow={follow} />
          <MoreButton onClick={() => {}} />
        </div>
      );
    default:
      return (
        <div className="playListFunctions">
          <PlayButtonLarge />
          <LikeButton follow={follow} />
          <MoreButton onClick={() => {}} />
        </div>
      );
  }
}

function PlayButtonLarge() {
  return (
    <button
      className="playButton no-outline"
      title="Play"
      data-tip="play"
      data-for="tooltipMain"
      data-event="click"
      style={{ color: "black" }}
    >
      <PlayArrowIcon className="icon" height="28" width="28" />
    </button>
  );
}

function LikeButton({ follow }: { follow: boolean }) {
  return (
    <button
      className="likeButton no-outline"
      title="Save to Your Library"
      data-tip="like"
      data-for="tooltipMain"
      data-event="click"
    >
      {follow ? (
        <FavoriteIcon className="icon" />
      ) : (
        <FavoriteBorderIcon className="icon" />
      )}
    </button>
  );
}

function FollowButton({ follow }: { follow: boolean }) {
  return (
    <button
      className="followButton no-outline"
      data-tip="follow"
      data-for="tooltipMain"
      data-event="click"
      onClick={() => console.log("hi")}
    >
      {follow ? "following" : "follow"}
    </button>
  );
}

function MoreButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="moreButton no-outline" title="More" onClick={onClick}>
      • • •
    </button>
  );
}
