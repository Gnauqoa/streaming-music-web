import AddIcon from "@mui/icons-material/Add";
import usePlaylist from "../../hooks/usePlaylist";

function CreatePlaylist() {
  const { createPlaylist } = usePlaylist();
  return (
    <>
      <button
        className="create-button no-outline"
        data-tip="create"
        data-for="tooltip"
        data-event="click"
        onClick={createPlaylist}
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
