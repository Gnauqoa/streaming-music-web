import HomePage from "../../HomePage";

import { Tooltip } from "react-tooltip";
import generateContent from "../../../utils/TipContent";
import { useState } from "react";

export default function PageContent() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <HomePage />
      <Tooltip
        className="toolTip ttMain"
        id="tooltipMain"
        place="bottom"
        style={{ background: "#2e77d0" }}
        clickable={true}
        isOpen={showTooltip}
        setIsOpen={setShowTooltip}
      >
        {(dataTip) => generateContent(dataTip, setShowTooltip)}
      </Tooltip>
    </>
  );
}
