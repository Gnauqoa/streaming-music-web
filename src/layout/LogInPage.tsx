import Logo from "../components/authorization/Logo";
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
        <LogIn />
      </section>
    </div>
  );
}
