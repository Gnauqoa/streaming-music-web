import { Route, Routes } from "react-router-dom";

import AboutNavItem from "./AboutNavItem";
import RowGrid from "./RowGrid";
import ArtistRow from "./ArtistRow";

const AboutMenu = ({
  name,
  related,
  tracks,
  album,
  single,
  appear,
  compilation,
  playContextTrack,
}: {
  name: string;
  related: any[];
  tracks: any[];
  album: any[];
  single: any[];
  appear: any[];
  compilation: any[];
  playContextTrack: Function;
}) => {
  return (
    <>
      <nav className="menuNav">
        <ul className="menuNavList">
          <AboutNavItem label="Overview" to={`overview`} />
          <AboutNavItem label="Related Artist" to={`related`} />
        </ul>
      </nav>

      <div style={{ paddingTop: "1.5em", position: "relative" }}>
        <Routes>
          <Route
            path={`overview`}
            element={
              <>
                <ArtistRow
                  title="Popular"
                  display="list"
                  list={tracks}
                  playContextTrack={playContextTrack}
                />
                <ArtistRow title="Albums" display="grid" list={album} />
                <ArtistRow
                  title="Singles and EPs"
                  display="grid"
                  list={single}
                />
                <ArtistRow
                  title={`Featuring ${name}`}
                  display="grid"
                  list={appear}
                />
                <ArtistRow
                  title="Appears On"
                  display="grid"
                  list={compilation}
                />
              </>
            }
          />
          <Route path={`related`} element={<RowGrid playlists={related} />} />
        </Routes>
      </div>
    </>
  );
};

export default AboutMenu;
