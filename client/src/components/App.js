import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { fetchUser } from "../actions";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: 800,
    margin: "0 auto",
    padding: "40px 16px"
  }
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUser());
  }, []);

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
