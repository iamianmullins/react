import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { blue, red, green, pink, yellow, grey } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";
import { ShowsContext } from "../../contexts/showContext";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";

//Icons
import InfoIcon from "@material-ui/icons/Info";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "345px",
    minWidth: "350px",

    backgroundColor: grey[800],
    color: grey[50],
  },

  standard: {
    color: grey[50],
  },

  media: {
    height: 350,
    minWidth: "100%",
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

export default function EpisodeCard({ episode, action }) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        title={episode.name}
        image={
          episode.still_path
            ? `https://image.tmdb.org/t/p/w500/${episode.still_path}`
            : img
        }
      />

      <CardActions disableSpacing>
        <div className={classes.root}>
          <div className={classes.root}>
            <Link to={`/shows/${episode.id}`}>
              <CardHeader
                className={classes.header}
                title={
                  episode.favorite ? (
                    <Typography
                      className={classes.favorite}
                      variant="h5"
                      gutterBottom
                    >
                      {episode.name} <StarRateIcon fontSize="small" />
                      {"  "} {episode.vote_average}{" "}
                    </Typography>
                  ) : (
                    <Typography
                      className={classes.standard}
                      variant="h6"
                      gutterBottom
                    >
                      {episode.name} <StarRateIcon fontSize="small" />
                      {"  "} {episode.vote_average}{" "}
                    </Typography>
                  )
                }
              />
            </Link>
            <IconButton>
              <Link to={`/shows/${episode.id}`}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<InfoIcon>send</InfoIcon>}
                >
                  More Info...
                </Button>
              </Link>
            </IconButton>
          </div>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <CalendarIcon fontSize="small" />
            Release Date: {episode.first_air_date}
          </Typography>
          <Typography paragraph>{episode.overview}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
