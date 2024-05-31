import React from "react";

function PlayLists({ top }: { top: React.ReactNode }) {
  return (
    <div className="playlists">
      <h1 className="play-title">playlists</h1>
      {top}
    </div>
  );
}

export default PlayLists;
