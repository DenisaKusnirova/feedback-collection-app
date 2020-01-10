import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import Typography from "@material-ui/core/Typography";

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
    '& > span': {
      marginRight: 32,
    },
    '& > h6': {
      marginRight: 32,
      color: theme.palette.primary.main,
      display: 'flex',
      alignSelf: 'center',
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
            <Typography variant="subtitle1">Credits: {user.credits}</Typography>
            <Button variant="outlined" color="primary" href="/api/logout">
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
