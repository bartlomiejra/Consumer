import MovieItem from './MovieItem'
import React, {useState, useEffect} from 'react'
import Spinner  from '../styles/Spinner'
import axios from "axios"
import Search from '../Search'



const Movies = () => {

const [query, setQuery] =  useState(true)
	const [category, setItems] =  useState([])
	// const [items, setItems] =  useState([])
	const [isLoading, setIsLoading] =  useState(true)
	useEffect (() => {
		const fetchCategory = async( ) => {
			 const category = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US`)

			 console.log(category.data.genres);
			}
			fetchCategory();
			

		// 	const fetchItems = async () => {

			
		// 		// const result = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=f0b539c0e3a06d06f8301d709f2fdf86`)

		// 		const result = await axios(`https://api.themoviedb.org/3/search/movie?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US&page=1&query=${query}`)
			
				


		// 		// let category = result.data
		// 	// setItems(result.data.results)
			
		// 	// console.log(result.data.results);
		// 	// setIsLoading(false)
		// }
		
		setItems(category.data);

		// fetchItems();
	},[query])
	return (
		 <section>
				 <Search/>
			 <div>
				 {category.map(category => (
					 <h1>{category}</h1>
				 ))}
				 </div>
			{/* {items.map(item => (
			<>
				<MovieItem key={item.id} item={item} > 
					
				
				</MovieItem>
				           

			</>
			) */}
			

		</section>
	)
}

export default Movies;