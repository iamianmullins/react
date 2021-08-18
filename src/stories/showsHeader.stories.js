import React from "react";
import ShowsHeader from "../components/headerShowList";
import { MemoryRouter } from "react-router";
import ShowsContextProvider from "../contexts/showContext";

export default {
  title: "Home Page/ShowPageHeader",
  component: ShowsHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ShowsContextProvider>{Story()}</ShowsContextProvider>,
  ],
};

export const Basic = () => <ShowsHeader title="Discover Shows" />;

Basic.storyName = "Default";
