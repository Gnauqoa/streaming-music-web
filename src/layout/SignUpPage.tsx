import Logo from "../components/authorization/Logo";

import SignUp from "../components/authorization/SignUp";
import "../components/authorization/Authorization.css";
// import { isLoggedIn } from "../utils/";

export default function SignUpPage() {
  // return isLoggedIn() ? (
  //   <Navigate to="/" replace />
  // ) : (
  return (
    <div>
      <div>
        <Logo />
        <section>
          <SignUp />
        </section>
      </div>
    </div>
  );
}
