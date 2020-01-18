import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  fab: {
    position: "fixed",
    bottom: 32,
    right: 32
  }
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      Dashbboard
      <div>
        <Link to="surveys/new">
          <Fab color="primary" aria-label="add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
