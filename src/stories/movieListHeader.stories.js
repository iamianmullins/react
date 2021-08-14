import React from "react";
import ShowListHeader from "../components/headerShowList";

export default {
  title: "Home Page/Header",
  component: ShowListHeader,
};

export const Basic = () => <ShowListHeader title={"Discover Shows"} />;

Basic.storyName = "Default";
