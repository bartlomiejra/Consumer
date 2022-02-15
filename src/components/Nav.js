import { Logo } from "./styles/Heder.styled";
import { Stylednav, Li, Ul } from "./styles/Nav.styled";
import { StyledMenu } from "./styles/Menu.styled";
import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./Hamburger/hooks";
import Menu from "./Hamburger/Menu.js";
import { NavLink, Router } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useMediaQuery,
  Box,
} from "@material-ui/core";

import { borders } from "@mui/system";

import Hamburger from "./Hamburger/Hamburger";
import Button from "@mui/material/Button";
import { makeStyles, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

function Nav() {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const Header = (props) => {};
  return (
    <AppBar
      style={{
        border: "none",
        backgroundColor: "transparent",
      }}
      position="static"
    >
      <CssBaseline />
      {/* <Toolbar> */}
      {isMobile ? (
        <>
          <Stylednav>
            {/* <Typography variant="h4"> */}

            {/* <Stylednav> */}
            {/* <Ul> */}
            {/* <Li> */}
            {/* <Box sx={{   justifyContent: 'space-between' }}> */}

            <NavLink to="/">
              <Logo src="./images/logo2.svg" alt="" />
            </NavLink>
            <Hamburger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />

            {/* </Ul> */}
            {/* </Stylednav> */}
            {/* </Box> */}
            {/* </Typography> */}
          </Stylednav>
        </>
      ) : (
        <>
          <Stylednav>
            <NavLink to="/">
              <Logo src="./images/logo2.svg" alt="" />
            </NavLink>
            <Ul>
              <NavLink activeStyle={{ color: "#c40491" }} to="/Movies">
                <div>Movie</div>
              </NavLink>

              <NavLink activeStyle={{ color: "#c40491" }} to="/Tvseries">
                TV Series
              </NavLink>

              <NavLink activeStyle={{ color: "#c40491" }} to="/Books">
                Books
              </NavLink>
              <NavLink activeStyle={{ color: "#c40491" }} to="/Music">
                Music
              </NavLink>
              <NavLink activeStyle={{ color: "#c40491" }} to="/Moviesfor2">
                Moviefor2
              </NavLink>
              <NavLink activeStyle={{ color: "#c40491" }} to="/Recommendation">
                Our Recommendation
              </NavLink>
            </Ul>
            <NavLink activeStyle={{ color: "#c40491" }} to="/LogIn">
              <Button
                sx={{ borderColor: "#c40491" }}
                variant="outlined"
                size="large"
                style={{
                  color: "#CD388C"
                  //  border-color: '#cd388c'
                }}
              >
                LogIn
              </Button>
            </NavLink>
          </Stylednav>
        </>
      )}
      {/* </Toolbar> */}
    </AppBar>
  );
}

export default Nav;
