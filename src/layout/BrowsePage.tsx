import { useState } from "react";

import BrowseCard from "./components/mainframe/BrowseCard";
import PageTitle from "./components/mainframe/PageTitle";

export default function BrowsePage() {
  const [genre, setGenre] = useState([
    {
      id: 1,
      name: "Podcasts",
      icons: [
        {
          url: "https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa",
        },
      ],
    },
    {
      id: 2,
      name: "Live Events",
      icons: [
        {
          url: "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Made For You",
      icons: [
        { url: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe" },
      ],
    },
    {
      id: 4,
      name: "New Releases",
      icons: [
        {
          url: "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
        },
      ],
    },
    {
      id: 5,
      name: "Vietnamese Music",
      icons: [
        {
          url: "https://i.scdn.co/image/ab67fb8200005caf55dfb53724670e4db6cee444",
        },
      ],
    },
  ]);

  return (
    <div className="page-content">
      <div className="browsePage">
        <PageTitle name="Browse All" />
        <div className="browseGrid">
          {genre.map((genre) => {
            return <BrowseCard key={genre.id} info={genre} />;
          })}
        </div>
      </div>
    </div>
  );
}
