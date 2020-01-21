import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import EmailIcon from "@material-ui/icons/Email";
import { useSelector } from "react-redux";
import { FIELDS } from "./formFields";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { submitSurvey } from "../../actions";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    padding: 24,
    "& .MuiTextField-root": {
      marginBottom: 16,
      width: "100%"
    },
    "& h5": {
      marginBottom: 16
    }
  },
  buttonLink: {
    textDecoration: "none"
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
}));

const SurveyFormReview = ({ onCancel, history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formValues = useSelector(state => state.form.surveyForm.values);
  console.log(formValues);

  const renderFormValues = () =>
    FIELDS.map(field => {
      return (
        <TextField
          key={field.label}
          label={field.label}
          readOnly
          value={formValues[field.name]}
        />
      );
    });

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5">Confirm the entries</Typography>
          {renderFormValues()}
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            type="button"
            variant="outlined"
            color="primary"
            onClick={onCancel}
          >
            Back
          </Button>
          <Button
            type="button"
            variant="contained"
            color="primary"
            endIcon={<EmailIcon />}
            onClick={() => dispatch(submitSurvey(formValues, history))}
          >
            Send
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withRouter(SurveyFormReview);
