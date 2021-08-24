import React from "react";
import ShowListHeader from "../components/headerShowList";
import "../App.css";

export default {
  title: "Home Page/Header",
  component: ShowListHeader,
};

export const Basic = () => <ShowListHeader title={"Discover Shows"} />;

Basic.storyName = "Default";
