import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import { HamburgerStyled } from './../styles/Hamburger.styled.js';
import { bool, func } from 'prop-types';

const Hamburger = ({ open, setOpen, ...props }) => {
 
	  const isExpanded = open ? true : false;


	return (
		<div>
			<HamburgerStyled  aria-expanded={isExpanded}aria-label="Toggle menu"  open={open} onClick={() => setOpen(!open)} {...props}>
{/* <GiHamburgerMenu/> */}
 <span />
      <span />
      <span />
			</HamburgerStyled>
		</div>
	)
}
Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Hamburger;
