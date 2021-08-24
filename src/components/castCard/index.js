import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { grey, yellow } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";

import Typography from "@material-ui/core/Typography";

import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";

import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";

//Icons
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import StarRateIcon from "@material-ui/icons/StarRate";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345,

    backgroundColor: grey[800],
    color: grey[50],
  },

  standard: {
    color: yellow[500],
  },

  media: {
    height: 350,
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

export default function CastCard({ castMember, title }) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        title={castMember.name}
        image={
          castMember.profile_path
            ? `https://image.tmdb.org/t/p/w500/${castMember.profile_path}`
            : img
        }
      />

      <CardActions disableSpacing>
        <div className={classes.root}>
          <div className={classes.root}>
            <Link to={`/shows/${castMember.id}`}>
              <CardHeader
                className={classes.header}
                title={
                  <Typography
                    className={classes.standard}
                    variant="h6"
                    gutterBottom
                  >
                    {castMember.name} <br></br>{" "}
                    <StarRateIcon fontSize="small" />
                    {"  "}
                    {castMember.popularity}{" "}
                  </Typography>
                }
              />
            </Link>
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
            <PeopleOutlineIcon fontSize="small" /> Roles in {title}
            {castMember.roles.map((g) => (
              <li key={g.character}>{g.character}</li>
            ))}
          </Typography>
          <Typography paragraph>{castMember.overview}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
