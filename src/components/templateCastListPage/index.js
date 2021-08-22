import React, { useState } from "react";
import Header from "../headerShowList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CastList from "../castList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function CastListPageTemplate({ showCastList, title }) {
  const classes = useStyles();

  let displayedCast = showCastList;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <CastList displayedCast={displayedCast} title={title}></CastList>
      </Grid>
    </Grid>
  );
}
export default CastListPageTemplate;
