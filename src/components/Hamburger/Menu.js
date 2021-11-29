// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from '../styles/Menu.styled'
import { NavLink } from 'react-router-dom';
import {  Logo } from '../styles/Heder.styled';
// import { motion } from "framer-motion"


const Menu = ({ open, ...props }) => {

   const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
return (
    <StyledMenu tabIndex={tabIndex}
    open={open} aria-hidden={!isHidden} {...props}>
  
  
                   <NavLink aria-hidden="true"  activeStyle={{ color: '#c40491' }} to="/Movies" tabIndex={tabIndex}>
                   Movies
                 </NavLink>
                 <NavLink aria-hidden="true" activeStyle={{ color: '#c40491' }} to="/Tvseries" tabIndex={tabIndex}>
                   TV Series
                 </NavLink>

                 <NavLink aria-hidden="true" activeStyle={{ color: '#c40491' }} to="/Books" tabIndex={tabIndex}>
                   Books
                 </NavLink>
                 <NavLink aria-hidden="true" activeStyle={{ color: '#c40491' }} to="/Music">
               Music
                 </NavLink>
                 <NavLink aria-hidden="true"  tabIndex={tabIndex} activeStyle={{ color: '#c40491' }} to="/Moviesfor2">
                   Movies for Two
                 </NavLink>
                 <NavLink aria-hidden="true" tabIndex={tabIndex}
                   activeStyle={{ color: '#c40491' }}
                   to="/Recommendation"
                 >
                   Our Recommendation
                 </NavLink> 
                 <NavLink aria-hidden="true" tabIndex={tabIndex}
                   activeStyle={{ color: '#c40491' }}
                   to="/LogIn"
                 >
                   LogIn 
                 </NavLink> 
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;