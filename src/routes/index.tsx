import { createBrowserRouter } from "react-router-dom";
import { pathPage } from "./path";

export default createBrowserRouter([
  {
    path: pathPage.root,
    element: <div></div>,
  },
]);
