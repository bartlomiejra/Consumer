import React from 'react';
import {Flex} from './styles/Flex.styled'
import {Img} from './styles/Flex.styled'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: '200px',
  backgroundColor: `#262626`,
  color: '#f1f1f1',
    textAlign: 'bottom',
  

}));

function Home(){
	return(
	<Flex>
				<div>
					<h1>
					The best media search finder. 	
					</h1>
    <Box  >
<p>Top Category </p>
<Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            Find Movies
            </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Music</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Movies For 2</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Our Recomendation</Item>
        </Grid>
      </Grid>
	  </Box>

					<p>
The purpose of this app is to allow you to search for high quality niche media and cultural works. Find great books movies or music albums or just browse through the media lists suggested by us.  

</p>

				</div>
				<Img/>
				</Flex>	
	);
}
export default Home;