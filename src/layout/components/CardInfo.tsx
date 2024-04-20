export default function CardInfo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="CardInfo">
      <h2 style={titleStyle}>{title}</h2>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
}

const titleStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "24px",
  letterSpacing: "normal",
  textTransform: "none",
  textOverflow: "ellipsis",
  overflow: "hidden",
  color: "white",
  whiteSpace: "nowrap",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: "400",
  lineHeight: "16px",
  letterSpacing: "normal",
  textTransform: "none",
  textOverflow: "ellipsis",
  overflow: "hidden",
  marginTop: "4px",
  whiteSpace: "normal",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
};
