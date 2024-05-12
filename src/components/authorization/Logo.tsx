import LogoSrc from "../../assets/Logo.png";

export default function Logo() {
  return (
    <div className="NavBarStyle">
      <div className="barsection">
        <img src={LogoSrc} className="Logo" alt="" />
      </div>
    </div>
  );
}
