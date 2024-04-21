import Headerbar from "./Headerbar";
import PageContent from "./PageContent";

import HistoryNav from "./HistoryNav";
import UserPrompt from "./UserPrompt";

function MainFrame() {
  return (
    <div className="featured">
      <Headerbar>
        <HistoryNav />
        <UserPrompt />
      </Headerbar>

      <PageContent />
    </div>
  );
}

export default MainFrame;
