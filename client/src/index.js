import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import styles from "./index.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import reduxThunk from 'redux-thunk';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
      color: 'white',
    },
    secondary: {
      main: '#e0e0e0',
    }
  }
});

const store = createStore(() => reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
