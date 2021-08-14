import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import UpcomingPage from "./pages/upcomingPage";
import HomePage from "./pages/homePage";
import ShowPage from "./pages/showDetailsPage";
import MustWatchPage from "./pages/mustWatchPage";
import FavoriteShowsPage from "./pages/favoriteShowsPage";
import ShowReviewPage from "./pages/showReviewPage";
import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "react-query"; // NEW
import { ReactQueryDevtools } from "react-query/devtools"; // NEW
import ShowsContextProvider from "./contexts/showContext";
import AddShowReviewPage from "./pages/addShowReviewPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <ShowsContextProvider>
          <Switch>
            <Route exact path="/reviews/form" component={AddShowReviewPage} />
            <Route exact path="/shows/upcoming" component={UpcomingPage} />
            <Route path="/reviews/:id" component={ShowReviewPage} />
            <Route
              exact
              path="/shows/favorites"
              component={FavoriteShowsPage}
            />
            <Route exact path="/shows/mustWatch" component={MustWatchPage} />
            <Route path="/shows/:id" component={ShowPage} />
            <Route exact path="/" component={HomePage} />

            <Redirect from="*" to="/" />
          </Switch>
        </ShowsContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
