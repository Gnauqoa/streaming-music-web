import Logo from "../components/authorization/Logo";
import SocialLogin from "../components/authorization/SocialLogin";
import LogIn from "../components/authorization/LogIn";
import "../components/authorization/Authorization.css";
// import { isLoggedIn } from "../../utils/";

export default function LogInPage() {
  // return isLoggedIn() ? (
  //   <Navigate to="/" replace />
  // ) : (
  return (
    <div>
      <Logo />
      <section>
        <SocialLogin />
        <LogIn />
      </section>
    </div>
  );
}
