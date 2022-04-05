import MovieItem from './MovieItem';
import React, { useState, useEffect } from 'react';
// import Spinner  from '../styles/Spinner'
import axios from 'axios';
// import Search from '../Search'
import Skeleton from '@mui/material/Skeleton';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import { Item } from '../styles/ItemsGrid.styled';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Stack from '@mui/material/Stack';
import StyledSearchBar from '../Search';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { pink } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
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
  let { id } = match.params;

  // 	const useStyles=makeStyles((theme)=>({
  // text:{
  //     color:"#ffffff"
  // }
  // }));

  const useStyles = makeStyles(() => ({
    ul: {
      '& .MuiPaginationItem-root': {
        color: '#fff',
      },
    },
  }));

  const classes = useStyles();
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
        `https://api.themoviedb.org/3/discover/movie?api_key=f0b539c0e3a06d06f8301d709f2fdf86&with_genres=${selected}&page=${pageGenres}
					`,
      );
      console.log('po kategoriach fecz');

      // setNumberOfPagesGenres(moviesbygenres.data.total_pages);
      const findmoviesbygenres = await moviesbygenres.json();
      setMovies(findmoviesbygenres.results);
      console.log(moviesbygenres.data);
      console.log(findmoviesbygenres.total_pages);
      setNumberOfPagesGenres(findmoviesbygenres.total_pages);
    };
    // console.log(findmoviesbygenres.data);
    console.log(moviesbygenres);
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
        `https://api.themoviedb.org/3/genre/movie/list?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US`,
      );
      const moviegenres = await category.json();
      setItems(moviegenres.genres);

      console.log(moviegenres.genres);
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(query);
      // setSelected([]);
      // handleChange([]);
      const fetchItems = async () => {
        let result;
        if (query == '') {
          result = await axios(
            `https://api.themoviedb.org/3/movie/popular?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US&page=${page}`,
          );
        } else {
          result = await axios(
            `https://api.themoviedb.org/3/search/movie?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US&query=${query}&page=${page}`,
          );
        }
        setMovies(result.data.results);
        setIsLoading(false);
        setNumberOfPages(result.data.total_pages);
        console.log('search bar wynik');
      };
      fetchItems();
    }, 3000);
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
        {/* <Typography variant="h3">Movies</Typography>
            count={3}
             */}
        <Typography variant="p">
          {' '}
          Select several genres of movies you are interested in or just use the
          search.{' '}
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
        </Collapse>
      </Box>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="space-around"
        direction="row"
      >
        {selectedId && <Modal Item={selectedId} />}

        {/* <Grid mt="5" md={{ flexGrow: 1 }} container spacing={2}> */}
        {movies.map((item) => (
          <>
          {modal}
            <MovieItem
              changeModal={(modal) => setModal(modal)}
              sm={3}
              key={item.id}
              item={item}

              // onClick={() => setSelectedId(1)}
            ></MovieItem>
          </>
        ))}
        {/* {!query && ( */}
        <>
          {[...Array(listS)].map((item, index) => (
            <Item>
              <Stack
                variant="rectangular"
                height={525}
                width={350}
                sx={{ bgcolor: 'grey.900', borderRadius: '10px' }}
              >
                <Box className="detals">
                  <Skeleton
                    margin="1rem"
                    variant="rectangular"
                    height={30}
                    width={200}
                    animation="wave"
                    sx={{ borderRadius: '5px' }}
                  />

                  <Box height={300} margin={0}>
                    <Skeleton
                      borderRadius="10px"
                      width={36.55}
                      variant="rectangular"
                      height={19}
                      animation="wave"
                      sx={{ marginTop: '5px', borderRadius: '5px' }}
                    />
                    <Skeleton
                      sx={{ marginTop: '5px', borderRadius: '5px' }}
                      borderRadius="10px"
                      variant="rectangular"
                      width={320}
                      animation="wave"
                      height={31}
                    />
                    <Skeleton
                      sx={{ marginTop: '5px', borderRadius: '5px' }}
                      width={330}
                      height={180}
                      animation="wave"
                      variant="rectangular"
                    />
                    {/* {//opis} */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Skeleton
                        width={230}
                        animation="wave"
                        sx={{ marginTop: '5px', borderRadius: '5px' }}
                        height={44}
                        variant="rectangular"
                      />
                    </Box>
                  </Box>
                </Box>
              </Stack>
            </Item>
          ))}
        </>
        {/* )} */}
        {/* {movies.isloading &&
  skeletonArray.map((item, index) => (
    <Skeleton key={index} variant="rect" width={200} height={300} />
))} */}
      </Grid>
      <Stack spacing={2}>
        {selectedCategory ? (
          <Pagination
            pageNumber={numberOfPages}
            setPage={setPage}
            // page={page}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              // minHheight: 'calc(100vh - 10px)',
            }}
            count={numberOfPages}
            color="secondary"
            shape="rounded"
            size="large"
            onChange={(e) => handleChangePage(e.target.textContent)}
            // variant="outlined"
            classes={{
              toolbar: classes.toolbar,
              caption: classes.caption,
              ul: classes.ul,
            }}
            className={classes.text}
          />
        ) : (
          <Pagination
            pageNumber={numberOfPagesGenres}
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
            classes={{
              toolbar: classes.toolbar,
              caption: classes.caption,
              ul: classes.ul,
            }}
            className={classes.text}
          />
        )}
      </Stack>
      {/* </Box> */}
      {/* </ItemsGrid> */}
    </section>
  );
};

export default Movies;
