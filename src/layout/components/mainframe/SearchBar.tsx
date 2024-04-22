import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({
  query,
  setQuery,
  resetQuery,
}: {
  query: string;
  setQuery: (query: string) => void;
  resetQuery: () => void;
}) {
  useEffect(() => {
    return () => resetQuery();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="SearchContainer">
      <div className="SearchBar">
        <div style={iconStyle}>
          <SearchIcon className="icon" />
        </div>
        <input
          className="SearchInput no-outline"
          maxLength={80}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          autoFocus={true}
          placeholder="Search for Artists, Songs, or Podcasts"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

const iconStyle: React.CSSProperties = {
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "12px",
  display: "flex",
  alignItems: "center",
  cursor: "text",
};
