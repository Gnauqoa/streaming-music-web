import React from "react";
import CreatePLaylist from "./CreatePlaylist";

function FeaturedPlaylist({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="featured-playlists">
        <CreatePLaylist />
        {children}
      </div>
    </>
  );
}

export default FeaturedPlaylist;
