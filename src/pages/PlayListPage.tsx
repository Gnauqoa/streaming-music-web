import { useState } from "react";

import PageBanner from "../components/mainframe/PageBanner";
import PlayListFunctions from "../components/mainframe/PlayListFunctions";
import TrackList from "../components/mainframe/TrackList";

export default function PlayListPage() {
  const [bannerInfo, setbannerInfo] = useState({
    name: "Discover Weekly",
    description:
      "Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.",
    user: [],
    followers: { total: 412018 },
    primary_color: "#262626",
    images: [
      {
        url: "https://i.scdn.co/image/ab67616d00001e02cdb645498cd3d8a2db4d05e1",
      },
    ],
  });
  const [tracks, setTracks] = useState([
    {
      id: "playlist2-1",
      type: "track",
      to: "/tracks/1",
      name: "Cruel Summer",
      artists: [{ name: "Taylor Swift" }],
      album: {
        id: "album6",
        name: "Lover",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647",
          },
        ],
      },
    },
    {
      id: "playlist2-2",
      type: "track",
      to: "/tracks/1",
      name: "bad guy",
      artists: [{ name: "Billie Eilish" }],
      album: {
        id: "album7",
        name: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e0250a3147b4edd7701a876c6ce",
          },
        ],
      },
    },
    {
      id: "playlist2-3",
      type: "track",
      to: "/tracks/1",
      name: "thank u, next",
      artists: [{ name: "Ariana Grande" }],
      album: {
        id: "album8",
        name: "thank u, next",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02ffa275ba245edba4c1c720af",
          },
        ],
      },
    },
    {
      id: "playlist2-4",
      type: "track",
      to: "/tracks/1",
      name: "I Like It",
      artists: [
        { name: "Cardi B" },
        { name: "Bad Bunny" },
        { name: "J Balvin" },
      ],
      album: {
        id: "album9",
        name: "Invasion of Privacy",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02a0caffda54afd0a65995bbab",
          },
        ],
      },
    },
    {
      id: "playlist2-5",
      type: "track",
      to: "/tracks/1",
      name: "Spring Day",
      artists: [{ name: "BTS" }],
      album: {
        id: "album10",
        name: "You Never Walk Alone",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02bd375b430c3abeceb8b5d8da",
          },
        ],
      },
    },
    {
      id: "playlist2-6",
      type: "track",
      to: "/tracks/1",
      name: "Redbone",
      artists: [{ name: "Childish Gambino" }],
      album: {
        id: "album11",
        name: '"Awaken, My Love!"',
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02f78c98bbf2b3c9e2a764203e",
          },
        ],
      },
    },
    {
      id: "playlist2-7",
      type: "track",
      to: "/tracks/1",
      name: "Formation",
      artists: [{ name: "Beyoncé" }],
      album: {
        id: "album12",
        name: "Lemonade",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e0289992f4d7d4ab94937bf9e23",
          },
        ],
      },
    },
    {
      id: "playlist2-8",
      type: "track",
      to: "/tracks/1",
      name: "Hotline Bling",
      artists: [{ name: "Drake" }],
      album: {
        id: "album13",
        name: "Views",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e029416ed64daf84936d89e671c",
          },
        ],
      },
    },
    {
      id: "playlist2-9",
      type: "track",
      to: "/tracks/1",
      name: "Alright",
      artists: [{ name: "Kendrick Lamar" }],
      album: {
        id: "album14",
        name: "To Pimp A Butterfly",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e02cdb645498cd3d8a2db4d05e1",
          },
        ],
      },
    },
    {
      id: "playlist2-10",
      type: "track",
      to: "/tracks/1",
      name: "Blank Space",
      artists: [{ name: "Taylor Swift" }],
      album: {
        id: "album15",
        name: "1989",
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d00001e029abdf14e6058bd3903686148",
          },
        ],
      },
    },
  ]);
  const [like, setLike] = useState(false);

  return (
    <div
      className="listPage"
      style={{ display: `${tracks.length === 0 ? "none" : "block"}` }}
    >
      <PageBanner pageTitle="playlist" bannerInfo={bannerInfo} />
      <div className="playListContent">
        <div
          className="playListOverlay"
          style={{ backgroundColor: `${bannerInfo.primary_color}` }}
        />
        <PlayListFunctions follow={like} />
        <div className="page-content">
          <TrackList ref={null} tracks={tracks} playContextTrack={() => {}} />
        </div>
      </div>
    </div>
  );
}
