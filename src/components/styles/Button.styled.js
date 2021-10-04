import styled from "styled-components";

export const Button = styled.button`
border-radius: 50px;
border: none;
box-shadow: 0 0 10px rgbt(0,0,0,0.15);
cursor: pointer;
font-size: 1rem;
font-weight: 700;
padding: 15px 60px;
background-color: ${({bg}) => bg || '#fff'};
color: ${({color }) => color || '#333'};
margin: 5px;
margin-bottom: 100px;
/* paddign: 10px; */
/* display: flex; */
/* align-items: center; */
/* flex-direction: row; */
/* align-items: center; */
    
 

&:hover{
	opacity: 0.9;
	transform: scale(0.98);
}
`