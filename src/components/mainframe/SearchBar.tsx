import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentQuery, setCurrentQuery] = React.useState("");
  const query = searchParams.get("query") || "";
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchParams({ query: currentQuery });
    }
  };
  useEffect(() => {
    setCurrentQuery(query);
  }, [query]);
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
          value={currentQuery}
          onChange={(e) => setCurrentQuery(e.target.value)}
          onKeyPress={handleKeyPress}
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
