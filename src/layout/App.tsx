import { useState } from "react";

import Sidebar from "./components/sidebar/Sidebar";
import MainFrame from "./components/mainframe/MainFrame";

function App() {
  const [playlists, setPlaylists] = useState([
    { id: "playlist1", name: "Daily Mix 1" },
    { id: "playlist2", name: "Daily Mix 2" },
    { id: "playlist3", name: "Discover Weekly" },
  ]);

  return (
    <div className="App">
      <Sidebar playlists={playlists} />

      <MainFrame />
    </div>
  );
}

export default App;
