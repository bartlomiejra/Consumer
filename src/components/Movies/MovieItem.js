/* eslint react/prop-types: 0 */

//  eslint-disable jsx-a11y/no-autofocus
import {Grid } from '@material-ui/core';
import React from 'react'
import {Item, Img} from '../styles/ItemsGrid.styled'
import { motion, AnimatePresence } from "framer-motion"
import {Button, Card} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';

// import FavoriteIcon from '@mui/icons-material/Favorite';
 const MovieItem = ({item}) => {
	//  console.log(item);
//if poster_path is not null render this image if true when foto not found image

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
		delayChildren: 0.5
    }
  }
}

	 return (
		 <Item  
			   >
			 {item.poster_path ?
			  <Img   src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}/> 
			  : 
<Img src={`https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg`}  height='750px' width='500px' alt={item.title}
/> 			  
			  }
			  <motion.div
			  initial={{ opacity: 0}}
			  whileHover={{ opacity: 1.2 }}
			  			  animate={{
    x: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  }}
			   className="detals">
				 <motion.p 
		  whileHover={{ opacity: 0.8,
		  }}
		  variants={container}

				>{item.genre_ids}</motion.p>
				 <h3>{item.title}</h3>
				 <p>{item.release_date}</p>
			 <p>{item.vote_average }</p>
				 <p>{item.overview}</p>
				 <a href={`https://www.moviefone.com/${item.title}`}>
				 <Button sx={{ borderColor: '#c40491' }} variant="contained"  size="large" style= {{
                       color: '#CD388C'
					   
                      }}
					  >More info</Button>
					  </a>
					  <Button sx={{ borderColor: '#c40491' }} variant="contained"  size="large" style= {{
                      color: '#ffffff',
					   background: '#cd388c'
                      }}
                     >
						 <FavoriteIcon/>
					 </Button>
					 <Button sx={{ borderColor: '#c40491' }} variant="contained"  size="large" style= {{
						 
						 color: '#ffffff',
						    // border-color: '#cd388c'
						 background: '#cd388c'
						}}
						
						> 
						<ClearIcon/>
					 </Button>

			  </motion.div>
				 {/* console.log(item) */}
		 </Item>
	 )
}

export default MovieItem