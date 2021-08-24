# Assignment - ReactJS app.

Name: Ian Mullins

## Overview.

The application focus is a TV show adaptation and refactored version of the original movies fan app.

...... A bullet-point list of user features. If it's the Movies Fan app extension, only list new/modified features......

- Refactoring of the original movies to page to display popular TV shows
- Refactoring of the original movies to page to display TV shows airing today
- UI updates and improvements with dark mode style theme
- Filter and search UI updates
- Refactoring of original movie details page to display tv show details with top cast list and new sub menu
- Refactoring of the reviews list to display TV reviews
- Implementation of tv show Cast page to display image or each actor, rating and role in tv show
- Implementation of View all seasons Page displaying season poster, season name and release date
- Integration of episode list page which displayes episode poster, episode name and first air date
- Implementation of "View similar shows" page
- Addition of basic authentication, public and private routing
- Implementation of parameterized usl's
- Addition of a login page reqiored to access private routes, Favorites and must watch page

## Setup requirements.

...... A brief explanation (to a third party) of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

- Using the terminal, cd into the project root directory
- Run the npm install command
- Run npm audit fix if a dependancy error occurs
- Run npm start to run the app on localhost

## API Data Model.

..... [For non-Movies Fan app] Insert a diagram of the API's data model (see example below) AND/OR a sample(s) of the JSON documents returned by its endpoints ........

![][model]

......[For the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........

- Popular Tv Shows
- `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ![][popularshows]

- getUpcomingShows
- `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ![][getupcomingshows]

- getShowImages
- `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ![][getshowimages]

- getShow
- `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=videos,images`
  ![][getashow]

- getSeason
- `https://api.themoviedb.org/3/tv/${id}/season/${season_number}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=videos,images`
  ![][getseason]

- getSimilarShows
- `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=videos,images`
  ![][getsimilarshows]

- getCast
- `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ![][getcast]

- getAggregateCredits
- `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ![][getaggregatecredits]

- getShowReviews
- `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ![][getshowreviews]

- getGenres
- `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ![][gettvshowgenres]

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![][view]

> Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] .........

- GET /shows/upcoming - gets tv shows airing today
- GET / - Displays popular tv shows
- GET /shows/:id Displays a specific tv show
- GET /shows/:id/similar/:showName - Displays shows similar to a specific tv show
- GET /seasons/:id - Displays all seasons for a specific show
- GET /shows/:id/show/:showName/season/:season_number - Displays all episodes of a specific season for a particular show
- GET /shows/:id/cast/:showName - Displays complete cast for a tv show
- GET /login - Login page for authentication to access private routes
- GET /shows/mustWatch -(protected) Must watch page, shows that have been added as must watch
- GET /shows/favorites -(protected) Favorites page, shows that have been added as favorite
- GET /reviews/form -(protected) Displays review form

## Independent learning (If relevant).

....... Briefly state any technologies/techniques used in your project codebase that was not covered in the lectures/labs. Provide source code filename (source code excerpts are not required in most cases) references to support your assertions and include references (articles/blogs) .........

[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png
[popularshows]: ./popularshows.jpg
[getupcomingshows]: ./getupcomingshows.jpg
[getshowimages]: ./getshowimages.jpg
[getashow]: ./getashow.jpg
[getseason]: ./getseason.jpg
[getsimilarshows]: ./getsimilarshows.jpg
[getaggregatecredits]: ./getaggregatecredits.jpg
[getshowreviews]: ./getshowreviews.jpg
[gettvshowgenres]: ./gettvshowgenres.jpg
