import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import styles from "./index.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import reduxThunk from "redux-thunk";
import axios from 'axios';
window.axios = axios;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#dc6263",
      color: "white"
    },
    secondary: {
      main: "#888888"
    }
  }
});

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);

