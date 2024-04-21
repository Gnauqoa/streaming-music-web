import React from "react";

function PlayLists({
  top,
  bottom,
}: {
  top: React.ReactNode;
  bottom: React.ReactNode;
}) {
  return (
    <div className="playlists">
      <h1 className="play-title">playlists</h1>
      {top}
      <hr className="list-separator" />
      {bottom}
    </div>
  );
}

export default PlayLists;
