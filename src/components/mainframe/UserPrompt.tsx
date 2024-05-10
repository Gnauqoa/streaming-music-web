import PromptButton from "./PromptButton";

export default function UserPrompt() {
  return (
    <div className="UserPrompt">
      <PromptButton
        to="https://spotify.com/signup"
        name="Sign Up"
        styleName="dark"
      />
      <PromptButton to="/login" name="Log In" styleName="light" />
    </div>
  );
}
