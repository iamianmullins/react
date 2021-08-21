import React from "react";
import PageTemplate from "../components/templateEpisodeListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getSeason } from "../api/tmdb-api";

const ViewEpisodesPage = (props) => {
  const { id } = props.match.params;
  const { season_number } = props.match.params;
  const { showName } = props.match.params;
  const { data, error, isLoading, isError } = useQuery(
    ["viewEpisodes", { id: id, season_number: season_number }],
    getSeason
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const episodes = data.episodes;

  // Redundant, but necessary to avoid app crashing.

  return (
    <PageTemplate
      title={`${showName}, season ${season_number}`}
      episodes={episodes}
    />
  );
};

export default ViewEpisodesPage;
