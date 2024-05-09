import { useState } from "react";
import { useLocation } from "react-router-dom";

import PageBanner from "../components/mainframe/PageBanner";
import PlayListFunctions from "../components/mainframe/PlayListFunctions";
import TrackList from "../components/mainframe/TrackList";

export default function AlbumPage() {
  const highlight = useHighlight();

  const [bannerInfo, setbannerInfo] = useState({
    album_type: "Album",
    name: "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do",
    description: "",
    user: [
      {
        type: "artist",
        id: "1",
        name: "Fiona Apple",
        display_name: "Fiona Apple",
      },
    ],
    followers: { total: 72000 },
    primary_color: "##b03830",
    images: [
      {
        url: "https://i.scdn.co/image/ab67616d00001e0289c23f01cafeeac15fc47c47",
      },
    ],
    release_date: "2012",
  });

  const curArtist = [{ name: "Fiona Apple" }];

  const curAlbum = {
    id: "1",
    name: "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do",
    images: [
      {
        url: "https://i.scdn.co/image/ab67616d00001e0289c23f01cafeeac15fc47c47",
      },
    ],
  };

  const [tracks, setTracks] = useState([
    {
      id: "1",
      type: "track",
      to: "/tracks",
      name: "Every Single Night",
      artists: curArtist,
      album: curAlbum,
    },
    {
      id: "2",
      type: "track",
      to: "/tracks",
      name: "Daredevil",
      artists: curArtist,
      album: curAlbum,
    },
    {
      id: "3",
      type: "track",
      to: "/tracks",
      name: "Valentine",
      artists: curArtist,
      album: curAlbum,
    },
    {
      id: "4",
      type: "track",
      to: "/tracks",
      name: "Jonathan",
      artists: curArtist,
      album: curAlbum,
    },
    {
      id: "5",
      type: "track",
      to: "/tracks",
      name: "Left Alone",
      artists: curArtist,
      album: curAlbum,
    },
    {
      id: "6",
      type: "track",
      to: "/tracks",
      name: "Werewolf",
      artists: curArtist,
      album: curAlbum,
    },
    {
      id: "7",
      type: "track",
      to: "/tracks",
      name: "Periphery",
      artists: curArtist,
      album: curAlbum,
    },
    {
      id: "8",
      type: "track",
      to: "/tracks",
      name: "Regret",
      artists: curArtist,
      album: curAlbum,
    },
    {
      id: "9",
      type: "track",
      to: "/tracks",
      name: "Anything We Want",
      artists: curArtist,
      album: curAlbum,
    },
    {
      id: "10",
      type: "track",
      to: "/tracks",
      name: "Hot Knife",
      artists: curArtist,
      album: curAlbum,
    },
  ]);

  return (
    <div
      className="listPage"
      style={{ display: `${tracks.length === 0 ? "none" : "block"}` }}
    >
      <PageBanner pageTitle={bannerInfo.album_type} bannerInfo={bannerInfo} />
      <div className="playListContent">
        <div
          className="playListOverlay"
          style={{ backgroundColor: `${bannerInfo.primary_color}` }}
        ></div>
        <PlayListFunctions follow={false} />
        <div className="page-content">
          <TrackList
            ref={null}
            tracks={tracks}
            highlight={highlight}
            playContextTrack={(trackUri: string) => {}}
          />
        </div>
      </div>
    </div>
  );
}

function useHighlight() {
  return new URLSearchParams(useLocation().search).get("highlight");
}
