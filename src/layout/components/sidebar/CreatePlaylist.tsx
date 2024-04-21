import AddIcon from "@mui/icons-material/Add";

function CreatePlaylist() {
  return (
    <>
      <button
        className="create-button no-outline"
        data-tip="create"
        data-for="tooltip"
        data-event="click"
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
