import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";

const ArtistRowItem = ({ info }: { info: any }) => {
  const { name, type, id, images } = info;
  let thumbNail;
  if (images.length > 0) {
    thumbNail = images[0].url;
  }

  return (
    <div className="artistRowItem">
      <a href={`/${type}/${id}`}>
        <div className="artistRowThumb">
          {thumbNail ? (
            <img
              loading="lazy"
              src={thumbNail}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          ) : (
            <div>
              <AlbumOutlinedIcon className="icon" />
            </div>
          )}
        </div>
      </a>
      <div className="artistRowName ellipsis-one-line">
        <a href={`/${type}/${id}`}>{name}</a>
      </div>
    </div>
  );
};

export default ArtistRowItem;
