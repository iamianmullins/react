import React, { useState } from "react";
import Header from "../headerShowList";
import FilterCard from "../filterShowsCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ShowList from "../showList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function ShowListPageTemplate({ shows, title, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedShows = shows
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid key="find" item xs={12} sm={6} md={4} lg={12} xl={12}>
        <FilterCard
          onUserInput={handleChange}
          titleFilter={nameFilter}
          genreFilter={genreFilter}
        />
      </Grid>
      <Grid item container spacing={5}>
        <ShowList action={action} shows={displayedShows}></ShowList>
      </Grid>
    </Grid>
  );
}
export default ShowListPageTemplate;
