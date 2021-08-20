import React from "react";
import { withRouter } from "react-router-dom";
import SeasonDetails from "../components/seasonDetails";
import PageTemplate from "../components/templateSeasonPage";
import { getShow } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const SeasonPage = (props) => {
  const { id } = props.match.params;

  const { data: show, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {show ? (
        <>
          <PageTemplate show={show}>
            <SeasonDetails show={show} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for season details</p>
      )}
    </>
  );
};

export default withRouter(SeasonPage);
