import React from "react";
import Season from "../seasonCard";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(0),
  },
}));

const SeasonList = ({ seasons, show, action }) => {
  let seasonCards = seasons.map((sea) => (
    <Grid
      container
      className={useStyles.root}
      spacing={2}
      key={sea.id}
      item
      xs={12}
      sm={8}
      md={6}
      lg={4}
      xl={3}
    >
      <Season key={sea.id} season={sea} show={show} action={action} />
    </Grid>
  ));
  return seasonCards;
};

export default SeasonList;
