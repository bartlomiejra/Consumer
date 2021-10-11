import React from 'react'
import MovieItem from './MovieItem'
import Spinner  from '../styles/Spinner'
const Movies = ({items, isLoading }) => {
	return isLoading ?
	 <Spinner />
	 : 
	 (

		<section className="cards" >
			{items.map(item => (
			<>
				<MovieItem key={item.id} item={item} > 
					
				
				</MovieItem>
				           

			</>
			))}

		</section>
	)
}

export default Movies;