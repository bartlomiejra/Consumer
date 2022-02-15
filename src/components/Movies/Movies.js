import MovieItem from "./MovieItem";
import React, { useState, useEffect } from "react";
// import Spinner  from '../styles/Spinner'
import axios from "axios";
// import Search from '../Search'
import Skeleton from "@mui/material/Skeleton";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
import { Item } from "../styles/ItemsGrid.styled";
import makeStyles from "@material-ui/core/styles/makeStyles";

import StyledSearchBar from "../Search";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { pink } from "@mui/material/colors";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import Button from "@mui/material/Button";
// import SearchIcon from '@mui/icons-material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const Movies = () => {
  // 	const useStyles=makeStyles((theme)=>({
  // text:{
  //     color:"#ffffff"
  // }
  // }));

  const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#fff",
      },
    },
  }));

  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [moviegenres, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    const { checked, value } = event.currentTarget;
    setSelected((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value)
    );
    // console.log(setSelected);
    console.log(selected);
  };
  useEffect(() => {}, []);
  const fetchMoviesbyGenres = async () => {
    const moviesbygenres = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=f0b539c0e3a06d06f8301d709f2fdf86&with_genres=${selected}&page=1
					`
    );

    const findmoviesbygenres = await moviesbygenres.json();
    console.log(findmoviesbygenres.results);
    setMovies(findmoviesbygenres.results);
  };
  useEffect(() => {
    const fetchCategory = async () => {
      const category = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US`
      );
      const moviegenres = await category.json();
      setItems(moviegenres.genres);
    };
    fetchCategory();
  }, []);
  useEffect(() => {
    const fetchItems = async () => {
      let result;
      if (query == "") {
        result = await axios(
          `https://api.themoviedb.org/3/movie/popular?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US&page=1`
        );
      } else {
        result = await axios(
          `https://api.themoviedb.org/3/search/movie?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US&query=${query}`
        );
      }
      setMovies(result.data.results);
      setIsLoading(false);
    };
    const timer = setTimeout(() => {}, 10);
    fetchItems();
    return () => clearTimeout(timer);
  }, [query]);
  return (
    <section>
      <Box
        sx={{
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">Movies</Typography>
        <Typography variant="p">
          {" "}
          Select several genres of movies you are interested in or just use the
          search.{" "}
        </Typography>
        <StyledSearchBar
          sx={{ color: pink[800] }}
          getQuery={(q) => setQuery(q)}
        />
        Category
        <ExpandMore
          color="secondary"
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Category"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {moviegenres.map((item) => (
            <>
              <FormControlLabel
                control={
                  <Checkbox
                    key={item.id}
                    value={item.id}
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                onChange={handleChange}
                label={item.name}
              />
            </>
          ))}
          <Button variant="Container" size="large" color="secondary">
            Uncheck All
          </Button>
          <Button
            onClick={fetchMoviesbyGenres}
            variant="contained"
            size="large"
            color="secondary"
          >
            Search
          </Button>
        </Collapse>
      </Box>
      {/* <ItemsGrid> */}

      {/* <Box 
>
justify="center"
// sx={12} 
flexWrap='wrap'
alignItems= "stretch"
// display= 'flex'
sx={{ 
        //   p: 1,
        //   m: 1,
        }}  */}
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="space-around"
        direction="row"
      >
        {/* <Grid mt="5" md={{ flexGrow: 1 }} container spacing={2}> */}

        {movies &&
          movies.map((item) => (
            <>
              <MovieItem sm={3} key={item.id} item={item}></MovieItem>
            </>
          ))}

        {!query && (
          <>
            {/* {isLoading ? skeletonArray.map(item => ( */}
            <Item>
              <Skeleton
                variant="rectangular"
                height={525}
                width={350}
                animation="wave"
                i
                sx={{ bgcolor: "grey.900" }}
              />
            </Item>

            <Item>
              <Skeleton
                variant="rectangular"
                height={525}
                width={350}
                animation="wave"
                i
                sx={{ bgcolor: "grey.900" }}
              />
            </Item>
            <Item>
              <Skeleton
                variant="rectangular"
                height={525}
                width={350}
                animation="wave"
                i
                sx={{ bgcolor: "grey.900" }}
              />
            </Item>
            <Item>
              <Skeleton
                variant="rectangular"
                height={525}
                width={350}
                i
                sx={{ bgcolor: "grey.900" }}
              />
            </Item>
          </>
        )}
        {/* {movies.isloading &&
  skeletonArray.map((item, index) => (
    <Skeleton key={index} variant="rect" width={200} height={300} />
))} */}
      </Grid>

      <Stack spacing={2}>
        <Pagination
          count={10}
          color="secondary"
          classes={{ ul: classes.ul }}
          sx={{ bgcolor: "grey.900" }} // ...
          classes={{
            toolbar: classes.toolbar,
            caption: classes.caption,
          }}
          className={classes.text}
        />
      </Stack>
      {/* </Box> */}

      {/* </ItemsGrid> */}
    </section>
  );
};

export default Movies;
