import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FeaturedItem = ({ label, to }: { label: string; to: string }) => {
  return (
    <div
      className="featured-item"
      style={{ cursor: "pointer" }}
      data-tip="list"
      data-for="tooltip"
      data-event="click"
    >
      <Link
        to={to}
        className="flex flex-row items-center transaction-all px-6"
      >
        <div className="playlist-icon">
          <FavoriteIcon className="icon" />
        </div>
        <span className="featured-label">{label}</span>
      </Link>
    </div>
  );
};

export default FeaturedItem;
