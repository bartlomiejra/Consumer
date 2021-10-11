import React, {useState, useEffect} from 'react'
import axios from "axios"


export default function Categories() {
	const [items, setItems] =  useState([])
	const [isLoading, setIsLoading] =  useState(true)

	useEffect (() => {
	},[])
		const fetchMovie = async () => {
			// const result = await axios(`https://swapi.dev/api/planets

			// `)
			const result = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US`)



			// let category = result.data
			setItems(result.data.genres)
			console.log(result.data.genres)
			console.log(result.data.results)
			// console.log(result.data.results);
			setIsLoading(false)
		}

		// fetchMovie();
	
	return (
		<>
		<div items={items}>
			 
			 
  {items.map(item =>(
	  <>
	      

	<div key={item.id}>  <input key={item.id} type="checkbox" />{item.name}</div>
	</>
))} 

			  {/* console.log(items); */}

          
			
		</div>
</>	)
}
