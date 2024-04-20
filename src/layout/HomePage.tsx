import { useState } from "react";

import CollectionRow from "./components/CollectionRow";

export default function HomePage() {
  const [playlistsMap, setplaylistMap] = useState({
    Ye: {
      id: "playlist1",
      playlists: [
        {
          id: "playlist1-1",
          to: "/tracks",
          name: "CARNIVAL",
          images: [
            {
              url: "https://i.scdn.co/image/ab67616d00001e020a31b4026a452ae8c3f97a76",
            },
          ],
        },
        {
          id: "playlist1-2",
          to: "/",
          description: "Playlist 1 - Song 2",
          name: "Song 2",
          images: [{ url: "https://example.com/playlist1-2.png" }],
        },
        // Add more playlists and songs here
      ],
    },
    "Playlist 2": {
      id: "playlist2",
      playlists: [
        {
          id: "playlist2-1",
          to: "/tracks",
          description: "Playlist 2 - Song 1",
          name: "Song 1",
          images: [{ url: "https://example.com/playlist2-1.png" }],
        },
        {
          id: "playlist2-2",
          to: "/tracks",
          description: "Playlist 2 - Song 2",
          name: "Song 2",
          images: [{ url: "https://example.com/playlist2-2.png" }],
        },
        // Add more playlists and songs here
      ],
    },
    // Add more playlists here
  });

  return (
    <div className="page-content">
      <div className="pageContent">
        <CollectionRow
          name="Uniquely Yours"
          id={""}
          playlists={[
            {
              id: "",
              to: "/tracks",
              description: "",
              name: "Liked Songs",
              images: [
                { url: "https://misc.scdn.co/liked-songs/liked-songs-300.png" },
              ],
            },
          ]}
        />
        {Object.entries(playlistsMap).map(([name, info]) => {
          const { id, playlists } = info as { id: string; playlists: any[] };
          return (
            <CollectionRow name={name} key={id} id={id} playlists={playlists} />
          );
        })}
      </div>
    </div>
  );
}
