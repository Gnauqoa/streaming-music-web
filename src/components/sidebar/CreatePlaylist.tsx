import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function CreatePlaylist() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="create-button no-outline"
        data-tip="create"
        data-for="tooltip"
        data-event="click"
        onClick={() => {
          let playlistid = "id of the newly created playlist";
          navigate(`/playlist/${playlistid}`);
        }}
      >
        <div className="playlist-icon">
          <AddIcon className="icon" />
        </div>
        <span className="featured-label">Create Playlist</span>
      </button>
    </>
  );
}

export default CreatePlaylist;
