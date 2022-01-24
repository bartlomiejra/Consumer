//  eslint-disable react/prop-types 

import {ThemeProvider} from 'styled-components'
// import axios from "axios"
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
// import content from './content'
import Footer from './components/Footer'
// import Movies from './components/Movies/Movies'
import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box} from '@material-ui/core';
// import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {MuiThemeProvider, createTheme} from '@material-ui/core/styles';
// import {useAuthState} from 'react-fireabse-hooks/auth';
// import {useCollectionData} from 'react-firebase-hooks/firestore';



const themes = {
	colors: {
		header: '#214141',
		
		footer: '#003333'
	},
	mobile:'768px'
}
const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
});
function App() {

	return (
		<MuiThemeProvider theme={theme}>

		<Box   m={0} sx={{
		color: 'white',

        }} >

		

	  <ThemeProvider theme = {themes}>
      
	  <>
	  
	  <GlobalStyles/>
	  
<Header />
	{/* <Content /> */}
	   <Footer/>
	   



</>
	  </ThemeProvider>
		</Box>
		</MuiThemeProvider>
	);
}

export default App;
