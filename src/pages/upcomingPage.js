import React from "react";
import PageTemplate from "../components/templateShowListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getUpcomingShows } from "../api/tmdb-api";
import AddToPlayListIcon from "../components/cardIcons/playListAdd";

const UpcomingShowsPage = (props) => {
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
  const shows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const mustWatch = shows.filter((m) => m.mustWatch);
  localStorage.setItem("mustWatch", JSON.stringify(mustWatch));

  return (
    <PageTemplate
      title="Shows Airing Today"
      shows={shows}
      action={(show) => {
        return <AddToPlayListIcon show={show} />;
      }}
    />
  );
};

export default UpcomingShowsPage;
