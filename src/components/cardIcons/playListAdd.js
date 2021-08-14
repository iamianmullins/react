import React, { useContext } from "react";
import { ShowsContext } from "../../contexts/showContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/PlaylistAdd";

const AddToPlayListIcon = ({ show }) => {
  const context = useContext(ShowsContext);

  const handleAddToPlayList = (e) => {
    e.preventDefault();
    context.addToPlayList(show);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToPlayList}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlayListIcon;
