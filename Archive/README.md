# Assignment - ReactJS app.

Name: Ian Mullins

## Overview.

The application focus is a TV show adaptation and refactored version of the original movies fan app.

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
- Addition of a login page required to access private routes, Favorites and must watch page

## Setup requirements.

...... A brief explanation (to a third party) of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

- Using the terminal, cd into the project root directory
- Run the npm install command
- Run npm audit fix if a dependancy error occurs
- Run npm start to run the app on localhost

## API Data Model.

Popular Tv Shows

- `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`

![][popularshows]

getUpcomingShows

- `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`

![][getupcomingshows]

getShowImages

- `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`

![][getshowimages]

getShow

- `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=videos,images`

![][getashow]

getSeason

- `https://api.themoviedb.org/3/tv/${id}/season/${season_number}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=videos,images`

![][getseason]

getSimilarShows

- `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=videos,images`

![][getsimilarshows]

getCast

- `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

![][getcast]

getAggregateCredits

- `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

![][getaggregatecredits]

getShowReviews

- `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

![][getshowreviews]

getGenres

- `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`

![][gettvshowgenres]

## App Design.

### Component catalogue.

![][storybook]

### UI Design.

> ![][login]
> Shows login page required for authentication which allows access to private routes.
> ![][popularshows]
> Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.
> ![][popularshows2]
> Clicking the expand icon displays a show release date and a brief synopsis of the show
> Clicking the heart icon adds the show to the list of user favorites in the favorites tab
> ![][similarshows]
> Displays a list of shows which would be considered similar to a specific show
> ![][viewcast]
> Displays the actor name and photo for each actor in the cast
> ![][viewcast2]
> Clicking the expand icon displays the list of roles the actor plays in the show
> ![][viewepisodes]
> List of all episodes for a specific season of a specific tv show.
> ![][viewepisodes2]
> Clicking the expand icon displays the air date and a brief overview of the episode
> ![][viewseasons]
> List of all seasons for a specific show.
> Clicking the tile image will link the user to the episodes for season
> ![][viewseasons2]
> Clicking the expand icon displays a release date and a brief overview of the season
> ![][viewshow]
> Shows detailed information on a Tv show. Clicking the 'Reviews' floating action button will display extracts from critic reviews.
> Selecting one of the blue buttons above will prove additional information about the show

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

Further exploration into material UI framework. Expansion panels used extensively.
Further investigation into use of of parameterized URLs to display show name etc
Initial research into pagination, but not enough time to implement
Deployment of application to netlify https://im-tmdb.netlify.app/

[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png
[popularshows]: ./popularShows.JPG
[getupcomingshows]: ./getUpcomingShows.JPG
[getshowimages]: ./getShowImages.JPG
[getcast]: ./getCast.JPG
[getashow]: ./getaShow.JPG
[getseason]: ./getaSeason.JPG
[getsimilarshows]: ./getSimilarShows.JPG
[getaggregatecredits]: ./getAggregateCredits.JPG
[getshowreviews]: ./getShowReviews.JPG
[gettvshowgenres]: ./getTvShowGenres.JPG
[login]: ./login.JPG
[popularshows]: ./popularshows.JPG
[popularshows2]: ./popularshows2.JPG
[similarshows]: ./similarshows.JPG
[viewcast]: ./viewcast.JPG
[viewcast2]: ./viewcast2.JPG
[viewepisodes]: ./viewepisodes.JPG
[viewepisodes2]: ./viewepisodes2.JPG
[viewseasons]: ./viewseasons.JPG
[viewseasons2]: ./viewseasons2.JPG
[viewshow]: ./viewshow.JPG
[storybook]: ./storybook.JPG
