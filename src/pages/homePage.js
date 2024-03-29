import React from "react";
import PageTemplate from "../components/templateShowListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getShows } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const HomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getShows);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const shows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = shows.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
    <PageTemplate
      title="Popular TV Shows"
      shows={shows}
      action={(show) => {
        return <AddToFavoritesIcon show={show} />;
      }}
    />
  );
};

export default HomePage;
