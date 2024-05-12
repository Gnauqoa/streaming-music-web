import { useState } from "react";

import Sidebar from "../components/sidebar/Sidebar";
import MainFrame from "../components/mainframe/MainFrame";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import LogInPage from "./LogInPage";

function App() {
  const [playlists, setPlaylists] = useState([
    { id: "playlist1", name: "Daily Mix 1" },
    { id: "playlist2", name: "Daily Mix 2" },
    { id: "playlist3", name: "Discover Weekly" },
  ]);

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="App">
            <Sidebar playlists={playlists} />

            <MainFrame />
          </div>
        }
      />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
    </Routes>
  );
}

export default App;
