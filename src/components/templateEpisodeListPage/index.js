import React from "react";
import Header from "../headerShowList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import EpisodeList from "../episodeList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function EpisodeListPageTemplate({ episodes, title }) {
  const classes = useStyles();

  let displayedEpisodes = episodes;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <EpisodeList episodes={displayedEpisodes}></EpisodeList>
      </Grid>
    </Grid>
  );
}
export default EpisodeListPageTemplate;
