export default function ArtistRowTitle({ title }: { title: string }) {
  return (
    <div className="ArtistRowTitle">
      <h1
        style={{
          fontSize: "28px",
          lineHeight: "1.6",
          fontWeight: "600",
          letterSpacing: "-.36px",
          color: "#fff",
          margin: "16px 0",
        }}
      >
        {title}
      </h1>
    </div>
  );
}
