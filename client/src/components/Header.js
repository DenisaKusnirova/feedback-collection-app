import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {},
  appBar: {
    backgroundColor: "white",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2)
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Link
          component="button"
          variant="h5"
          href="/"
        >
          Feedback Collection App
        </Link>
        <Button variant="contained" color="primary">
          Login With Google
        </Button>
      </AppBar>
    </div>
  );
}

export default Header;
