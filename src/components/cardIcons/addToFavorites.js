import React, { useContext } from "react";
import { ShowsContext } from "../../contexts/showContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToFavoritesIcon = ({ show }) => {
  const context = useContext(ShowsContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavorites(show);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;
