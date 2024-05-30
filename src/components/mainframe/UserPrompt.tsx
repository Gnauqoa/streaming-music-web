import { CircularProgress } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import PromptButton from "./PromptButton";
import UserAvatar from "./UserAvatar";

export default function UserPrompt() {
  const { isAuth, isLoading } = useAuth();
  return (
    <div className="UserPrompt">
      {isLoading ? <CircularProgress /> : isAuth ? <UserAvatar /> 
        : (
          <>
            <PromptButton to="/signup" name="Sign Up" styleName="dark" />
            <PromptButton to="/login" name="Log In" styleName="light" />
          </>
        )
      }
    </div>
  );
}
