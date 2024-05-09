import { useState } from "react";

import PageBanner from "../components/mainframe/PageBanner";
import PlayListFunctions from "../components/mainframe/PlayListFunctions";
import CollectionRow from "../components/mainframe/CollectionRow";

export default function UserPage() {
  const [bannerInfo, setbannerInfo] = useState({
    name: "mennovanvoorst",
    description: "",
    user: [],
    followers: { total: 49 },
    primary_color: "rgb(83, 83, 83)",
    images: [
      {
        url: "https://i.scdn.co/image/ab67616d00001e02a18843206ad1d8a98d1487ef",
      },
    ],
    total: 11,
  });

  const [playLists, setPlayLists] = useState([
    {
      id: "1",
      type: "playlist",
      to: "/playlist/1",
      name: "Today's Top Hits",
      owner: { display_name: "Spotify" },
      description: "Taylor Swift is on top of the Hottest 50!",
      images: [
        {
          url: "https://i.scdn.co/image/ab6768640000fe8987841212a041bb5c9cfec7b6",
        },
      ],
    },
    {
      id: "2",
      type: "playlist",
      to: "/playlist/2",
      name: "Top 50 - Global",
      owner: { display_name: "Spotify" },
      description:
        "Your daily update of the most played tracks right now - Global.",
      images: [
        {
          url: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
        },
      ],
    },
    {
      id: "3",
      type: "playlist",
      to: "/playlist/3",
      name: "RapCaviar",
      owner: { display_name: "Spotify" },
      description:
        "New music from Drake, Nicki Minaj, Future and Metro Boomin.",
      images: [
        {
          url: "https://i.scdn.co/image/ab6768640000fe89c19b9ecbe4874b262c0e0c47",
        },
      ],
    },
    {
      id: "4",
      type: "playlist",
      to: "/playlist/4",
      name: "Viva Latino",
      owner: { display_name: "Spotify" },
      description:
        "Today's top Latin hits, elevando nuestra música. Cover: Natanael Cano",
      images: [
        {
          url: "https://i.scdn.co/image/ab6768640000fe89de7f0ee9210aedcb3fcec686",
        },
      ],
    },
    {
      id: "5",
      type: "playlist",
      to: "/playlist/5",
      name: "Rock Classics",
      owner: { display_name: "Spotify" },
      description:
        "Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters",
      images: [
        {
          url: "https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e",
        },
      ],
    },
    {
      id: "6",
      type: "playlist",
      to: "/playlist/6",
      name: "All Out 2000s",
      owner: { display_name: "Spotify" },
      description: "The biggest songs of the 2000s. Cover: Kelly Clarkson",
      images: [
        {
          url: "https://i.scdn.co/image/ab67706f00000002603c97e588c19d27695b69c5",
        },
      ],
    },
    {
      id: "7",
      type: "playlist",
      to: "/playlist/7",
      name: "Songs to Sing in the Car",
      owner: { display_name: "Spotify" },
      description: "Sing along and enjoy the drive",
      images: [
        {
          url: "https://i.scdn.co/image/ab67706f000000025f413a23f7469b59cc462928",
        },
      ],
    },
    {
      id: "8",
      type: "playlist",
      to: "/playlist/8",
      name: "All Out 80s",
      owner: { display_name: "Spotify" },
      description: "The biggest songs of the 1980s. Cover: Bonnie Tyler.",
      images: [
        {
          url: "https://i.scdn.co/image/ab67706f00000002fe154a455809e72e4d854880",
        },
      ],
    },
    {
      id: "9",
      type: "playlist",
      to: "/playlist/9",
      name: "Baila Reggaeton",
      owner: { display_name: "Spotify" },
      description:
        "Reggaeton hits from Lyanno, Rauw Alejandro, KAROL G, Anitta and more.🔥🍑",
      images: [
        {
          url: "https://i.scdn.co/image/ab6768640000fe892b200afb58057620ec0abade",
        },
      ],
    },
    {
      id: "10",
      type: "playlist",
      to: "/playlist/10",
      name: "Beast Mode",
      owner: { display_name: "Spotify" },
      description: "Get your beast mode on!",
      images: [
        {
          url: "https://i.scdn.co/image/ab6768640000fe89d78267b00848576f5e242465",
        },
      ],
    },
  ]);
  const [follow, setFollow] = useState(false);

  return (
    <div
      className="listPage"
      style={{ display: playLists.length === 0 ? "none" : "block" }}
    >
      <PageBanner pageTitle="profile" bannerInfo={bannerInfo} />
      <div className="playListContent">
        <div
          className="playListOverlay"
          style={{ backgroundColor: `${bannerInfo.primary_color}` }}
        ></div>
        <PlayListFunctions type={"user"} follow={follow} />
        <div className="page-content" style={{ marginTop: "40px" }}>
          <CollectionRow
            ref={null}
            name="Public Playlists"
            id={""}
            playlists={playLists}
          />
        </div>
      </div>
    </div>
  );
}
