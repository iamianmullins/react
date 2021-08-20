import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import { withRouter } from "react-router-dom";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: theme.spacing(1.5),
    margin: 0,
    backgroundColor: grey[900],
    color: grey[50],
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: 1,
    marginTop: 0,
    backgroundColor: blue[800],
    color: grey[0],
  },
  link: {
    color: grey[50],
  },

  tagLine: {
    fontSize: "1.5rem",
  },
}));

const ShowHeader = ({ show, history }) => {
  const classes = useStyles();

  return (
    <>
      <Paper component="div" className={classes.root}>
        <IconButton aria-label="go back" onClick={() => history.goBack()}>
          <ArrowBackIcon color="primary" fontSize="large" />
        </IconButton>

        <Typography variant="h4" component="h3">
          {show.name}
          <a href={show.homepage}>
            <HomeIcon color="primary" />
          </a>
          <br />
          <span className={classes.tagLine}>{`   "${show.tagline}"`} </span>
          <br></br>
          <span className={classes.tagLine}>
            {`    Seasons: ${show.number_of_seasons}`}{" "}
          </span>
          <span className={classes.tagLine}>
            {`  / Episodes: ${show.number_of_episodes}`}{" "}
          </span>
        </Typography>

        <IconButton aria-label="go forward" onClick={() => history.goForward()}>
          <ArrowForwardIcon color="primary" fontSize="large" />
        </IconButton>
        <br></br>
      </Paper>
      <div className={classes.buttonGroup}>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          fullWidth
        >
          <Button className={classes.button}>
            <Link className={classes.link} to={`/shows/${show.id}`}>
              View Show Details
            </Link>
          </Button>
          <Button className={classes.button}>
            <Link className={classes.link} to={`/seasons/${show.id}`}>
              View All Seasons
            </Link>
          </Button>
          <Button className={classes.button}>
            <Link
              className={classes.link}
              to={`/shows/${show.id}/similar/${show.name}`}
            >
              View Similar Shows to {show.name}
            </Link>
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default withRouter(ShowHeader);
