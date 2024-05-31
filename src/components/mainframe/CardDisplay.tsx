export default function CardDisplay({
  url,
  type,
}: {
  url: string;
  type: string;
}) {
  return (
    <div
      className="CardDisplay max-w-[300px] max-h-[300px]"
      style={{ borderRadius: type === "artist" ? "50%" : "0" }}
    >
      <img
        src={url}
        loading="lazy"
        className="previewImg"
        style={{ borderRadius: type === "artist" ? "50%" : "0" }}
        alt=""
      ></img>
    </div>
  );
}
