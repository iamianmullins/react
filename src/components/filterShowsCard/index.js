import React from "react"; // useState/useEffect redundant
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import grey from "@material-ui/core/colors/grey";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  select: {
    color: grey[50],
  },
  paper: {
    textAlign: "center",
    color: grey[50],
    backgroundColor: grey[900],
    width: "100%",
    margin: theme.spacing(2),
    height: "120px",
    padding: "0px",
  },
}));

export default function FilterShowsCard(props) {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;

  //Causing duplicate entries in genre list
  genres.unshift({ id: "0", name: "All" });

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            {" "}
            <FormControl className={classes.margin}>
              <Typography className={classes.text} variant="h5" gutterBottom>
                Search
              </Typography>
              <BootstrapInput
                style={{
                  minWidth: 400,
                  minHeight: "45px",
                }}
                id="filled-search"
                label="Search field"
                type="search"
                value={props.titleFilter}
                variant="filled"
                onChange={handleTextChange}
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            {" "}
            <FormControl className={classes.margin}>
              <Typography className={classes.text} variant="h5" gutterBottom>
                Genre
              </Typography>
              <Select
                style={{
                  minWidth: 400,
                  backgroundColor: grey[50],
                  color: grey[900],
                  "border-radius": "5px",
                  minHeight: "45px",
                }}
                className={classes.select}
                labelId="genre-label"
                id="genre-select"
                value={props.genreFilter}
                onChange={handleGenreChange}
                width="250px"
              >
                {genres.map((genre) => {
                  return (
                    <MenuItem key={genre.id} value={genre.id}>
                      {genre.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
