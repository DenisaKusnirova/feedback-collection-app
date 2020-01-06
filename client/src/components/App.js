import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: 800,
    margin: "0 auto",
    padding: "40px 16px"
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.container}>
        <BrowserRouter />
      </div>
    </div>
  );
};

export default App;
