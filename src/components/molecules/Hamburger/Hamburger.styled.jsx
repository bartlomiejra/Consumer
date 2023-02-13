import styled from 'styled-components';

export const HamburgerStyled = styled.button`
  position: absolute;
  /* top: 5%; */
  right: 2rem;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 50;
  font-size: 4rem;
  color: white;

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    color: white;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      /* transform: ${({ open }) =>
        open ? 'translateX(50px)' : 'translateX(0)'}; */
      transform: ${({ open }) =>
        open
          ? 'translateX(70px)translateY(-15px)rotate(90deg)'
          : 'rotate(0deg)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
