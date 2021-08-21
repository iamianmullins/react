import React from "react";
import Episode from "../episodeCard";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(0),
  },
}));

const EpisodeList = ({ episodes }) => {
  let episodeCards = episodes.map((m) => (
    <Grid
      container
      className={useStyles.root}
      spacing={2}
      key={m.id}
      item
      xs={12}
      sm={8}
      md={6}
      lg={4}
      xl={3}
    >
      <Episode key={m.id} episode={m} />
    </Grid>
  ));
  return episodeCards;
};

export default EpisodeList;
