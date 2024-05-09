import { useState } from "react";

import CollectionRow from "../components/mainframe/CollectionRow";

export default function HomePage() {
  const [playlistsMap, setplaylistMap] = useState({
    "Discover picks for you": {
      id: "playlist1",
      playlists: [
        {
          id: "playlist1-1",
          type: "track",
          to: "/tracks",
          name: "Kill Bill",
          artists: [{ name: "SZA" }],
          album: {
            id: "album1",
            name: "SOS",
            images: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e020c471c36970b9406233842a5",
              },
            ],
          },
        },
        {
          id: "playlist1-2",
          type: "track",
          to: "/tracks",
          name: "Safaera",
          artists: [
            { name: "Bad Bunny" },
            { name: "Jowell & Randy" },
            { name: "Ñengo Flow" },
          ],
          album: {
            id: "album2",
            name: "YHLQMDLG",
            images: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e02548f7ec52da7313de0c5e4a0",
              },
            ],
          },
        },
        {
          id: "playlist1-3",
          type: "track",
          to: "/tracks",
          name: "Dynamite",
          artists: [{ name: "BTS" }],
          album: {
            id: "album3",
            name: "Dynamite",
            images: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e022f86d9710377e63bfbc82ba8",
              },
            ],
          },
        },
        {
          id: "playlist1-4",
          type: "track",
          to: "/tracks",
          name: "drivers license",
          artists: [{ name: "Olivia Rodrigo" }],
          album: {
            id: "album4",
            name: "drivers license",
            images: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e028ffc294c1c4362e8472d14cd",
              },
            ],
          },
        },
        {
          id: "playlist1-5",
          type: "track",
          to: "/tracks",
          name: "Ella Baila Sola",
          artists: [{ name: "Eslabon Armado" }, { name: "Peso Pluma" }],
          album: {
            id: "album5",
            name: "Ella Baila Sola",
            images: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e022071a0c79802d9375a53bfef",
              },
            ],
          },
        },
      ],
    },
    Liked: {
      id: "playlist2",
      playlists: [
        {
          id: "playlist2-1",
          type: "track",
          to: "/tracks",
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
          to: "/tracks",
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
          to: "/tracks",
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
          to: "/tracks",
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
          to: "/tracks",
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
          to: "/tracks",
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
          to: "/tracks",
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
          to: "/tracks",
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
          to: "/tracks",
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
          to: "/tracks",
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
      ],
    },
  });

  return (
    <div className="page-content">
      <div className="pageContent">
        <CollectionRow
          name="Made For You"
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
