import MovieItem from '../../molecules/MovieItem/MovieItem';
import React, { useState, useEffect } from 'react';
// import Spinner  from '../styles/Spinner'
import axios from 'axios';
// import Search from '../Search'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import { makeStyles } from '@mui/styles';
import Slider from '@mui/material/Slider';

import Modal from '../../molecules/Modal/Modal';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StyledSearchBar from '../../atoms/Search/Search';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import { pink } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import SkeletonItem from '../../molecules/NoResults/SkeletonItem/SkeletonItem';
import NoResults from '../../molecules/NoResults/NoResults';
import YearsRange from '../../molecules/YearsRange/YearsRange';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const Movies = ({ match }) => {
  // let { id } = match.params;

  // const useStyles = makeStyles((theme) => ({
  //
  // }));

  const useStyles = makeStyles(() => ({}));

  // const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [moviegenres, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageGenres, setPageGenres] = useState(1);
  const [expanded, setExpanded] = React.useState(false);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfPagesGenres, setNumberOfPagesGenres] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const MOVIES_API_KEY = process.env.REACT_APP_API_KEY2;

  let selectedCategory = selected.length === 0;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    const { checked, value } = event.currentTarget;
    setSelected((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value),
    );
    // console.log(setSelected);
    console.log(selected);
  };
  useEffect(() => {
    let moviesbygenres;
    const fetchMoviesbyGenres = async () => {
      moviesbygenres = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIES_API_KEY}&with_genres=${selected}&page=${pageGenres}
					`,
      );

      // setNumberOfPagesGenres(moviesbygenres.data.total_pages);
      const findmoviesbygenres = await moviesbygenres.json();
      setMovies(findmoviesbygenres.results);
      setNumberOfPagesGenres(findmoviesbygenres.total_pages);
    };
    // console.log(findmoviesbygenres.data);
    setIsLoading(false);
    // setQuery(findmoviesbygenres.results);
    fetchMoviesbyGenres();
  }, [selected, pageGenres]);
  // console.log(selected);
  const handleChangePageGenres = (pageGenres) => {
    setPageGenres(pageGenres);
    window.scroll(0, 0);
  };

  const handleChangePage = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  useEffect(() => {
    const fetchCategory = async () => {
      let category = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIES_API_KEY}&language=en-US`,
      );
      const moviegenres = await category.json();
      setItems(moviegenres.genres);

      // console.log(moviegenres.genres);
    };
    fetchCategory();
  }, []);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const fetchItems = async () => {
        let result;
        if (query == '') {
          result = await axios(
            `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIES_API_KEY}&language=en-US&page=${page}`,
          );
          console.log(result.data.results);
        } else {
          result = await axios(
            `https://api.themoviedb.org/3/search/movie?api_key=${MOVIES_API_KEY}&language=en-US&query=${query}&page=${page}`,
          );
          console.log(result.data.results);
        }

        setMovies(result.data.results);
        setIsLoading(false);
        console.log(result);
        setNumberOfPages(result.data.total_pages);
        console.log('search bar wynik');
      };

      fetchItems();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [query, page]);

  const listS = 20;

  const [modal, setModal] = useState(0);

  return (
    <section>
      <Box
        sx={{
          m: 2,
          justifyContent: 'center',
        }}
      >
        <Typography variant="p">
          {' '}
          Select several genres of movies you are interested in or just use the
          search.{' '}
        </Typography>
        <StyledSearchBar
          sx={{ color: pink[100] }}
          getQuery={(q) => setQuery(q)}
          // onChange={handleChange}
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
                      fontSize: 20,
                      '&.Mui-checked': {
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
          {/* <YearsSlider /> */}
          {/* <YearPicker /> */}
          {/* <LocalizationProvider>
            <Grid item xs={12} md={6}>
              <YearPicker
                date=2022
                minDate={1920}
                maxDate={02}
                onChange={(newDate) => setDate(newDate)}
              />
            </Grid>
          </LocalizationProvider> */}
          <YearsRange />
        </Collapse>
      </Box>
      <Grid
        container
        spacing={0}
        alignItems="flex-start"
        justifyContent="space-around"
        direction="row"
        minHeight={800}

        // align-items: flex-start;
      >
        {selectedId && <Modal Item={selectedId} />}

        {movies.map((item) => (
          <>
            <MovieItem
              changeModal={(modal) => setModal(modal)}
              sm={3}
              key={item.id}
              item={item}
            ></MovieItem>
          </>
        ))}
        {console.log(movies)}
        <>
          {isLoading && (
            <>
              {[...Array(listS)].map((item, index) => (
                <SkeletonItem key={index} />
              ))}
            </>
          )}
        </>
        {/* {!isLoading && movies.length === 0 && <NoResults />} */}
      </Grid>
      <Stack spacing={2}>
        {selectedCategory ? (
          <Pagination
            pagenumber={numberOfPages}
            // setPage={setPage}
            // page={page}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              minHheight: 'calc(100vh - 10px)',
            }}
            count={numberOfPages}
            color="secondary"
            shape="rounded"
            size="large"
            onChange={(e) => handleChangePage(e.target.textContent)}
            // variant="outlined"
            classes={{
              toolbar: useStyles.toolbar,
              // caption: useStyles.caption,
              // ul: classes.ul,
            }}
            // className={classes.text}
          />
        ) : (
          <Pagination
            pagenumber={numberOfPagesGenres}
            setPage={setPageGenres}
            // page={page}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              // minHheight: 'calc(100vh - 10px)',
            }}
            count={numberOfPagesGenres}
            color="secondary"
            shape="rounded"
            size="large"
            onChange={(e) => handleChangePageGenres(e.target.textContent)}
            // variant="outlined"
            classes={
              {
                // toolbar: classes.toolbar,
                // caption: classes.caption,
                // ul: classes.ul,
              }
            }
            // className={classes.text}
          />
        )}
      </Stack>{' '}
      {/* </Box> */}
      {/* </ItemsGrid> */}
    </section>
  );
};

export default Movies;
