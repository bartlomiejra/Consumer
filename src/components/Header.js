import React from 'react';
import { Styledheader, Nav, Logo, Image } from './styles/Heder.styled';
import { Button} from './styles/Button.styled';
import {Container} from './styles/Container.styled'
import {Flex} from './styles/Flex.styled'
import Categories from './Categories'
export default function Header() {
	return (
		<Styledheader>
			<Container>
				<Nav>
					<Logo src='./images/logo.svg' alt=''  />

			</Nav>
			<Flex>
				<div>
					<h1>
					The best media search finder. 	
					</h1>
					<p>
The purpose of this app is to allow you to search for high quality niche media and cultural works. Find great books movies or music albums or just browse through the media lists suggested by us.  
The purpose of this app is to allow you to search for high quality niche media and cultural works. Find great books, movies and music albums or just browse through the media lists we offer.  
</p>
				
					<Button bg='#ff0099' color='#fff'>Movie</Button>
					<Button bg='#ff0099' color='#fff'>TV Series</Button>
					<Button bg='#ff0099' color='#fff'>Books</Button>
					<Button bg='#ff0099' color='#fff'>Podcast</Button>
					<Button bg='#ff0099' color='#fff'>Music</Button>
				</div>
			</Flex>
			<Categories/>

			</Container>
			
		</Styledheader>
	)
}
