import { Link } from "react-router-dom";
import SignUp from "../components/authorization/SignUp";
import Logo from "../assets/Logo.png";
import { GoogleLogin } from "@react-oauth/google";
import "../components/authorization/SignUp.css";
// import { isLoggedIn } from "../utils";

export default function SignUpPage() {
  // return isLoggedIn() ? (
  //   <Navigate to="/" replace />
  // ) : (
  return (
    <div>
      <div style={{}}>
        <div className="NavBarStyle">
          <div className="barsection">
            <Link to="/">
              <img src={Logo} className="Logo" alt="" />
            </Link>
          </div>
        </div>
        <section>
          <div className="SocialIconsPage">
            <h6 className="hint">Sign Up with your social media account</h6>
            <div className="googlelogin">
              <GoogleLogin onSuccess={() => {}} onError={() => {}} />
            </div>
            <section className="or-seperator OR">
              <h6 className="hint">Sign up with your email address</h6>
            </section>
          </div>
          <SignUp />
        </section>
      </div>
    </div>
  );
}
