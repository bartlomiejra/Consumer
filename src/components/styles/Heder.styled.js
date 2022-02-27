import styled from 'styled-components';
export const Styledheader = styled.header`
  h1 {
    /* color: #D26C94; */

    /* color: #730B46 */
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  /* width: 375px; */
  /* margin-left: 40px; */
  background-color: transparent;
  @media (max-width: ${({ theme }) => theme.bottom}) {
    margin: 40px 0 30px;
  }
`;
