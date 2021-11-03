import {ThemeProvider, injectGlobal} from 'styled-components'
import {Container} from './components/styles/Container.styled'
import axios from "axios"
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
// import content from './content'
import Footer from './components/Footer'
import Movies from './components/Movies/Movies'
import {BrowserRouter as Router, Rout, Switch } from 'react-router-dom'



const theme = {
	colors: {
		header: '#214141',
		
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
