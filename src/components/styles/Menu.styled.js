import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  /* transform: translateX(-100%); */
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(110%)'};

  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  /* padding: 2rem; */
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  transition: transform 1s ease-in-out;
  width: 100%;
  z-index: 20;
  
 
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
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