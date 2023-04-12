import { CardContent, Grid } from '@mui/material';
import React, { useState } from 'react';
import { Item, Img } from '../ItemsGrid/ItemsGrid.styled';
import { motion, AnimatePresence } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Modal from '../Modal/Modal';

import {
  Button,
  Card,
  ButtonGroup,
  Box,
  Typography,
  Rating,
} from '@mui/material';
import Link from '@mui/material/Link';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ClearIcon from '@mui/icons-material/Clear';

const BookItem = ({ setSelectedId, item }) => {
  const [value, setValue] = useState(0);
  const [isToggled, setToggled] = useState(1);
  const [isOpenModal, setOpenModal] = useState(1);

  let image;

  function handlerimage() {
    if (item.isbn !== undefined) {
      image = item.isbn[0];
    } else {
      image = '1';
    }
  }
  handlerimage();

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
  const handleModal = () => {
    setOpenModal(item.id);
    // console.log(isOpenModal);
  };
  return (
    <AnimatePresence>
      {/* <Modal isToggled={isToggled}>
              </Modal> */}

      {isToggled && (
        <Item
          // onClick={(event) =>
          // onClick={handleModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ x: -300, opacity: 0 }}
          spacing={1}
          height="750px"
          width="500px"
          sx={{ bgcolor: 'Red' }}
          onError={(e) =>
            (e.target.onError = null)(
              (e.target.src =
                'https://authors.bookfunnel.com/wp-content/uploads/2017/02/Soothing_Clouds.jpg'),
            )
          }
        >
          {/* {console.log(image)} */}
          {image == '1' ? (
            <Img
              // alt={item.title}
              height="750px"
              width="500px"
              border="1px"
              // width="500px"
              // alt={item.title}"OL27448W
              src="https://authors.bookfunnel.com/wp-content/uploads/2017/02/Soothing_Clouds.jpg"
              onError={(e) =>
                (e.target.onError = null)(
                  (e.target.src =
                    'https://www.hachetteschools.co.uk/wp-content/uploads/2018/07/missingbook.png'),
                )
              }
            


            />
          ) : (
            <Img
              // src={item.volumeInfo.imageLinks.thumbnailii}
              // alt={item.title}
              // height="750px"
              // width="500px"
              // width="500px"
              // alt={item.title}"OL27448W
              height="750px"
              width="500px"
              src={`https://covers.openlibrary.org/b/isbn/${image}-L.jpg`}
              // scr={covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,}
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
          >
            {/* <Button>X</Button> */}
            {/* {console.log(item.volumeInfo)} */}
            <Box>
              <motion.h3 variants={slashMotion}>{item.title}</motion.h3>
              <Typography>Autor: {item.author_name}</Typography>

              <Typography>Description: {item.first_sentence}</Typography>
              <Typography>Publish: {image.first_publish_year}</Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* <Typography>{item.genre_names}</Typography> */}
                <Rating
                  name="simple-controlled"
                  // value={item.volumeInfo.averageRating}
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
                  {/* {item.vote_average} */}
                </Typography>
              </Box>
              <Typography
                sx={{
                  overflowY: 'scroll',
                  maxHeight: '200px',
                }}
              ></Typography>
              {/* <Typography>{moviegenres}</Typography> */}
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
                {/* {console.log(image)} */}
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
                    // href={item.volumeInfo.previewLink}
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
          {/* {console.log(setSelectedId)} */}
          {/* console.log(item) */}
        </Item>
      )}
    </AnimatePresence>
  );
};

export default BookItem;
