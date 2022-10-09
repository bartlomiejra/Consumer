import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
import { Box, Grid, Pagination } from '@mui/material';
import React from 'react';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import StyledSearchBar from '../../atoms/Search/Search';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieItem from '../../molecules/MovieItem/MovieItem';
import BookItem from '../../molecules/BookItem/BookItem';

function Books() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(query);
      // setSelected([]);
      // handleChange([]);
      const fetchItems = async () => {
        let result;
        if (query == '') {
          result = await axios(
            `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=AIzaSyBmcicaOqljtfLOj9n6mWOJRJTfe9Vj1SI`,
          );
          console.log(result.data.items);
        } else {
          result = await axios(
            `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=AIzaSyBmcicaOqljtfLOj9n6mWOJRJTfe9Vj1SI`,
          );
          console.log(result.data.items);
          console.log(query);
        }
        setBooks(result.data.items);
        // setIsLoading(false);
        // setNumberOfPages(result.data.total_pages);
        console.log('search bar wynik');
      };
      fetchItems();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [query, page]);

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
      <Stack spacing={2}></Stack>{' '}
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="space-around"
        direction="row"
      >
        {books.map((item) => (
          <BookItem
            // changeModal={(modal) => setModal(modal)}
            sm={3}
            key={item.id}
            item={item}
          >
            {console.log(item.volumeInfo.description)}
            <Typography variant="p"> OK </Typography>
            {/* <MovieItem sm={3} key={item.id} item={item}></MovieItem> */}
          </BookItem>
        ))}
      </Grid>
    </>
  );
}
export default Books;
