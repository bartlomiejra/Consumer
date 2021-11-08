import React from 'react'
import {  Logo } from './styles/Heder.styled';
import { Stylednav,  Li, Ul } from './styles/Nav.styled'
import{NavLink, Router } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@material-ui/core";



 function Nav(){
	 
	 return (
		 <AppBar style={{
border: 'none',
			 backgroundColor: 'transparent',
		 }}
position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" >
          
        </Typography>
		 <Stylednav>
		 
		
			 					<Logo src='./images/logo.svg' alt=''  />
<Ul>

	<NavLink activeStyle={{color:'#c40491'}} to="/Movies"       
>
	<Li >Movie</Li>
	</NavLink >
	<NavLink activeStyle={{color:'#c40491'}} to="/Tvseries">
	<Li>
	TV Series

	</Li>
	</NavLink>
	
	<NavLink activeStyle={{color:'#c40491'}} to="/Books">
	<Li>Books</Li>
	</NavLink>
	<NavLink  activeStyle={{color:'#c40491'}}to="/Music">
	<Li>Music</Li>
	</NavLink>
	<NavLink activeStyle={{color:'#c40491'}} to="/Moviesfor2">
	<Li>Moviefor2</Li>
	</NavLink>
	<NavLink activeStyle={{color:'#c40491'}} to="/Recommendation">
	<Li>Our Recommendation</Li>
	</NavLink>
</Ul>

	 </Stylednav>
	 </Toolbar>
    </AppBar>
	 )
 }


 export default Nav;