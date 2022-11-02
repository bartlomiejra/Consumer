import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedCharacters from './AnimatedCharacters';
import { Box, Grid } from '@material-ui/core';
import GlobalStyles from '../../styles/Global';
import { ResultsStyled } from './NoResults.styled';

function NoResults() {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: 'heading1', text: 'No results founds' },
    {
      type: 'heading2',
      text: ' Try searching again.',
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  return (
    // <Grid
    //   alignItems="flex-start"
    //   display="flex"
    //   sx={{
    //     height: '80vw',
    //     display: 'flex',
    //     // alignItems: 'flex-end',
    //     bgcolor: 'background.paper',
    //     borderRadius: 1,
    //   }}
    // >
    <ResultsStyled>
      <motion.div
        initial="hidden"
        // animate="visible"
        animate={replay ? 'visible' : 'hidden'}
        variants={container}

        // justifyContent="center"
        // alignItems="center"
      >
        <div className="container">
          {placeholderText.map((item, index) => {
            return <AnimatedCharacters {...item} key={index} />;
          })}
        </div>
      </motion.div>
    </ResultsStyled>
    // </Grid>
  );
}

export default NoResults;
