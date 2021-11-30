import React from 'react';
import {Flex} from './styles/Flex.styled'
import {Img} from './styles/Flex.styled'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {  Logo } from './styles/Heder.styled';
import { NavLink } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: '300px',
  // backgroundColor: `#262626`,
  color: '#f1f1f1',
    textAlign: 'bottom',
    fontSize: '2.5rem',
    display: 'flex',

    alignItems: 'flex-end'
  

}));

function Home(){
	return(
	<Flex>
				<div>
					<h1>
					The best media search finder. 	
					</h1>
    <Box  m={2}>
<p>Top Category </p>
<Grid container spacing={2}>
        <Grid item xs={8}>
                          <NavLink to="/Movies">

          <Item style={{background: 'linear-gradient(to right bottom, #181818, #fd2d2d)'}}>
            Find Movies

            </Item>
                            </NavLink>
        </Grid>
        <Grid item xs={4}>

          <Item style={{background: 'linear-gradient(to right bottom, #430089, #181818)'}}>Music</Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{background: 'linear-gradient(to left bottom, #181818, #c40491)'}}>Movies For 2</Item>
        </Grid>
        <Grid item xs={8}>
          <Item style={{background: 'linear-gradient(to right bottom, #430089, #fcb045)'}}>Our Recomendation</Item>
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