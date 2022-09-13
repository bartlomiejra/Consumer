import { Box, Typography } from '@material-ui/core';
import { pink } from '@mui/material/colors';
import React from 'react';
import Search from '../../atoms/Search/Search';
import { StyledSearchBar } from '../../molecules/ItemsGrid/ItemsGrid.styled';

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
        <StyledSearchBar
          sx={{ color: pink[800] }}
          // getQuery={(q) => setQuery(q)}
        />
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
