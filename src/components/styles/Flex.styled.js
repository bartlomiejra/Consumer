import styled from 'styled-components'
import homesvg from '../../img/homesvg.svg'
export const Flex = styled.div `
/* display: flex; */
align-items: center;
& > div, & > ul{
	flex: 1;
}
@media(max-width: ${({theme}) => theme.mobile }){
/* flex-direction: column;
text-align:	center; */

}
`
export const Img = styled.div `
/* background-color: red; */
/* height: 700px;
    background-Image: url(${homesvg});
	color: red;
	display: flex;
	 */


`