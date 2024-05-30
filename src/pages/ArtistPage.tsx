import { useState } from "react";

import PageBanner from "../components/mainframe/PageBanner";
import PlayListFunctions from "../components/mainframe/PlayListFunctions";
import AboutMenu from "../components/mainframe/AboutMenu";

export default function ArtistPage() {
  // Default demo page: /artist/undefined/overview
  const [bannerInfo, setbannerInfo] = useState({
    name: "LCD Soundsystem",
    description: "",
    user: [],
    followers: { total: 2270987 },
    primary_color: "rgb(83, 83, 83)",
    images: [
      {
        url: "https://i.scdn.co/image/ab676161000051746a0838a408f8c9cf82915ac8",
      },
    ],
    total: 0,
  });

  const [album, setAlbum] = useState([
    {
      id: "1",
      name: "Electric Lady Sessions",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02900011a8458275558f9779a4",
        },
      ],
    },
    {
      id: "2",
      name: "american dream",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02a5a932da2fc13defad4b7fba",
        },
      ],
    },
    {
      id: "3",
      name: "the long goodbye (lcd soundsystem live at madison square garden)",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e0201e6abc0f8b830037b697b23",
        },
      ],
    },
    {
      id: "4",
      name: "This Is Happening (Deluxe Edition)",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02afc6b440ddd26c3f5b4ec47f",
        },
      ],
    },
    {
      id: "5",
      name: "London Sessions",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02da6cec854395d93d889d4be7",
        },
      ],
    },
    {
      id: "6",
      name: "This Is Happening",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ee0d0dce888c6c8a70db6e8b",
        },
      ],
    },
    {
      id: "7",
      name: "45:33",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e029d7f1963c45b177c8068ea28",
        },
      ],
    },
    {
      id: "8",
      name: "Sound of Silver",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02e6272ad26e7a55bc342a6dd0",
        },
      ],
    },
    {
      id: "9",
      name: "LCD Soundsystem",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e0275ec666254c50336a378ad01",
        },
      ],
    },
  ]);
  const [single, setSingle] = useState([
    {
      id: "1",
      name: "new body rhumba (from the film White Noise)",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02b3d969b1af7931aa6d36188f",
        },
      ],
    },
    {
      id: "2",
      name: "(We Don't Need This) Fascist Groove Thang [electric lady sessions]",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02be7bd7bf9563281e3c2199d3",
        },
      ],
    },
    {
      id: "3",
      name: "Spotify Singles",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e0225676b655ec311fa501082a2",
        },
      ],
    },
    {
      id: "4",
      name: "some remixes",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e0250a34d8ef753f0a56400700d",
        },
      ],
    },
    {
      id: "5",
      name: "pulse (v.1)",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e0287a158332145dc06dfb57017",
        },
      ],
    },
    {
      id: "6",
      name: "christmas will break your heart",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02b3fa079d206e6944a68f2f89",
        },
      ],
    },
    {
      id: "7",
      name: "Drunk Girls (Holy Ghost! Remix)",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e0233f72928e189bb1e107079a3",
        },
      ],
    },
    {
      id: "8",
      name: "I Can Change",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e0241536e5cb3990abce7914f50",
        },
      ],
    },
  ]);
  const [appear, setAppear] = useState([
    {
      id: "1",
      name: "This Is LCD Soundsystem",
      type: "album",
      images: [
        {
          url: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evNZZcxVu-default.jpg",
        },
      ],
    },
    {
      id: "2",
      name: "LCD Soundsystem Radio",
      type: "album",
      images: [
        {
          url: "https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/066X20Nz7iquqkkCW6Jxy6/en",
        },
      ],
    },
    {
      id: "3",
      name: "Grand Theft Auto Official Playlist",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67706f000000028f82c724343e8e2d05b92127",
        },
      ],
    },
    {
      id: "4",
      name: "Beer & Wings",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67706f000000024b04e77913de1fc2a4b819df",
        },
      ],
    },
    {
      id: "5",
      name: "Sex Education Official Playlist",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67706f0000000223245f02d56405cdfec7069a",
        },
      ],
    },
    {
      id: "6",
      name: "Alternative 10s",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67706f000000024590fc2b12f47ff4f84194a9",
        },
      ],
    },
    {
      id: "7",
      name: "New Alt-Rock Mixtape",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67706f00000002282376d12b0fbd15cd2b938f",
        },
      ],
    },
    {
      id: "8",
      name: "Spotify Singles: Complete Collection",
      images: [
        {
          url: "https://i.scdn.co/image/ab67706f00000002ef9bd6fb43e3bc0dd2f91e57",
        },
      ],
    },
  ]);
  const [compilation, setCompilation] = useState([
    {
      id: "1",
      name: "TANGK",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02838fbd7f0f3d02d2235cd121",
        },
      ],
    },
    {
      id: "2",
      name: "Dancer",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02858566846d5ebadc1c692e0f",
        },
      ],
    },
    {
      id: "3",
      name: "Gift Horse",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e024e21fc7d29a64d282836725d",
        },
      ],
    },
    {
      id: "4",
      name: "Grace",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e028bac8fa704cf5124ee901e83",
        },
      ],
    },
    {
      id: "5",
      name: "The O.C. Mix 5",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e028e6a4444b6d23e5a58b4746e",
        },
      ],
    },
    {
      id: "6",
      name: "Summer Heat",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e0278facebdd769542fa74cd8cc",
        },
      ],
    },
    {
      id: "7",
      name: "Alternative 2K Essentials",
      type: "album",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e0277c6c405fee9d463b94bd9d1",
        },
      ],
    },
    {
      id: "8",
      name: "Classic Club Anthems",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02a145394d3547de4d624b0f3e",
        },
      ],
    },
  ]);
  const [related, setRelated] = useState([
    {
      id: "1",
      name: "Hot Chip",
      type: "artist",
      images: [
        {
          url: "https://i.scdn.co/image/ab676161000051745ac9cd80543c2d914f1c3cf1",
        },
      ],
    },
    {
      id: "2",
      name: "TV On The Radio",
      type: "artist",
      images: [
        {
          url: "https://i.scdn.co/image/999ad460fcc88db5be7aa1ffe8f3442331839894",
        },
      ],
    },
    {
      id: "3",
      name: "Animal Collective",
      type: "artist",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000517418820542e3e60a677899c7dd",
        },
      ],
    },
    {
      id: "4",
      name: "Cut Copy",
      type: "artist",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616100005174a853e2d9139528ce18f94119",
        },
      ],
    },
    {
      id: "5",
      name: "The Rapture",
      type: "artist",
      images: [
        {
          url: "https://i.scdn.co/image/2a729f1c5905c1c72a4afbc99939aa183d097855",
        },
      ],
    },
    {
      id: "6",
      name: "Caribou",
      type: "artist",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616100005174f9da16d673af005d53bab9cc",
        },
      ],
    },
    {
      id: "7",
      name: "Deerhunter",
      type: "artist",
      images: [
        {
          url: "https://i.scdn.co/image/ab676161000051749e2ec521b797dfccae2110d9",
        },
      ],
    },
    {
      id: "8",
      name: "The Flaming Lips",
      type: "artist",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616100005174baf865cbf7ef15f97d6ef1fe",
        },
      ],
    },
  ]);
  const [follow, setFollow] = useState(false);
  const [tracks, setTracks] = useState([
    {
      id: "1",
      type: "track",
      to: "/tracks/1",
      name: "Dancer",
      artists: [{ name: "IDLES" }, { name: "LCD Soundsystem" }],
      album: compilation[0],
    },
    {
      id: "2",
      type: "track",
      to: "/tracks/1",
      name: "Dance Yrself Clean",
      artists: [{ name: "LCD Soundsystem" }],
      album: album[5],
    },
    {
      id: "3",
      type: "track",
      to: "/tracks/1",
      name: "I Can Change",
      artists: [{ name: "LCD Soundsystem" }],
      album: album[5],
    },
    {
      id: "4",
      type: "track",
      to: "/tracks/1",
      name: "All My Friends",
      artists: [{ name: "LCD Soundsystem" }],
      album: album[7],
    },
    {
      id: "5",
      type: "track",
      to: "/tracks/1",
      name: "Daft Punk Is Playing at My House",
      artists: [{ name: "LCD Soundsystem" }],
      album: album[8],
    },
    {
      id: "6",
      type: "track",
      to: "/tracks/1",
      name: "oh baby",
      artists: [{ name: "LCD Soundsystem" }],
      album: album[1],
    },
    {
      id: "7",
      type: "track",
      to: "/tracks/1",
      name: "Someone Great",
      artists: [{ name: "LCD Soundsystem" }],
      album: album[7],
    },
    {
      id: "8",
      type: "track",
      to: "/tracks/1",
      name: "Home",
      artists: [{ name: "LCD Soundsystem" }],
      album: album[5],
    },
    {
      id: "9",
      type: "track",
      to: "/tracks/1",
      name: "New York, I Love You but You're Bringing Me Down",
      artists: [{ name: "LCD Soundsystem" }],
      album: album[7],
    },
    {
      id: "10",
      type: "track",
      to: "/tracks/1",
      name: "Tribulations",
      artists: [{ name: "LCD Soundsystem" }],
      album: album[8],
    },
  ]);

  return (
    <div
      className="listPage"
      style={{ display: tracks.length === 0 ? "none" : "block" }}
    >
      <PageBanner pageTitle="artist" bannerInfo={bannerInfo} />
      <div className="playListContent">
        <div
          className="playListOverlay"
          style={{ backgroundColor: `${bannerInfo.primary_color}` }}
        ></div>
        <PlayListFunctions type="artist" follow={follow} />
        <div className="page-content">
          <AboutMenu
            name={bannerInfo.name}
            related={related}
            tracks={tracks}
            album={album}
            single={single}
            appear={appear}
            compilation={compilation}
            playContextTrack={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
