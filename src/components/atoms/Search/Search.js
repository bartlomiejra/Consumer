/* eslint react/prop-types: 0 */

import React, { useState } from 'react';
import { StyledSearchBar } from '../../molecules/ItemsGrid/ItemsGrid.styled';
// import SearchBar from 'material-ui-search-bar';
import { TextField } from '@material-ui/core';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <>
      <TextField
        // label="Outlined secondary"
        color="secondary"
        focused
        // className="search"
        // value={text}
        // onChange={(newValue) => onChange(newValue)}
        onChange={(newValue) => getQuery(newValue)}
      />
      {console.log(text)}
    </>
  );
};

export default Search;
