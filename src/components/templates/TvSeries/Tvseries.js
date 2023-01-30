import { pink } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import React from 'react';
import Search from '../../atoms/Search/Search';

function Tvseries() {
  return (
    <>
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
        Category
        {/* <ExpandMore
          color="secondary"
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Category"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </Box>
      <Search />
    </>
  );
}
export default Tvseries;
