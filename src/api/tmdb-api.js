//-----------------TV SHOWS
//---------------------------
export const getShows = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getShowImages = async ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

//Async await implementation, additional parameters included in query string
export const getUpcomingShows = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getShow = async (args) => {
  console.log(args);
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=videos,images`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getSeason = async (args) => {
  console.log(args);
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id, season_number }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/season/${season_number}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=videos,images`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getSimilarShows = async (args) => {
  console.log(args);
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=videos,images`
  );
  console.log(response);
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getCast = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json.cast);

      return json.cast;
    });
};

export const getCastImages = async ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getShowReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  )
    .then((res) => res.json())
    .then((json) => {
      //console.log(json.results);
      return json.results;
    });
};

export const getGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/tv/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

//-----------------MOVIES
//---------------------------

export const getMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getMovie = async (args) => {
  console.log(args);
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getMovieGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getMovieImages = async ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

//Async await implementation, additional parameters included in query string
export const getUpcoming = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
