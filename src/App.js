import {ThemeProvider} from 'styled-components'
import {Container} from './components/styles/Container.styled'
import axios from "axios"
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
// import content from './content'
import Footer from './components/Footer'
import Categories from './components/Categories'
import React, {useState, useEffect} from 'react'


const theme = {
	colors: {
		header: '#214141',
		
		body: '#000',
		footer: '#003333'
	},
	mobile:'768px'
}

function App() {

	return (
		

	  <ThemeProvider theme = {theme}>
      
	  <>
	  <GlobalStyles/>
<Header />
	{/* <Content /> */}
	   <Footer/>
	   



</>
	  </ThemeProvider>
  );
}

export default App;
