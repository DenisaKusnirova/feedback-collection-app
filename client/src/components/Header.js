import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {},
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
          <Button variant="contained" color="primary" href="/api/logout">
            Logout
          </Button>
        );
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Link component="button" variant="h5" href="/">
          Feedback Collection App
        </Link>
        {renderContent()}
      </AppBar>
    </div>
  );
}

export default Header;
