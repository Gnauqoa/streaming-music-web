import React from "react";
import { NavLink } from "react-router-dom";

const AboutNavItem = ({ label, to }: { label: string; to: string }) => {
  return (
    <li className="AboutNavItem">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "aboutLink-active aboutLink" : "aboutLink"
        }
      >
        <span style={style}>{label}</span>
      </NavLink>
    </li>
  );
};

const style: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "16px",
  letterSpacing: "normal",
  textTransform: "none",
};

export default AboutNavItem;
