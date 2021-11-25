import MovieItem from './MovieItem'
import React, {useState, useEffect} from 'react'
import Spinner  from '../styles/Spinner'
import axios from "axios"
import Search from '../Search'
import StyledSearchBar from '../Search'
import {ItemsGrid, } from '../styles/ItemsGrid.styled.js'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { pink } from '@mui/material/colors';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core'
// import Spinner from '../../img/spin.gif'
import { useMediaQuery } from '@mui/material'

import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material';


const Movies = () => {
	
	const [movies, setMovies] =  useState([])
	const [query, setQuery] =  useState('')
	const [genres, setGenres] =  useState('')
	
	// const [items, setItems] =  useState([])
	const [moviegenres, setItems] =  useState([])
	const [isLoading, setIsLoading] =  useState(true)
	
	useEffect (() => {
		// const handleSubmit = e => {
		//   e.preventDefault();
		//   console.log( "render" );
		//   fetchMoviesbyGenres();
		// }
	},[]);
		const fetchMoviesbyGenres = async( ) => {
				const moviesbygenres = await fetch(
					`https://api.themoviedb.org/3/discover/movie?api_key=f0b539c0e3a06d06f8301d709f2fdf86&with_genres=28`
					)
					
					//  console.log(category.data);
					//  console.log(category);
					
					const findmoviesbygenres = await moviesbygenres.json();
					console.log(findmoviesbygenres.results);
					//  console.log(moviegenres.genres);
					//   setMode(newMode);

					setMovies(findmoviesbygenres.results);
					
				}
				// fetchMoviesbyGenres();
		useEffect (() => {
			const fetchCategory = async( ) => {
				const category = await fetch(
					`https://api.themoviedb.org/3/genre/movie/list?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US`)
					
					//  console.log(category.data);
					//  console.log(category);
					
					const moviegenres = await category.json();
					//  console.log(moviegenres);
					//  console.log(moviegenres.genres);
					setItems(moviegenres.genres);
					
				}
				fetchCategory();
			},[]);
			
			useEffect (() => {
					const fetchItems = async () => {
					
					
								//  const result = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=f0b539c0e3a06d06f8301d709f2fdf86`)
					
				const result = await axios(`https://api.themoviedb.org/3/search/movie?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US&page=1&query=${query}`)
				// const result = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=f0b539c0e3a06d06f8301d709f2fdf86&with_genres=35`)
		

			
				// 		// let category = result.data
				// 	// setItems(result.data.results)
				
				// 	// console.log(result.data.results);
				// 	// setIsLoading(false)
				console.log(result.data.results)
				// console.log(moviegenres)
				setMovies(result.data.results)
				// console.log(movies);
				
			}
			// console.log(movies);
			// console.log(moviesgenres);
			
			fetchItems();
		},[query]);

		
	
return (

<section>
				 
<Box    sx={{

          justifyContent: 'center',
        
        }} >
				 <Typography variant="h3">Movies</Typography>
				
				 <Typography variant="p">				 Select several genres of movies you are interested in or just use the search. 				 </Typography>
<StyledSearchBar
 sx={{   color: pink[800],
 }} getQuery={(q) => setQuery(q)} 


/>
    

{moviegenres.map(item => (
	<>
	
		       <FormControlLabel   control={<Checkbox key={item.id}
			    sx={{
    color: pink[800],
    '&.Mui-checked': {
      color: pink[600],
    },
  }} />} label={item.name} />

	

</>
)
)
}
<Button 
variant="Container"
size="large"
color="secondary" >Uncheck All</Button>
<Button 
onClick={fetchMoviesbyGenres}
variant="contained"
size="large"
color="secondary" >Search</Button>
</Box>
{/* <ItemsGrid> */}

<Box   sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
        }} >

	    <Grid mt="5" md={{ flexGrow: 1 }} container spacing={2}>
	



		 
			

			</Grid>
			</Box>

			{/* </ItemsGrid> */}

		</section>
	)
}

export default Movies;