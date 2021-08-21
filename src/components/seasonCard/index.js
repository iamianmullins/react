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
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import ButtonGroup from "@material-ui/core/ButtonGroup";
//import IconButton from "@material-ui/core/IconButton";
//import Grid from "@material-ui/core/Grid";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";
//import Avatar from "@material-ui/core/Avatar";
import { ShowsContext } from "../../contexts/showContext";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: "100%",
    backgroundColor: grey[800],
    color: grey[50],
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  media: {
    height: 350,
    width: "100%",
    paddingTop: "56.25%", // 16:9

    marginBottom: "0px",
  },
  text: {
    padding: theme.spacing(0, 0),
    display: "flex",
    flexDirection: "column",
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
  avatar: {
    backgroundColor: red[500],
  },
  card: {
    backgroundColor: grey[800],
    width: "100%",
    padding: "10px",
    border: "1px solid black",
    marginBottom: "50px",
    marginLeft: "50px",
    color: grey[50],
  },
}));

export default function ShowCard({ season, show, action }) {
  const classes = useStyles();
  const { favorites } = useContext(ShowsContext);
  const { mustWatch } = useContext(ShowsContext);
  const [expanded, setExpanded] = React.useState(false);

  if (mustWatch.find((id) => id === season.id)) {
    season.mustWatch = true;
  } else {
    season.mustWatch = false;
  }

  if (favorites.find((id) => id === season.id)) {
    season.favorite = true;
  } else {
    season.favorite = false;
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={(classes.root, classes.card)}>
      <Link
        to={`/shows/${show.id}/show/${show.name}/season/${season.season_number}`}
      >
        <CardMedia
          className={classes.media}
          title={show.name}
          image={
            season.poster_path
              ? `https://image.tmdb.org/t/p/w500/${season.poster_path}`
              : img
          }
        />
      </Link>

      <CardActions className={classes.text}>
        <CardHeader
          className={classes.header}
          title={
            <Typography className={classes.text} variant="h5" gutterBottom>
              {show.name}: {season.name}
              <br></br>
            </Typography>
          }
        />
        <IconButton
          className={classes.text}
          className={clsx(classes.expand, classes.text, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <CalendarIcon fontSize="small" />
            Release Date: {season.air_date}
          </Typography>
          <Typography paragraph>{season.overview}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
