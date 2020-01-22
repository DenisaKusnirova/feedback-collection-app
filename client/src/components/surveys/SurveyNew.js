import React from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { reduxForm } from "redux-form";

function SurveyNew() {
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
