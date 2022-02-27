import styled from 'styled-components';
export const Stylednav = styled.nav`
  display: flex;
  width: 100%;
  text-decoration: none;
  justify-content: space-between;

  ul {
    /* justify-content: space-around; */
    justify-content: center;
    list-style-type: none;
    margin: 0px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
    margin: 10px;
    font-size: 1rem;
  }
`;

export const Navi = styled.nav`
  font-weight: 500;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-between; */
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
export const Li = styled.li`
 
display: flex;
font-size: 1.3vw;
  list-style-type: none;
align-items: center;
justify-content: space-between;
/* margin-bottom: 40px; */
  textDecoration: none;
    color: white;
    fontSize: 20px,;
    margin-left: 20px
    ;
    justifyContent: center;
   

@media(max-width: ${({ theme }) => theme.mobile}){
/* flex-direction: column; */

}
 }`;

export const Ul = styled.ul`
  display: flex;
  /* /* justify-content: space-around; */
  align-items: center;
  width: 100%;
  padding: 0px;

  /* justify-content: space-between; */
  /* margin-bottom: 40px; */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    font-size: 1rem;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;
