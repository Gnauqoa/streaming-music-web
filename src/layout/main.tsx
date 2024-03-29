import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      Main layout <Outlet />
    </div>
  );
};

export default MainLayout;
