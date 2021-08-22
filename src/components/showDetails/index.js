import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import TheatersIcon from "@material-ui/icons/Theaters";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ShowReviews from "../ShowReviews";

import { blue, yellow, grey } from "@material-ui/core/colors";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
    backgroundColor: grey[900],
    color: grey[50],
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  overview: {
    padding: theme.spacing(1.5),
  },
  rootCard: {
    maxWidth: 345,
    minWidth: "100%",
    backgroundColor: grey[800],
    color: grey[50],
  },
  standard: {
    color: blue[700],
  },
  favorite: {
    color: yellow[700],
  },
  media: {
    height: 300,
    width: "200px",

    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const ShowDetails = ({ show, action }) => {
  // Don't miss this!
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [expanded] = React.useState(false);

  return (
    <>
      <Typography variant="h5" component="h3" className={classes.overview}>
        Overview
      </Typography>

      <Typography variant="h6" component="p" className={classes.overview}>
        {show.overview}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
        {show.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <Chip
          className={classes.chip}
          icon={<AccessTimeIcon />}
          label={`${" " + show.episode_run_time} min.`}
        />
        <Chip
          icon={<TheatersIcon />}
          label={`${show.status}`}
          className={classes.chip}
        />
        <Chip
          className={classes.chip}
          icon={<StarRate />}
          label={`${show.vote_average} (${show.vote_count}`}
        />
        <Chip
          className={classes.chip}
          icon={<CalendarTodayIcon />}
          label={`${show.first_air_date}`}
        />
      </Paper>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip
            label="Production Countries"
            className={classes.chip}
            color="primary"
          />
        </li>
        {show.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <ShowReviews show={show} />
      </Drawer>

      <Paper component="ul" className={classes.root}>
        <CardHeader className={classes.header} />

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <CalendarIcon fontSize="small" />
              Release Date: {show.first_air_date}
            </Typography>
            <Typography paragraph>{show.overview}</Typography>
          </CardContent>
        </Collapse>
      </Paper>
    </>
  );
};

export default ShowDetails;
