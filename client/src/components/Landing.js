import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    marginTop: '30%',
    '& h3': {
      marginBottom: 16,
    }
  }
}));

function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3">Improve Your Application</Typography>
      <Typography variant="h5">Collect feedback from your users</Typography>
    </div>
  );
}
export default Landing;
