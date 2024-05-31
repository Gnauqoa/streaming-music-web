import Sidebar from "../components/sidebar/Sidebar";
import MainFrame from "../components/mainframe/MainFrame";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import LogInPage from "./LogInPage";
import ForgotPassword from "../components/authorization/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="App">
            <Sidebar />
            <MainFrame />
          </div>
        }
      />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
