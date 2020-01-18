import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SurveyForm from "./SurveyForm";

const useStyles = () => makeStyles({});

function SurveyNew() {
  const classes = useStyles();

  return (
    <div>
      <SurveyForm />
    </div>
  );
}

export default SurveyNew;
