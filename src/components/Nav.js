import React from 'react'
import {  Logo } from './styles/Heder.styled';
import { Stylednav,  Li, Ul } from './styles/Nav.styled'
import{NavLink, Router } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
    useMediaQuery,

} from "@material-ui/core";
import { slide as Menu } from 'react-burger-menu'

import Button from '@mui/material/Button';
import { makeStyles, useTheme } from "@material-ui/core/styles";


 function Nav(){
	 const theme = useTheme();
	 const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const Header = (props) => {
  }; 	
   return (
     <AppBar
       style={{
         border: 'none',
         backgroundColor: 'transparent',
       }}
       position="static"
     >
       <CssBaseline />
       <Toolbar>
         <Typography variant="h4"></Typography>
         {isMobile ? (
<>
			 <Logo src="./images/logo.svg" alt="" />
			 <Menu right backgroundColor={'red'}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a  className="menu-item--small" href="">Settings</a>
      </Menu>
			 </>
			) : (
         
           <>
             <Stylednav>
               <Ul>
                 <NavLink to="/">
                   <Logo src="./images/logo.svg" alt="" />
                 </NavLink>
                 <NavLink activeStyle={{ color: '#c40491' }} to="/Movies">
                   <Li>Movie</Li>
                 </NavLink>
                 <NavLink activeStyle={{ color: '#c40491' }} to="/Tvseries">
                   <Li>TV Series</Li>
                 </NavLink>

                 <NavLink activeStyle={{ color: '#c40491' }} to="/Books">
                   <Li>Books</Li>
                 </NavLink>
                 <NavLink activeStyle={{ color: '#c40491' }} to="/Music">
                   <Li>Music</Li>
                 </NavLink>
                 <NavLink activeStyle={{ color: '#c40491' }} to="/Moviesfor2">
                   <Li>Moviefor2</Li>
                 </NavLink>
                 <NavLink
                   activeStyle={{ color: '#c40491' }}
                   to="/Recommendation"
                 >
                   <Li>Our Recommendation</Li>
                 </NavLink>
                 <NavLink activeStyle={{ color: '#c40491' }} to="/LogIn">
                   <Li>
                     <Button variant="outlined" size="large" color="secondary">
                       LogIn
                     </Button>
                   </Li>
                 </NavLink>
               </Ul>
             </Stylednav>
           </>
         ) }
       </Toolbar>
     </AppBar>
   );
 }


 export default Nav;