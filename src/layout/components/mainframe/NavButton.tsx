import { NavigateFunction, useNavigate } from "react-router-dom";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

function MyNavButton(property: string, navigate: NavigateFunction) {
  function HandleClick(): void {
    if (property === "Back") navigate(-1);
    else navigate(+1);
  }

  return property === "Back" ? (
    <button className={"navButton no-outline"} onClick={HandleClick}>
      <ArrowBackIosNew className="icon" />
    </button>
  ) : (
    <button className={"navButton mediaNone no-outline"} onClick={HandleClick}>
      <ArrowForwardIos className="icon" />
    </button>
  );
}

export default function NavButton({ property }: { property: string }) {
  let navigate = useNavigate();
  return MyNavButton(property, navigate);
}
