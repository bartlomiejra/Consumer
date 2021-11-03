import React from 'react'
import {Item, Img} from '../styles/ItemsGrid.styled'

 const MovieItem = ({item}) => {
	 console.log(item);
	return (
		<Item>

			{/* {item.id} */}
			{/* {item.name} */}
			 <Img key="{item.id}" src={"https://image.tmdb.org/t/p/w500" + item.poster_path} alt={"logo"}/> 
			
		</Item>
	)
}

export default MovieItem