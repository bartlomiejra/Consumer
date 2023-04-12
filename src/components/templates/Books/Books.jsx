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
import SkeletonItem from '../../molecules/NoResults/SkeletonItem/SkeletonItem';

function Books() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const [books, setBooks] = useState([]);
  const BOOKS_API_KEY = import.meta.env.REACT_APP_NAME
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(query);
      // setSelected([]);
      const fetchItems = async () => {
        let result;
        if (query == '') {
          result = await axios.get(
            `http://openlibrary.org/search.json?title=ring&limit=20
`,
          );
          console.log(result.data.docs);
        } else {
          result = await axios(
            `http://openlibrary.org/search.json?title=${query}`,
          );
          console.log(result.data.docs);
          console.log(query);
        }
        setBooks(result.data.docs);
        setIsLoading(false);

        // setIsLoading(false);
        // setNumberOfPages(result.data.total_pages);
        console.log('search bar wynik');
      };
      fetchItems();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [query, page]);
  let selectedCategory = selected.length === 0;
  const listS = 20;

  return (
    <>
      {console.log(import.meta.env.REACT_APP_NAME2)}
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
          // sx={{ color: pink[800] }}
          getQuery={(q) => setQuery(q)}
        />
      </Box>
      {/* <Stack spacing={2}></Stack>{' '} */}
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="space-around"
        direction="row"
      >
        {books.map((item) => (
          <>
            <>
              <BookItem
                // changeModal={(modal) => setModal(modal)}
                sm={3}
                key={item._version_}
                item={item}
              />
            </>
          </>
        ))}
        <>
          {/* {isLoading && (
            <>
              {[...Array(listS)].map((item, index) => (
                <SkeletonItem key={index} />
              ))}
            </>
          )} */}
        </>
      </Grid>
    </>
  );
}
export default Books;
