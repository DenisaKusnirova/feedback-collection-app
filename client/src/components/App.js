import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { fetchUser } from "../actions";
import Landing from "./Landing";

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

  const Surveys = () => <h3>Surveys</h3>;

  return (
    <BrowserRouter>
      <Header />
      <div className={classes.container}>
        <Route path="/" component={Landing} exact />
        <Route path="/surveys" component={Surveys} />
      </div>
    </BrowserRouter>
  );
};

export default App;
