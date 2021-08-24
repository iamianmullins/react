import React from "react";
import CastDetails from "../components/castDetails";
import SampleShow from "./sampleShowData";
import { MemoryRouter } from "react-router";
import ShowsContextProvider from "../contexts/showContext";
import "../App.css";

export default {
  title: "Show Details Page/CastDetails",
  component: CastDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ShowsContextProvider>{Story()}</ShowsContextProvider>,
  ],
};

export const Basic = () => <CastDetails show={SampleShow} />;

Basic.storyName = "Default";
