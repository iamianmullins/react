import React from "react";
import { withRouter } from "react-router-dom";

import PageTemplate from "../components/templateCastListPage";
import { getAggregateCredits } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const ViewCastPage = (props) => {
  const { id } = props.match.params;
  const { showName } = props.match.params;

  const { data: castList, error, isLoading, isError } = useQuery(
    ["getCastList", { id: id }],
    getAggregateCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {castList ? (
        <>
          <PageTemplate
            title={`${showName}`}
            showCastList={castList}
          ></PageTemplate>
        </>
      ) : (
        <p>Waiting for cAST details</p>
      )}
    </>
  );
};

export default withRouter(ViewCastPage);
