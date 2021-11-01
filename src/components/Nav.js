import React from 'react'
import {  Logo } from './styles/Heder.styled';
import { Stylednav, Navi, Li, Ul } from './styles/Nav.styled'
import{Link, Router } from 'react-router-dom';




 function Nav(){
	 
	 return (
		 <Stylednav>
		 
		
			 					<Logo src='./images/logo.svg' alt=''  />
<Ul>

	<Link to="/Movies">
	<Li>Movie</Li>
	</Link>
	<Link to="/Tvseries">
	<Li>TV Series</Li>
	</Link>
	
	<Link to="/Books">
	<Li>Books</Li>
	</Link>
	<Link to="/Music">
	<Li>Music</Li>
	</Link>
	<Link to="/Moviesfor2">
	<Li>Moviefor2</Li>
	</Link>
	<Link to="/Recommendation">
	<Li>Our Recommendation</Li>
	</Link>
</Ul>
	 </Stylednav>
	 )
 }


 export default Nav;