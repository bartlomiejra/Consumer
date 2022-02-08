/* eslint react/prop-types: 0 */

//  eslint-disable jsx-a11y/no-autofocus
import {CardContent, Grid } from '@material-ui/core';
import React from 'react'
import {Item, Img} from '../styles/ItemsGrid.styled'
import { motion, AnimatePresence } from "framer-motion"
import {Button, Card, ButtonGroup, Box, Typography} from '@material-ui/core'
import Skeleton from '@mui/material/Skeleton';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';
const animationhover = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}
 const MovieItem = ({item}) => {

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
		delayChildren: 0.5
    }
  }
}
    const rowSkeletons = 6



    
	 return (
			 
		item ? (
		 <Item  spacing={1} 
		 
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
					   
					<Typography>
				 <motion.h3
				   animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 3 }}
				 
				 >{item.title}</motion.h3>
				 <p>{item.release_date}</p>
			 <p><strong>{item.vote_average }</strong>/10</p>
					</Typography>
					<Typography>

				 <p>{item.overview}</p>
					</Typography>
			  <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
				 <ButtonGroup variant="contained" aria-label="outlined primary button group">
					 

					  <Button sx={{ borderColor: '#c40491' }} variant="contained"  size="large" style= {{
                      color: '#ffffff',
					   background: '#cd388c'
                      }}
                     >
						 <FavoriteIcon/>
					 </Button>
				 <a className="detals_linkbutton" target="_blank" href={`https://duckduckgo.com/?q=${item.title}`}>
				 <Button sx={{ borderColor: '#c40491' }} variant="contained"  size="large" style= {{
                       color: '#CD388C'
					   
                      }}
					  >More info</Button>
					  </a>
					 <Button sx={{ borderColor: '#c40491' }} variant="contained"  size="large" style= {{
						 
						 color: '#ffffff',
						    // border-color: '#cd388c'
						 background: '#cd388c'
						}}
						
						> 
						<ClearIcon/>
					 </Button>

				 </ButtonGroup>
				 </Box>

			  </motion.div>
				 {/* console.log(item) */}
		 </Item>
		) : (
							<Skeleton variant="rectangular"  height={525} width={325} animation="wave"   /> 

		)
	 )
}

export default MovieItem