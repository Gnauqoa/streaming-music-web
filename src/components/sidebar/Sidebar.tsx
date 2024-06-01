import Logo from "../../assets/Logo.png";
import NavList from "./NavList";
import NavItem from "./NavItem";
import FeaturedItem from "./FeaturedItem";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import CreatePlaylist from "./CreatePlaylist";
import { useDispatch, useSelector } from "../../redux/store";
import PlaylistMiniCard from "../playlist/PlaylistMiniCard";
import { useEffect } from "react";
import { getCurrentUserPlaylist } from "../../redux/slices/playlist";
import useLikedMusicPlaylist from "../../hooks/useLikedMusic";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const { playlist } = useLikedMusicPlaylist();
  const { data } = useSelector((state) => state.playlist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserPlaylist());
  }, []);
  return (
    <>
      <div className="flex flex-col gap-3 bg-[#040404] w-[335px] overflow-auto h-full pb-10">
        <img
          src={Logo}
          style={{
            width: "150px",
            objectFit: "cover",
            display: "block",
            margin: "25px auto",
            cursor: "pointer",
          }}
          alt="Logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <NavList>
          <NavItem to="/" icon={<HomeIcon className="icon" />} label="Home" />
          <NavItem
            to="/search"
            icon={<SearchIcon className="icon" />}
            label="Search"
          />
          <NavItem
            to="/collection"
            icon={<LibraryMusicIcon className="icon" />}
            label="Your Library"
            data_tip="library"
            data_for="tooltip"
            data_event="click"
            style={{ pointerEvents: "none" }}
          />
        </NavList>

        <div className="flex flex-col">
          <h1 className="play-title">playlists</h1>
          <div className="flex flex-col gap-2">
            <CreatePlaylist />
            <FeaturedItem label="Liked Songs" to="/playlist/-1" />
          </div>
        </div>
        <div className="flex flex-col px-2">
          <PlaylistMiniCard playlist={playlist} />
          {data.items.map((item) => (
            <PlaylistMiniCard key={item.id} playlist={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
