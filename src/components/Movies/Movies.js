import MovieItem from './MovieItem'
import React, {useState, useEffect} from 'react'
import Spinner  from '../styles/Spinner'
import axios from "axios"
import Search from '../Search'
import {ItemsGrid} from '../styles/ItemsGrid.styled.js'
import Button from '@mui/material/Button';



const Movies = () => {

const [query, setQuery] =  useState(true)
	const [moviegenres, setItems] =  useState([])
	const [movies, setMovies] =  useState([])
	// const [items, setItems] =  useState([])
	const [isLoading, setIsLoading] =  useState(true)
		useEffect (() => {
		const fetchCategory = async( ) => {
			 const category = await fetch(
				 `https://api.themoviedb.org/3/genre/movie/list?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US`
			 )
			 
			 //  console.log(category.data);
			 //  console.log(category);
			 
			 const moviegenres = await category.json();
			//  console.log(moviegenres);
			//  console.log(moviegenres.genres);
			 setItems(moviegenres.genres);
			 
			}},[])
	useEffect (() => {
		const fetchCategory = async( ) => {
			 const category = await fetch(
				 `https://api.themoviedb.org/3/genre/movie/list?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US`
			 )
			 
			 //  console.log(category.data);
			 //  console.log(category);
			 
			 const moviegenres = await category.json();
			//  console.log(moviegenres);
			//  console.log(moviegenres.genres);
			 setItems(moviegenres.genres);
			 
			}
			 
				const fetchItems = async () => {
					
					
						//  const result = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=f0b539c0e3a06d06f8301d709f2fdf86`)
				
				const result = await axios(`https://api.themoviedb.org/3/search/movie?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US&page=1&query=${query}`)
		
		
		
		
				// 		// let category = result.data
		// 	// setItems(result.data.results)
		
		// 	// console.log(result.data.results);
		// 	// setIsLoading(false)
		console.log(result.data.results)
		setMovies(result.data.results)
		console.log(movies);
	}
	// console.log(movies);
	// console.log(moviesgenres);
	
	fetchCategory();
		fetchItems();
	},[]);
	return (
		 <section>
			 <div>
				 <h3> Movies </h3>
				 <p>Select several genres of movies you are interested in or just use the search. </p>
<Search getQuery={(q) => setQuery(q)} />
{moviegenres.map(item => (
	<label >
		<input  key="{item.id}"  type="checkbox"/>
		{item.name}

	</label>


))}				 </div>
<Button variant="contained">Search</Button>

<ItemsGrid>
			{movies.map(item => (
			<>

				<MovieItem key={item.id} item={item} > 
					
				
				</MovieItem>
				           
			</>
			))}
			
			</ItemsGrid>

		</section>
	)
}

export default Movies;