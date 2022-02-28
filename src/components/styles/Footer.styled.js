import styled from 'styled-components';
export const StyledFooter = styled.footer`
  color: #fff;
  padding: 20px 0 0px;
  /* position: sticky; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* top: 50%; */
  /* left: 50%; */
  /* min-height: calc(100vh - 10px); */

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
