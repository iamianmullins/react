import React from "react";
import CastCard from "../components/castCard";
import SampleCast from "./sampleCastData";
import { MemoryRouter } from "react-router";
import ShowsContextProvider from "../contexts/showContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import "../App.css";

export default {
  title: "Home Page/CastCard",
  component: CastCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ShowsContextProvider>{Story()}</ShowsContextProvider>,
  ],
};

export const Basic = () => {
  const displayedCast = SampleCast.cast;
  const cas = displayedCast[0];
  const title = "SampleTVShow";
  return (
    <CastCard
      key={cas.id}
      castMember={cas}
      displayedCast={displayedCast}
      title={title}
    />
  );
};
Basic.storyName = "Default";
