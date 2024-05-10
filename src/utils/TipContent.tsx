import PromptButton from "../components/mainframe/PromptButton";

export default function generateContent(
  dataTip: string,
  setShowTooltip: (e: boolean) => void
) {
  switch (dataTip) {
    case "create":
      return (
        <TipContent
          title="Create a playlist"
          tip="Log in to create and share playlists."
          setShowTooltip={setShowTooltip}
        />
      );
    case "list":
      return (
        <TipContent
          title="Enjoy your Liked Songs"
          tip="Log in to see all the songs you've liked in one easy playlist."
          setShowTooltip={setShowTooltip}
        />
      );
    case "library":
      return (
        <TipContent
          title="Enjoy Your Library"
          tip="Log in to see saved songs, podcasts, artists, and playlists in Your Library."
          setShowTooltip={setShowTooltip}
        />
      );
    case "play":
      return (
        <TipContent
          title="Log in to listen"
          tip="Due to limitations in the spotify playback api, log in to your PREMIUM account to listen"
          setShowTooltip={setShowTooltip}
        />
      );
    case "like":
      return (
        <TipContent
          title="Save for later"
          tip="Log in to save this playlist to Your Library."
          setShowTooltip={setShowTooltip}
        />
      );
    case "follow":
      return (
        <TipContent
          title="Follow"
          tip="Log in to follow"
          setShowTooltip={setShowTooltip}
        />
      );
    default:
      return null;
  }
}

function TipContent({
  title,
  tip,
  setShowTooltip,
}: {
  title: string;
  tip: string;
  setShowTooltip: Function;
}) {
  setShowTooltip(true);

  return (
    <div className="tipContent">
      <h2>{title}</h2>
      <h3>{tip}</h3>
      <div className="tipOptions">
        <PromptButton
          name="Not Now"
          styleName="dark"
          onClick={() => setShowTooltip(false)}
        />
        <PromptButton to="/login" name="Log In" styleName="light" />
      </div>
    </div>
  );
}
