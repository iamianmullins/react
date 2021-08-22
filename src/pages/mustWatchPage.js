import React, { useContext } from "react";
import PageTemplate from "../components/templateShowListPage";
import { ShowsContext } from "../contexts/showContext";
import { useQueries } from "react-query";
import { getShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemovefromPlaylist from "../components/cardIcons/removeFromPlaylist";
import WriteReview from "../components/cardIcons/writeReview";

const MustWatchPage = () => {
  const { mustWatch: showIds } = useContext(ShowsContext);

  // Create an array of queries and run in parallel.
  const favoriteShowQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }],
        queryFn: getShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const shows = favoriteShowQueries.map((q) => q.data);

  return (
    <PageTemplate
      title="Must Watch Shows"
      shows={shows}
      action={(show) => {
        return (
          <>
            <RemovefromPlaylist show={show} />
            <WriteReview show={show} />
          </>
        );
      }}
    />
  );
};

export default MustWatchPage;
