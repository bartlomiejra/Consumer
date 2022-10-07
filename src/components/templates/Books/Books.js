import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
import { Box, Pagination } from '@mui/material';
import React from 'react';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import StyledSearchBar from '../../atoms/Search/Search';
import { useState, useEffect } from 'react';

function Books() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState([]);

  let selectedCategory = selected.length === 0;

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
          Select several genres of books you are interested in or just use the
          search.{' '}
        </Typography>
        <StyledSearchBar
          sx={{ color: pink[800] }}
          getQuery={(q) => setQuery(q)}
        />
      </Box>
      <Stack spacing={2}>
        {selectedCategory ? (
          <Pagination
            // pagenumber={numberOfPages}
            // setPage={setPage}
            // page={page}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              // minHheight: 'calc(100vh - 10px)',
            }}
            // count={numberOfPages}
            color="secondary"
            shape="rounded"
            size="large"
            // onChange={(e) => handleChangePage(e.target.textContent)}
            // variant="outlined"
            classes={
              {
                // toolbar: useStyles.toolbar,
                // caption: useStyles.caption,
                // ul: classes.ul,
              }
            }
            // className={classes.text}
          />
        ) : (
          <Pagination
            // pagenumber={numberOfPagesGenres}
            // setPage={setPageGenres}
            // page={page}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              // minHheight: 'calc(100vh - 10px)',
            }}
            // count={numberOfPagesGenres}
            color="secondary"
            shape="rounded"
            size="large"
            // onChange={(e) => handleChangePageGenres(e.target.textContent)}
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
    </>
  );
}
export default Books;
