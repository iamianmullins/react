import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import { getCast } from "../../api/tmdb-api";
import StarIcon from "@material-ui/icons/Star";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  star: {
    color: yellow[700],
  },
}));

export default function ShowReviews({ show }) {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getCast(show.id).then((reviews) => {
      setReviews(reviews);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {reviews.map((r) => (
            <TableCell key={r.id}>
              <StarIcon className={classes.star} /> {r.name} as {r.character}
            </TableCell>
          ))}
          <Divider orientation="vertical" flexItem />
        </Grid>
      </Grid>
    </div>
  );
}
