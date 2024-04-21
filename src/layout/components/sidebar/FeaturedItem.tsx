import { NavLink } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FeaturedItem = ({ label }: { label: string }) => {
  return (
    <div
      className="featured-item"
      style={{ cursor: "pointer" }}
      data-tip="list"
      data-for="tooltip"
      data-event="click"
    >
      <NavLink
        to="/tracks"
        className="featured-item-link"
        style={({ isActive }) =>
          isActive
            ? { opacity: "1", pointerEvents: "none" }
            : { pointerEvents: "none" }
        }
      >
        <div className="playlist-icon">
          <FavoriteIcon className="icon" />
        </div>
        <span className="featured-label">{label}</span>
      </NavLink>
    </div>
  );
};

export default FeaturedItem;
