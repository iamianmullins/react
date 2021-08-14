import React, { useState } from "react";

export const ShowsContext = React.createContext(null);

const ShowsContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [mustWatch, setMustWatch] = useState([]);

  const addToFavorites = (show) => {
    setFavorites([...favorites, show.id]);
  };

  const removeFromFavorites = (show) => {
    setFavorites(favorites.filter((mId) => mId !== show.id));
  };

  const addReview = (show, review) => {
    setMyReviews({ ...myReviews, [show.id]: review });
  };

  const addToPlayList = (show) => {
    console.log(mustWatch);
    setMustWatch([...mustWatch, show.id]);
  };

  const removeFromPlaylist = (show) => {
    setMustWatch(mustWatch.filter((mId) => mId !== show.id));
  };

  return (
    <ShowsContext.Provider
      value={{
        favorites,
        mustWatch,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToPlayList,
        removeFromPlaylist,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider;
