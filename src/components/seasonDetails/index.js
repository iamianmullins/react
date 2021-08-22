import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";
import NavigationIcon from "@material-ui/icons/Navigation";

import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ShowReviews from "../ShowReviews";
import SeasonList from "../seasonList";

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

const SeasonDetails = ({ show, action }) => {
  // Don't miss this!
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [expanded] = React.useState(false);

  let displayedSeasons = show.seasons;

  return (
    <>
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
        <SeasonList
          action={action}
          seasons={displayedSeasons}
          show={show}
        ></SeasonList>
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

export default SeasonDetails;
