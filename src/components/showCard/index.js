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
import ButtonGroup from "@material-ui/core/ButtonGroup";

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
  standard: {
    color: blue[700],
  },
  favorite: {
    color: yellow[700],
  },
  media: {
    height: 350,
    width: "100%",
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ShowCard({ show, action }) {
  const classes = useStyles();
  const { favorites } = useContext(ShowsContext);
  const { mustWatch } = useContext(ShowsContext);
  const [expanded, setExpanded] = React.useState(false);

  if (mustWatch.find((id) => id === show.id)) {
    show.mustWatch = true;
  } else {
    show.mustWatch = false;
  }

  if (favorites.find((id) => id === show.id)) {
    show.favorite = true;
  } else {
    show.favorite = false;
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        title={show.name}
        image={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
            : img
        }
      />
      <CardHeader
        className={classes.header}
        title={
          show.favorite ? (
            <Typography className={classes.favorite} variant="h5" gutterBottom>
              {show.name} <StarRateIcon fontSize="small" />
              {"  "} {show.vote_average}{" "}
            </Typography>
          ) : (
            <Typography className={classes.standard} variant="h6" gutterBottom>
              {show.name} <StarRateIcon fontSize="small" />
              {"  "} {show.vote_average}{" "}
            </Typography>
          )
        }
      />
      <CardActions disableSpacing>
        <div className={classes.root}>
          <IconButton>{action(show)}</IconButton>
          <div className={classes.root}>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <IconButton>
                <Link to={`/shows/${show.id}`}>
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
              <IconButton>
                <Link to={`/seasons/${show.id}`}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    View All Seasons
                  </Button>
                </Link>
              </IconButton>
            </ButtonGroup>
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
          <CardHeader
            className={classes.header}
            title={
              show.favorite ? (
                <Typography
                  className={classes.favorite}
                  variant="h5"
                  gutterBottom
                >
                  {show.name} <StarRateIcon fontSize="small" />
                  {"  "} {show.vote_average}{" "}
                </Typography>
              ) : (
                <Typography
                  className={classes.standard}
                  variant="h6"
                  gutterBottom
                >
                  {show.name} <StarRateIcon fontSize="small" />
                  {"  "} {show.vote_average}{" "}
                </Typography>
              )
            }
          />
          <Typography paragraph>
            <CalendarIcon fontSize="small" />
            Release Date: {show.first_air_date}
          </Typography>
          <Typography paragraph>{show.overview}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
