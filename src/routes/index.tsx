import { createBrowserRouter } from "react-router-dom";
import { pathPage } from "./path";
import App from "../layout/App";
import "./index.css";

export default createBrowserRouter([
  {
    path: pathPage.root,
    element: <App />,
  },
]);
