import React from 'react'
import {Item, Img} from '../styles/ItemsGrid.styled'
import { motion, AnimatePresence } from "framer-motion"
import {Button} from '@material-ui/core'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ClearIcon from '@mui/icons-material/Clear';
 const MovieItem = ({item}) => {
	 console.log(item);
//if poster_path is not null render this image if true when foto not found image

	
		
	 return (
		 <motion.div
		   whileHover={{  }}>

		 <Item>
			 {item.poster_path ?
			  <Img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title}/> 
			  : 
<Img src={`https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg`} alt={item.title}
/> 			  
			  }
			  <motion.div
			  initial={{ opacity: 0}}
			  whileHover={{ opacity: 1 }}
			//   animate={{ opacity: 1}}
			   className="detals">

				 <p>{item.genre_ids}</p>
				 <h3>{item.title}</h3>
				 <p>{item.release_date}</p>
				 <p>{item.overview}</p>
				 <p>{item.vote_average}</p>
				 <a href={`https://www.moviefone.com/${item.title}`}>
				 <Button sx={{ borderColor: '#c40491' }} variant="outlined"  size="large" style= {{

                       color: '#CD388C'
                      //  border-color: '#cd388c'
                      }}
                     
					  >More info</Button>
					  </a>
					  <Button sx={{ borderColor: '#c40491' }} variant="contained"  size="large" style= {{

                      color: '#ffffff',
                    //    border-color: '#cd388c'
					   background: '#cd388c'
                      }}
                     
                     >
						 {/* <FavoriteIcon/> */}
					 </Button>
					 <Button sx={{ borderColor: '#c40491' }} variant="contained"  size="large" style= {{

                       color: '#ffffff',
                    //    border-color: '#cd388c'
					   background: '#cd388c'
                      }}
                     
                     > </Button>

			  </motion.div>
				 {/* console.log(item) */}
		 </Item>
		 </motion.div>
	 )
}

export default MovieItem