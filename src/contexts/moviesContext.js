import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [mustWatch, setMustWatch] = useState([]);

  const addToFavorites = (show) => {
    setFavorites([...favorites, show.id]);
  };
  // We will use this function in a later section
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
    <MoviesContext.Provider
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
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
