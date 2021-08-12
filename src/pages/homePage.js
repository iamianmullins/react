import React from "react";
import PageTemplate from "../components/templateMovieListPage";
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
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
    <PageTemplate
      title="Popular TV Shows"
      movies={movies}
      action={(show) => {
        return <AddToFavoritesIcon show={show} />;
      }}
    />
  );
};

export default HomePage;
