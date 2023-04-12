import React from 'react';
// import { GiHamburgerMenu } from "react-icons/gi";
import { HamburgerStyled } from './Hamburger.styled.jsx';
import { bool, func } from 'prop-types';

const Hamburger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  return (
    <>
      <HamburgerStyled
        // sx={{ display: 'flex' }}
        aria-expanded={isExpanded}
        aria-label="Toggle menu"
        open={open}
        onClick={() => setOpen(!open)}
        {...props}
      >
        {/* <GiHamburgerMenu/> */}
        <span />
        <span />
        <span />
      </HamburgerStyled>
    </>
  );
};
Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Hamburger;
