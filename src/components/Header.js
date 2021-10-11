import { Styledheader, Nav, Logo, Image } from './styles/Heder.styled';
import { Button} from './styles/Button.styled';
import {Container} from './styles/Container.styled'
import {Flex} from './styles/Flex.styled'
import Categories from './Categories'
import Movies from './Movies/Movies'
import React, {useState, useEffect} from 'react'
import axios from "axios"
import Search from './Search'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
export default function Header() {
		const [items, setItems] =  useState([])
	const [isLoading, setIsLoading] =  useState(true)
	const [query, setQuery] =  useState(true)

	useEffect (() => {
		const fetchItems = async () => {

			// const result = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US`)
			
			// const result = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=f0b539c0e3a06d06f8301d709f2fdf86`)

			const result = await axios(`https://api.themoviedb.org/3/search/movie?api_key=f0b539c0e3a06d06f8301d709f2fdf86&language=en-US&page=1&query=${query}`)
			



			// let category = result.data
			setItems(result.data.results)
			console.log(result.data.results)
			console.log(result.data.results)
			// console.log(result.data.results);
			setIsLoading(false)
		}

		fetchItems();
	},[query])
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
<Router>

				<Route>
					<Button bg='#ff0099' color='#fff'>Movie</Button>
				</Route>
				<Route path="/">
					<Button bg='#ff0099' color='#fff'>TV Series</Button>
				</Route>
				<Route path="/">
					<Button bg='#ff0099' color='#fff'>Books</Button>
				</Route>
				<Route path="/">
					<Button bg='#ff0099' color='#fff'>Podcast</Button>
				</Route>
				<Route path="/">
					<Button bg='#ff0099' color='#fff'>Music</Button>
				</Route>
</Router>
				</div>
			</Flex>
			{/* <Categories/> */}
			<Search getQuery={(q) =>{setQuery(q)}}/>
			<Movies isLoading = {isLoading} items={items}/>

			</Container>
			
		</Styledheader>
	)
}
