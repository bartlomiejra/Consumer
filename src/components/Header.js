// import React from 'react';
import { Styledheader, Nav, Logo, Image } from './styles/Heder.styled';
import { Button} from './styles/Button.styled';
import {Container} from './styles/Container.styled'
import {Flex} from './styles/Flex.styled'
import Categories from './Categories'
import fetchMovie from './Categories'
import React, {useState, useEffect} from 'react'
import axios from "axios"


export default function Header() {
		const [items, setItems] =  useState([])
	const [isLoading, setIsLoading] =  useState(true)

	useEffect (() => {
	},[])
		const fetchMovie = async () => {
			// const result = await axios(`https://swapi.dev/api/planets

			// `)
			const result = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US`)



			// let category = result.data
			setItems(result.data.genres)
			console.log(result.data.genres)
			console.log(result.data.results)
			// console.log(result.data.results);
			setIsLoading(false)
		}

		// fetchMovie();
	

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

</p>
				
					<Button bg='#ff0099' onClick={() => fetchMovie()} color='#fff'>Movie</Button>
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
