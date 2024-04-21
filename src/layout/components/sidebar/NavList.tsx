import React from "react";

const NavList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="nav-list">{children}</ul>;
};

export default NavList;
