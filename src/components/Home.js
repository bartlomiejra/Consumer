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
        {/* The best media search finder. */}
        <Box ml={3} mr={3} mb={15}>
          <Typography variant="h5">Top Category </Typography>
          {/* <Typography>
            The purpose of this app is to allow you to search for high quality
            niche media and cultural works. Find great books movies or music
            albums or just browse through the media lists suggested by us.
          </Typography> */}
          <motion.div
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* {[0, 1, 2, 3].map((index) => ( */}
            <Grid container spacing={4} px={{ xs: 2, md: 4, lg: 20 }}>
              <Grid item xs={12} lg={8}>
                <NavLink key={1} className="item" variants={item} to="/Movies">
                  <Item
                    style={{
                      background:
                        'linear-gradient(to right bottom, #222d22, #181818)',
                    }}
                  >
                    <img src="../img/movies.svg" alt="" />
                    Find Movies
                  </Item>
                </NavLink>
              </Grid>
              <Grid item xs={12} lg={4}>
                <NavLink key={2} className="item" variants={item} to="/Music">
                  <Item
                    style={{
                      background:
                        'linear-gradient(to right bottom, #430089, #181818)',
                    }}
                  >
                    Music
                  </Item>
                </NavLink>
              </Grid>
              <Grid item xs={12} lg={4}>
                <NavLink
                  key={3}
                  className="item"
                  variants={item}
                  to="/Moviesfor2"
                >
                  <Item
                    style={{
                      background:
                        'linear-gradient(to left bottom, #181818, #c40491)',
                    }}
                  >
                    Movies For 2
                  </Item>
                </NavLink>
              </Grid>
              <Grid item xs={12} lg={8}>
                <NavLink
                  key={4}
                  className="item"
                  variants={item}
                  to="/Recommendation"
                >
                  <Item
                    style={{
                      background:
                        'linear-gradient(to right bottom, #430089, #fcb045)',
                    }}
                  >
                    Our Recommendation
                  </Item>
                </NavLink>
              </Grid>
            </Grid>
            {/* ))} */}
          </motion.div>
        </Box>
      </div>
      <Img />
    </Flex>
  );
}
export default Home;
