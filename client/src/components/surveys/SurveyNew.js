import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { reduxForm } from "redux-form";

const useStyles = () => makeStyles({});

function SurveyNew() {
  const classes = useStyles();
  const [showFormReview, setShowFormReview] = React.useState(false);

  const renderContent = () => {
    if (showFormReview) {
      return <SurveyFormReview onCancel={() => setShowFormReview(false)} />;
    }
    return <SurveyForm onSurveySubmit={() => setShowFormReview(true)} />;
  };

  return renderContent();
}

export default reduxForm({ form: "surveyForm" })(SurveyNew);
