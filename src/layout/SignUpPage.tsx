import Logo from "../components/authorization/Logo";
import "../components/authorization/Authorization.css";
import Register from "../sections/auth/register";
// import { isLoggedIn } from "../utils/";

export default function SignUpPage() {
  // return isLoggedIn() ? (
  //   <Navigate to="/" replace />
  // ) : (
  return (
    <div>
      <Logo />
      <Register />
    </div>
  );
}
