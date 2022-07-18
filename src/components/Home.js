import React from 'react';
import { Flex } from './styles/Flex.styled';
import { Img } from './styles/Flex.styled';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
// import movies from 'img/movies.svg';
import MoviesSvg from '../img/movies.svg';
import MusicSvg from '../img/music.svg';
import MovieFor2Svg from '../img/moviefor2.svg';
import OurRecommendationSvg from '../img/top.svg';
import HomeSvg from '../img/homesvg.svg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  border: '2px solid #333333',
  height: '300px',
  borderRadius: '10px',
  // backgroundColor: `#262626`,
  color: '#f1f1f1',
  textAlign: 'bottom',
  fontSize: '2.5rem',
  display: 'flex',
  textDecoration: 'none',
  alignItems: 'flex-end',
}));

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Home() {
  return (
    <Flex>
      <div>
        <Box mb={10} sx={{ height: '95vh' }}>
          <Grid
            container
            spacing={2}
            px={{ xs: 2, md: 4, lg: 20 }}
            sx={{ height: '90vh' }}
          >
            <Grid
              item
              key={0}
              xs={12}
              lg={6}
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  backgroundImage: 'linearGradient(45deg, #f3ec78, #af4261)',
                }}
              >
                The best media search finder.
              </Typography>
              <Typography variant="p" style={{ fontSize: '2rem' }}>
                The purpose of this app is to allow you to search for high
                quality niche media and cultural works. Find great books movies
                or music albums or just browse through the media lists suggested
                by us.
              </Typography>
            </Grid>
            <Grid
              item
              key={0}
              xs={12}
              lg={6}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={HomeSvg} alt="" />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{
              color: '#ffffff',
              display: 'flex',
              position: 'absolute',
              bottom: '5px',
              left: '50%',
              flexDirection: 'column',

              transform: 'translateX(-50%)',
              // display: 'block',
              fontSize: '3rem',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'none',
              border: 'none',
            }}
          >
            <Typography>.scroll down.</Typography>
            <ArrowDownwardIcon
              sx={{
                display: 'flex',
                fontSize: '3rem',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </Button>
        </Box>
        <Box ml={3} mr={3} mb={15}>
          <motion.div
            className="container"
            variants={container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            // animate="visible"
          >
            <Typography
              variant="h5"
              sx={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                textTransform: 'uppercase',
              }}
            >
              Top Category{' '}
            </Typography>
            <Grid container spacing={4} px={{ xs: 2, md: 4, lg: 20 }}>
              <Grid item key={0} xs={12} lg={8}>
                {/* <NavLink className="item" variants={item} to="/Movies"> */}
                <Item
                  style={{
                    background:
                      'linear-gradient(to right bottom, #222d22, #181818)',
                  }}
                >
                  <Typography
                    sx={{
                      position: 'absolute',
                      zIndex: '3',
                    }}
                    variant="h4"
                  >
                    Find Movies
                  </Typography>
                  <img
                    style={{
                      position: 'relative',

                      height: '100%',
                      width: '100%',
                    }}
                    src={MoviesSvg}
                    alt=""
                  />
                </Item>
                {/* </NavLink> */}
              </Grid>
              <Grid item key={1} xs={12} lg={4}>
                {/* <NavLink className="item" variants={item} to="/Music"> */}

                <Item
                  style={{
                    background:
                      'linear-gradient(to right bottom, #430089, #181818)',
                  }}
                >
                  <Typography
                    sx={{ position: 'absolute', zIndex: '3' }}
                    variant="h4"
                  >
                    Music
                  </Typography>
                  <img
                    style={{
                      position: 'relative',
                      height: '100%',
                      width: '100%',
                    }}
                    src={MusicSvg}
                    alt=""
                  />
                </Item>
                {/* </NavLink> */}
              </Grid>
              <Grid key={2} item xs={12} lg={4}>
                {/* <NavLink className="item" variants={item} to="/Moviesfor2"> */}
                <Item
                  style={{
                    background:
                      'linear-gradient(to left bottom, #fdfdfd, #444444)',
                  }}
                >
                  <Typography
                    sx={{ position: 'absolute', zIndex: '3' }}
                    variant="h4"
                  >
                    Movies For 2
                  </Typography>
                  <img
                    style={{
                      position: 'relative',
                      rotate: '120deg',
                      transform: 'rotate(10deg)',

                      // right: '125px',
                      top: '-22px',
                      height: '100%',
                      width: '100%',
                      padding: '10px',
                    }}
                    src={MovieFor2Svg}
                    alt=""
                  />
                </Item>
                {/* </NavLink> */}
              </Grid>
              <Grid item xs={12} lg={8} key={3}>
                {/* <NavLink className="item " variants={item} to="/Recommendation"> */}
                <Item
                  style={{
                    background:
                      'linear-gradient(to right bottom,  #444abc, #000000)',
                  }}
                >
                  <Typography
                    sx={{ position: 'absolute', zIndex: '3' }}
                    variant="h4"
                  >
                    Our Recommendation
                  </Typography>
                  <img
                    style={{
                      position: 'relative',
                      // right: '200px',
                      height: '100%',
                      width: '100%',
                    }}
                    src={OurRecommendationSvg}
                    alt=""
                  />
                </Item>
                {/* </NavLink> */}
              </Grid>
            </Grid>
          </motion.div>
        </Box>
      </div>
      <Img />
    </Flex>
  );
}
export default Home;
