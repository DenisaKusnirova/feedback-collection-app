import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurveys } from "../../actions";

import SurveyCard from "./SurveyCard";

const useStyles = makeStyles(() => ({
  survey: {
    marginBottom: 24
  }
}));

function SurveyList() {
  const classes = useStyles();
  const surveys = useSelector(state => state.surveys);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchSurveys());
  }, []);

  const renderSurveys = surveys.reverse().map(survey => {
    return (
      <div key={survey._id} className={classes.survey}>
        <SurveyCard
          title={survey.title}
          body={survey.body}
          sentOn={survey.dateSent}
          yesAnswers={survey.yes}
          noAnswers={survey.no}
        />
      </div>
    );
  });

  return <div>{renderSurveys}</div>;
}

export default SurveyList;
