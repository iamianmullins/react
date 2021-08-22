import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import UpcomingPage from "./pages/upcomingPage";
import HomePage from "./pages/homePage";
import ShowPage from "./pages/showDetailsPage";
import SimilarShowPage from "./pages/similarPage";
import ViewEpisodesPage from "./pages/viewEpisodes";
import SeasonPage from "./pages/seasonPage";
import ViewCastPage from "./pages/viewCast";
import MustWatchPage from "./pages/mustWatchPage";
import FavoriteShowsPage from "./pages/favoriteShowsPage";
import ShowReviewPage from "./pages/showReviewPage";
import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "react-query"; // NEW
import { ReactQueryDevtools } from "react-query/devtools"; // NEW
import ShowsContextProvider from "./contexts/showContext";
import AddShowReviewPage from "./pages/addShowReviewPage";
import "./App.css";
import LoginPage from "./pages/loginPage";
import PrivateRoute from "./privateRoute";
import AuthProvider from "./contexts/authContext";

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
          <AuthProvider>
            <Switch>
              <PrivateRoute
                exact
                path="/reviews/form"
                component={AddShowReviewPage}
              />
              <Route exact path="/shows/upcoming" component={UpcomingPage} />
              <PrivateRoute path="/reviews/:id" component={ShowReviewPage} />
              <Route path="/seasons/:id" component={SeasonPage} />
              <PrivateRoute
                exact
                path="/shows/favorites"
                component={FavoriteShowsPage}
              />
              <Route
                path="/shows/:id/cast/:showName"
                component={ViewCastPage}
              />
              <PrivateRoute
                exact
                path="/shows/mustWatch"
                component={MustWatchPage}
              />
              <Route
                path="/shows/:id/show/:showName/season/:season_number"
                component={ViewEpisodesPage}
              />
              <Route
                path="/shows/:id/similar/:showName"
                component={SimilarShowPage}
              />
              <Route path="/login" component={LoginPage} />

              <Route path="/shows/:id" component={ShowPage} />
              <Route exact path="/" component={HomePage} />
              <Redirect from="*" to="/" />
            </Switch>
          </AuthProvider>
        </ShowsContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
