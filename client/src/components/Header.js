import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    color: "black"
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2)
  },
  link: {
    fontSize: 32,
    color: theme.palette.primary.main,
    textDecoration: "none"
  },
  logoutMenu: {
    display: "flex",
    flexDirection: "row",
    '& > button:first-child': {
      marginRight: 16,
    }
  }
}));

function Header() {
  const classes = useStyles();

  const user = useSelector(state => state.auth);

  const renderContent = () => {
    switch (user) {
      case null:
        return;
      case false:
        return (
          <Button variant="contained" color="primary" href="/auth/google">
            Login with google
          </Button>
        );
      default:
        return (
          <div className={classes.logoutMenu}>
            <Payments />
            <Button variant="contained" color="primary" href="/api/logout">
              Logout
            </Button>
          </div>
        );
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Link to={user ? "/surveys" : "/"} className={classes.link}>
          Emaily
        </Link>
        {renderContent()}
      </AppBar>
    </div>
  );
}

export default Header;
