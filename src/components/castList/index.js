import React from "react";
import CastMember from "../castCard";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },

  control: {
    padding: theme.spacing(0),
  },
}));

const CastList = ({ displayedCast, title }) => {
  let castCards = displayedCast.cast.map((cas) => (
    <Grid
      container
      className={useStyles.root}
      spacing={2}
      key={cas.id}
      item
      xs={12}
      sm={8}
      md={6}
      lg={4}
      xl={3}
    >
      <CastMember
        key={cas.id}
        castMember={cas}
        displayedCast={displayedCast}
        title={title}
      />
    </Grid>
  ));
  return castCards;
};

export default CastList;
