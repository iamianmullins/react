import React from "react"; // useState/useEffect redundant
import ShowHeader from "../headerShow";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { getShowImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const TemplateShowPage = ({ show, children }) => {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery(
    ["images", { id: show.id }],
    getShowImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters;

  return (
    <>
      <ShowHeader show={show} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid className={classes.template} item xs={12}></Grid>
      </Grid>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            {children}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TemplateShowPage;
