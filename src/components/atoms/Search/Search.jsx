import InputBase from '@mui/material/InputBase';
import SearchBars from '@mkyy/mui-search-bar';
import { pink } from '@mui/material/colors';

import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Input, InputLabel, TextField } from '@mui/material';
import { InputOutlined } from '@mui/icons-material';

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// const SearchBar = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <form>
      <TextField
        onChange={(newValue) => getQuery(newValue)}
        // type="text"
        // value={text}
        sx={{ color: pink[100], background: '#fff' }}
        sx={{ width: 0.95 }}
        id="search-bar"
        className="text"
        // onInput={(e) => {}}
        label="Search"
        variant="filled"
        placeholder="Search..."
        size="xxl"
      ></TextField>
    </form>
  );
};

export default Search;
