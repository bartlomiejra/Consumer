import {ThemeProvider, injectGlobal} from 'styled-components'
import {Container} from './components/styles/Container.styled'
import axios from "axios"
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
// import content from './content'
import Footer from './components/Footer'
import Movies from './components/Movies/Movies'
import {BrowserRouter as Router, Rout, Switch } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box} from '@material-ui/core';


const theme = {
	colors: {
		header: '#214141',
		
		footer: '#003333'
	},
	mobile:'768px'
}

function App() {

	return (
		<Box    sx={{
		color: 'white',

        }} >

		

	  <ThemeProvider theme = {theme}>
      
	  <>
	  <GlobalStyles/>
<Header />
	{/* <Content /> */}
	   <Footer/>
	   



</>
	  </ThemeProvider>
		</Box>
  );
}

export default App;
