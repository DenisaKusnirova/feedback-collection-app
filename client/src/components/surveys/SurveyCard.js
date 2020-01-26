import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { Divider } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 660,
    margin: "0 auto",
    padding: 8
  },
  date: {
    borderBottom: "1px solid gray"
  },
  marginBottom: {
    marginBottom: 12
  },
  surveyCardHeader: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}));

function SurveyCard({ title, body, sentOn, yesAnswers, noAnswers, onIconDeleteClick }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.surveyCardHeader}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <IconButton
            color="primary"
            onClick={onIconDeleteClick}
          >
            <DeleteForeverIcon />
          </IconButton>
        </div>
        <Typography variant="body1" gutterBottom>
          {body}
        </Typography>
        <Typography
          variant="body1"
          align="right"
          color="secondary"
          className={classes.marginBottom}
        >
          Sent on: {new Date(sentOn).toLocaleDateString()}
        </Typography>
        <Divider className={classes.marginBottom} />
        <ButtonGroup orientation="horizontal">
          <Button variant="text" color="primary">
            Yes: {yesAnswers}
          </Button>
          <Button variant="text" color="primary">
            No: {noAnswers}
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

export default SurveyCard;
