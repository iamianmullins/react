import React from "react";
import SeasonDetails from "../components/seasonDetails";
import SampleShow from "./sampleShowData";
import { MemoryRouter } from "react-router";
import ShowsContextProvider from "../contexts/showContext";
import "../App.css";

export default {
  title: "Season Page/SeasonDetails",
  component: SeasonDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ShowsContextProvider>{Story()}</ShowsContextProvider>,
  ],
};

export const Basic = () => <SeasonDetails show={SampleShow} />;

Basic.storyName = "Default";
