import React from 'react'
import {Item, Img} from '../styles/ItemsGrid.styled'

 const MovieItem = ({item}) => {
	 console.log(item);
//if poster_path is not null render this image if true when foto not found image

	
		
	 return (
		 <>

		 <Item>
			 {item.poster_path ?
			  <Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}/> 
			  : 
<Img src={`https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg`} alt={item.title}

/> 			  
			  
			  
			  }
			  <div className="detals">

				 <h3>{item.title}</h3>
				 <p>{item.release_date}</p>
				 <p>{item.overview}</p>
			  </div>
		 </Item>
		 </>
	 )
}

export default MovieItem