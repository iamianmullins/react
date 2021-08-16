import React from "react";
import Show from "../showCard";
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

const ShowList = ({ shows, action }) => {
  let showCards = shows.map((m) => (
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
      <Show key={m.id} show={m} action={action} />
    </Grid>
  ));
  return showCards;
};

export default ShowList;
