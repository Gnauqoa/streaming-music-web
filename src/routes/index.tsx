import { createBrowserRouter } from "react-router-dom";
import { pathPage } from "./path";
import MainLayout from "../layout/main";

export default createBrowserRouter([
  {
    path: pathPage.root,
    element: <MainLayout />,
  },
]);
