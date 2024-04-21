const styles = {
  dark: {
    backgroundColor: "transparent",
    color: "#fff",
  },
  light: {
    backgroundColor: "#fff",
    color: "#181818",
  },
  CTA: {
    margin: "8px 0 12px",
    whiteSpace: "nowrap",
    fontSize: "14px",
    color: "#2e77d0",
    padding: "8px 48px",
  },
};

export default function PromptButton({
  to,
  name,
  styleName,
  onClick,
}: {
  to?: string;
  name: string;
  styleName: keyof typeof styles;
  onClick?: () => void;
}) {
  return to ? (
    <a href={to}>
      <button
        className="PromptButton no-outline"
        name={name}
        style={styles[styleName]}
      >
        {name}
      </button>
    </a>
  ) : (
    <button
      className="PromptButton no-outline"
      name={name}
      style={styles[styleName]}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
