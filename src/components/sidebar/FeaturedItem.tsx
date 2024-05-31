import { Link, useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect } from "react";

const FeaturedItem = ({ label, to }: { label: string; to: string }) => {
  const location = useLocation();
  const isCurrent = location.pathname === to;

  return (
    <div
      className="flex relative"
      style={{ cursor: "pointer" }}
      data-tip="list"
      data-for="tooltip"
      data-event="click"
    >
      <Link
        to={to}
        className="flex flex-row items-center transaction-all px-6 gap-4"
      >
        <FavoriteIcon
          className={isCurrent ? "icon text-[#fff]" : "icon text-[#b3b3b3]"}
        />
        <span
          className={
            isCurrent ? "text-[#fff] font-[600]" : "text-[#b3b3b3] font-[600]"
          }
        >
          {label}
        </span>
      </Link>
    </div>
  );
};

export default FeaturedItem;
