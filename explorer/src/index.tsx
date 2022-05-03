import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@shared/theme";
import { Provider } from "react-redux";
import { store } from "graphql-playground-react";
import LogRocket from "logrocket";
import { isProd, logRocketId } from "@shared/environment";

if (isProd && logRocketId) {
  LogRocket.init(logRocketId);
}


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store as any}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root") as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
