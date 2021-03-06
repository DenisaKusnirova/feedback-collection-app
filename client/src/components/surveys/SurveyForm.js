import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DoneIcon from "@material-ui/icons/Done";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import { FIELDS } from "./formFields";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 660,
    margin: "0 auto",
    padding: 16,
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

function SurveyForm({ handleSubmit, onSurveySubmit }) {
  const classes = useStyles();

  const renderFields = () =>
    FIELDS.map(field => {
      return (
        <Field
          key={field.name}
          type="text"
          name={field.name}
          component={SurveyField}
          label={field.label}
        />
      );
    });

  return (
    <div>
      <form onSubmit={handleSubmit(() => onSurveySubmit())}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5">Create a new survey</Typography>
            {renderFields()}
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Link to="/surveys" className={classes.buttonLink}>
              <Button type="submit" variant="outlined" color="primary">
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<DoneIcon />}
            >
              Next
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.recipients || "");

  FIELDS.forEach(field => {
    if (!values[field.name]) {
      errors[field.name] = "You must provide a value";
    }
  });

  return errors;
}

// reduxForm allows us to communicate with redux store
export default reduxForm({
  validate: validate,
  destroyOnUnmount: false,
  form: "surveyForm"
})(SurveyForm);
