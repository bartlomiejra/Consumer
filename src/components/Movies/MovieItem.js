/* eslint react/prop-types: 0 */

//  eslint-disable jsx-a11y/no-autofocus
// import { CardContent, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { Item, Img } from '../styles/ItemsGrid.styled';
import { motion, AnimatePresence } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Modal from './Modal.js';

import {
  Button,
  Card,
  ButtonGroup,
  Box,
  Typography,
  Rating,
} from '@mui/material';
// import Skeleton from '@mui/material/Skeleton';
import Link from '@mui/material/Link';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ClearIcon from '@mui/icons-material/Clear';
// const animationhover = {
//   visible: { opacity: 1, x: 0 },
//   hidden: { opacity: 0, x: -100 },
// };

const MovieItem = ({ item }) => {
  const [value, setValue] = useState(0);
  const [isToggled, setToggled] = useState(1);

  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delayChildren: 0.5,
  //     },
  //   },
  // };
  // const rowSkeletons = 6;
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

  return (
    <AnimatePresence>
      <Modal isToggled={isToggled}>
        {isToggled && (
          <Item
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ x: -300, opacity: 0 }}
            spacing={1}
          >
            {item.poster_path ? (
              <Img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
              />
            ) : (
              <Img
                src={`https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg`}
                height="750px"
                width="500px"
                alt={item.title}
              />
            )}
            <motion.div
              // initial="rest"
              // whileHover="hover,
              // // backgroundColor: 'rgba(0, 0, 0, 0.8)',"
              // animate="rest "

              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              animate={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
              }}
              className="detals"
              variants={textMotion}
            >
              <motion.h3 variants={slashMotion}>{item.title}</motion.h3>
              <Box>
                <motion.Typography>
                  {item.release_date.slice(0, 4)}
                </motion.Typography>
                {console.log(item)}
                <Box
                  sx={{
                    display: 'flex',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography>{item.genre_names}</Typography>
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
                <Typography>{item.overview}</Typography>
                {/* <Typography>{moviegenres}</Typography> */}
                {/* {console.log(moviegenres)} */}

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

            {/* console.log(item) */}
          </Item>
        )}
      </Modal>
    </AnimatePresence>
  );
};

export default MovieItem;
