import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/PlaylistAdd";

const AddToPlayListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPlayList = (e) => {
    e.preventDefault();
    context.addToPlayList(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToPlayList}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlayListIcon;
