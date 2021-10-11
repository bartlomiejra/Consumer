import React from 'react'

 const MovieItem = ({item}) => {
	 console.log(item);
	return (
		<div class="item">
			{item.id}
			{item.name}
			 <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} alt={"logo"}/> 
			
		</div>
	)
}

export default MovieItem