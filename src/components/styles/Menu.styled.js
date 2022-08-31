import styled from 'styled-components';

import { theme } from '../../assets/styles/theme';
export const StyledMenu = styled.nav`
  display: flex;
  /* transform: translateX(-100%); */
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(110%)')};

  flex-direction: column;
  background: ${({ theme }) => theme.primaryLight};
  align-items: flex-start;
  height: 100%;
  text-align: left;
  /* padding: 2rem; */
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  transition: transform 1s ease-in-out;
  width: 100%;
  z-index: 20;
  justify-content: center;
  color: ${({ theme }) => theme.persianGreen};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      /* color: lighter; */
    }
  }
`;
