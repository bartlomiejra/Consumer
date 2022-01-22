
import styled from "styled-components";
import SearchBar from "material-ui-search-bar";
import {motion } from "framer-motion";
import {Card} from '@material-ui/core';

export const ItemsGrid = styled.div `
/* background-color: ${({theme}) => theme.colors.header}; */
/* font-size: 10px; */
/* display: flex; */
/* padding:  40px 0  ; */
display: grid;
border-radius: 10px;
grid-template-columns: auto auto auto;


`
export const Item = styled(motion.Card) `
position: relative;
display: flex;
/* width: auto; */
/* display: grid; */
/* height: 30vh; */
/* height: 10px; */
/* display: flex; */
/* max-width: 25%; */
padding: 0px;
/* position:absolute; */

.detals{
  position:absolute;
  color: white;  font-size: 20px;
  /* color: black; */
  z-index: 2;
  height: 100%;
  text-decoration: none;
  


}


`
export const Img = styled(motion.img) `
/* position:absolute; */
/* z-index: -2 */
/* position: relative */
  /* width:auto; */
/* height:auto; */
/* height: 100%;
    width: 100%; */
`
// export const StyledSearchBar = styled(SearchBar)`
//   margin: 0 auto;
//   max-width: 800px;
//   background-color: red;
// `; 
export const Moviedetals = styled.div `
`
export const StyledSearchBar = styled(SearchBar)`
  margin: 0 auto;
  /* max-width: 800px; */
  border-radius: 0px;
 
  /* border-radius: 10px; */
`;