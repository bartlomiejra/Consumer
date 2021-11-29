import styled from "styled-components";
export const StyledFooter = styled.footer`
  color: #fff;
  padding: 100px 0 60px;
 position: sticky;
  top: 100vh;
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
`