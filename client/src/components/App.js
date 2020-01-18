import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { fetchUser } from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: 800,
    margin: "0 auto",
    padding: "40px 16px",
    backgroundColor: "#f3f3f3"
  }
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className={classes.container}>
        <Route path="/" component={Landing} exact />
        <Route path="/surveys" component={Dashboard} exact />
        <Route path="/surveys/new" component={SurveyNew} exact />
      </div>
    </BrowserRouter>
  );
};

export default App;
