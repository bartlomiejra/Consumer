/* eslint react/prop-types: 0 */

//  eslint-disable jsx-a11y/no-autofocus
import { Divider, Stack, styled } from '@mui/material';
import React, { useState } from 'react';
import { Item, Img } from '../ItemsGrid/ItemsGrid.styled';
import { motion, AnimatePresence } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Modal from '../../molecules/Modal/Modal';

import Paper from '@mui/material/Paper';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button, ButtonGroup, Box, Typography, Rating } from '@mui/material';
import Link from '@mui/material/Link';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ClearIcon from '@mui/icons-material/Clear';
const GenreItem = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f12392',
  padding: theme.spacing(1),
  textAlign: 'center',
  fontSize: 10,
}));

const MovieItem = ({ setSelectedId, item, poster_path }) => {
  const [isToggled, setToggled] = useState(1);
  const [isOpenModal, setOpenModal] = useState(1);
  let set;
  const MoviesGenres = {
    genres: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 16, name: 'Animation' },
      { id: 35, name: 'Comedy' },
      { id: 80, name: 'Crime' },
      { id: 99, name: 'Documentary' },
      { id: 18, name: 'Drama' },
      { id: 10751, name: 'Family' },
      { id: 14, name: 'Fantasy' },
      { id: 36, name: 'History' },
      { id: 27, name: 'Horror' },
      { id: 10402, name: 'Music' },
      { id: 9648, name: 'Mystery' },
      { id: 10749, name: 'Romance' },
      { id: 878, name: 'Science Fiction' },
      { id: 10770, name: 'TV Movie' },
      { id: 53, name: 'Thriller' },
      { id: 10752, name: 'War' },
      { id: 37, name: 'Western' },
    ],
  };

  const textMotion = {
    rest: {
      color: 'grey',
      x: 0,
      opacity: 0,
      animate: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      },

      transition: {
        duration: 2,
        type: 'tween',
        ease: 'easeIn',
      },
    },
    hover: {
      color: 'blue',
      opacity: 1,
      x: 30,
      transition: {
        duration: 0.4,
        type: 'tween',
        ease: 'easeOut',
      },
    },
  };
  let arr;
  const slashMotion = {
    rest: {
      opacity: 0,

      ease: 'easeOut',
      duration: 0.2,
      type: 'tween',
    },
    hover: {
      color: 'blue',
      opacity: 0.3,
      transition: {
        duration: 0.1,
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };
  const handleModal = () => {
    setOpenModal(item.id);
  };
  set = new Set(item.genre_ids);
  arr = MoviesGenres.genres.filter((ite) => set.has(ite.id));

  return (
    <AnimatePresence>
      {/* <Modal isToggled={isToggled}>
              </Modal> */}

      {isToggled && (
        <Item
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ x: -300, opacity: 0 }}
          spacing={1}
          style={{ position: 'relative' }}
        >
          {item.poster_path ? (
            <Img
              fetchpriority="high"
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title}
            />
          ) : (
            <Img
              fetchpriority="high"
              src={`https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg`}
              height="750px"
              width="500px"
              alt={item.title}
            />
          )}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            animate={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            }}
            className="detals"
            variants={textMotion}
            style={{ position: 'absolute' }}
          >
            {/* <Button>X</Button> */}
            {/* {item.id} */}

            <motion.h3 variants={slashMotion}>{item.title}</motion.h3>

            <Box>
              {item.release_date.slice(0, 4)}
              {/* {console.log(item)} */}

              <Stack
                direction="row"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
              >
                {arr.slice(0, 4).map((item, index) => {
                  return <GenreItem>{item.name}</GenreItem>;
                })}
              </Stack>
              <Box
                sx={{
                  display: 'flex',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
              >
                {item.genre_names}
                <Rating
                  name="simple-controlled"
                  value={item.vote_average}
                  max={10}
                  precision={0.5}
                  sx={{ borderColor: '#f5f5f5', color: '#c40491' }}
                  readOnly
                  icon={<StarIcon />}
                  emptyIcon={
                    <StarBorderIcon
                      style={{
                        opacity: 0.9,
                        color: '#c40491',
                      }}
                    />
                  }
                />

                <Typography
                  sx={{
                    color: '#d40491',
                    fontWeight: '900',
                    fontSize: '1.3rem',
                  }}
                >
                  {item.vote_average}
                </Typography>
              </Box>
              <Link
                href={`https://www.justwatch.com/ca/movie/${item.title.replaceAll(
                  ' ',
                  '-',
                )}`}
                target="_blank"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#fbc500',
                  color: '#000',
                  textDecoration: 'none',
                  padding: '8px',
                  borderRadius: '10px',
                  m: 2,
                }}
              >
                <PlayArrowIcon /> JustWatch{' '}
              </Link>
              {item.overview}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '& > *': {
                    m: 1,
                  },
                }}
              >
                <ButtonGroup
                  variant="contained"
                  size="large"
                  aria-label="outlined primary button group"
                >
                  <Button
                    aria-label="Favorite"
                    sx={{ borderColor: '#444444' }}
                    variant="contained"
                    size="large"
                    fontSize="1.5rem"
                    style={{
                      border: 'none',
                      color: '#ffffff',
                      background: '#444444',
                    }}
                  >
                    <FavoriteIcon />
                  </Button>

                  <Link
                    description="MoreInfo"
                    href={`https://duckduckgo.com/?q=${
                      item.title
                    }${' '}${item.release_date.slice(0, 4)}`}
                    sx={{
                      textDecoration: 'none',
                      fontWeight: '900',
                      fontSize: '1rem',
                    }}
                    size="large"
                    // component="button"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      background: '#cd388c',

                      padding: '10px',
                      m: 2,
                    }}
                    target="_blank"
                  >
                    More info
                  </Link>
                  <Button
                    aria-label="Clear"
                    onClick={() => setToggled(!isToggled)}
                    sx={{ borderColor: '#444444' }}
                    variant="contained"
                    size="large"
                    style={{
                      color: '#ffffff',
                      // border-color: '#cd388c'
                      background: '#444444',
                    }}
                  >
                    <ClearIcon />
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          </motion.div>
        </Item>
      )}
    </AnimatePresence>
  );
};

export default MovieItem;
