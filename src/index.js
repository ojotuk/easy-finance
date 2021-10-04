import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/css/global.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import storeConfig from "./redux/config";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./utility/ui/theme";

const store = storeConfig();

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
