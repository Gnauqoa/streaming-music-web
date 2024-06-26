import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "./theme";
import { store } from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./layout/App";
import "./index.css";
import ToastContainer from "./config/toast";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./config/auth";
import { AudioContextProvider } from "./context/audio";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AudioContextProvider>
        <ThemeProvider>
          <ToastContainer />
          <Router>
            <AuthProvider>
              <App />
            </AuthProvider>
          </Router>
        </ThemeProvider>
      </AudioContextProvider>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
