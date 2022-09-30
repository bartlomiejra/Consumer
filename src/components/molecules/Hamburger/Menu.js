// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  // const containerVariants = {
  //   hidden: {
  //     opacity: 0,
  //     x: "-100vw",
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       type: "spring",
  //       mass: 0.5,
  //       damping: 200,
  //       when: "beforeChildren",
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };

  // const childVariants = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //   },
  // };

  return (
    <StyledMenu
      tabIndex={tabIndex}
      open={open}
      aria-hidden={!isHidden}
      {...props}
    >
      <AnimatePresence arria-hidden={!isHidden}>
        <NavLink
          aria-hidden="true"
          activeStyle={{ color: '#c40491' }}
          to="/Movies"
          tabIndex={tabIndex}
          // className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Movies
        </NavLink>
        <NavLink
          aria-hidden="true"
          // className={({ isActive }) => (isActive ? activeClassName : undefined)}
          end
          to="/Tvseries"
          tabIndex={tabIndex}
        >
          TV Series
        </NavLink>
        <NavLink
          aria-hidden="true"
          activeStyle={{ color: '#c40491' }}
          to="/Books"
          tabIndex={tabIndex}
        >
          Books
        </NavLink>
        <NavLink aria-hidden="true" to="/Music">
          Music
        </NavLink>
        <NavLink aria-hidden="true" tabIndex={tabIndex} to="/Moviesfor2">
          Movies for Two
        </NavLink>
        <NavLink aria-hidden="true" tabIndex={tabIndex} to="/Recommendation">
          Our Recommendation
        </NavLink>
        <NavLink aria-hidden="true" tabIndex={tabIndex} to="/LogIn">
          LogIn
        </NavLink>
      </AnimatePresence>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
