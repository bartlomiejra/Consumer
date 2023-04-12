// import { Logo } from '../../organisms/Header/Header.styled';
import * as NavStyled from './Nav.styled';
// import { StyledMenu } from './styles/Menu.styled';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../molecules/Hamburger/hooks';
import Menu from '../../molecules/Hamburger/Menu.jsx';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import consumerLogo from '../../../assets/img/consumerLogo.svg';
import {
  AppBar,
  CssBaseline,
  useMediaQuery,
  Box,
  Typography,
} from '@mui/material';
import Hamburger from '../../molecules/Hamburger/Hamburger';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
function Nav() {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  let activeClassName = 'underline';
  return (
    <NavStyled.Stylednav
     
      position="static"
    >
      
      <CssBaseline />
      {/* <Toolbar> */}
      {isMobile ? (
        <>
          
              {/* <NavStyled.Stylednav> */}
                  
                    <NavLink to="/">
                      <NavStyled.Logo src={consumerLogo} alt="consumerLogo"
                height="50px"
                width="150px"  />
                    </NavLink>
                    <Hamburger open={open} setOpen={setOpen} />
                  
                    <Menu open={open} setOpen={setOpen} />
              {/* </NavStyled.Stylednav> */}
          {/* // </NavStyled.Stylednav> */}
        </>
      ) : (
        <>
          {/* <NavStyled.Stylednav> */}
            <NavLink to="/">
              <NavStyled.Logo
                src={consumerLogo}
                alt="consumerLogo"
                height="50px"
                width="150px"
              />
            </NavLink>
            <NavStyled.Ul>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
                to="Movies"
              >
                Movie
              </NavLink>

              <NavLink to="/Tvseries">TV Series</NavLink>
              <NavLink to="/Books">Books</NavLink>
              <NavLink to="/Music">Music</NavLink>
              <NavLink to="/Moviesfor2">Moviefor2</NavLink>
              <NavLink to="/Recommendation">Our Recommendation</NavLink>
            </NavStyled.Ul>
            <NavLink to="/LogIn">
              <Button
                sx={{ borderColor: '#c40491' }}
                variant="outlined"
                size="large"
                style={{
                  color: '#CD388C',
                  borderColor: '#c40491',
                }}
              >
                LogIn
              </Button>
            </NavLink>
          {/* </NavStyled.Stylednav> */}
        </>
      )}
      {/* </Toolbar> */}
    </NavStyled.Stylednav>
  );
}

export default Nav;
