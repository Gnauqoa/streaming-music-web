import { GoogleLogin } from "@react-oauth/google";

export default function SocialLogin() {
  return (
    <div className="SocialIconsPage">
      <h6 className="hint">Sign Up with your social media account</h6>
      <div className="googlelogin">
        <GoogleLogin onSuccess={() => {}} onError={() => {}} />
      </div>
      <section className="or-seperator OR">
        <h6 className="hint">Sign up with your email address</h6>
      </section>
    </div>
  );
}
