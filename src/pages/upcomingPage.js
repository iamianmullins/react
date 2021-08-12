import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getUpcomingShows } from "../api/tmdb-api";
import AddToPlayListIcon from "../components/cardIcons/playListAdd";

const UpcomingMoviesPage = (props) => {
  // UseQuery hook uses the second argument (getUpcoming) to perform the HTTP request; the first argument, "upcoming" is used as the cache entry key
  const { data, error, isLoading, isError } = useQuery(
    "upcoming",
    getUpcomingShows
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const mustWatch = movies.filter((m) => m.mustWatch);
  localStorage.setItem("mustWatch", JSON.stringify(mustWatch));
  const addToPlayList = (movieId) => true;

  return (
    <PageTemplate
      title="Shows Airing Today"
      movies={movies}
      action={(movie) => {
        return <AddToPlayListIcon movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesPage;
