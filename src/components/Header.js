import { Styledheader,  Logo, Image } from './styles/Heder.styled';
import { Button} from './styles/Button.styled';
import Movies from './Movies/Movies'
import {Link} from "react-router";
import Nav from './Nav'
import Books from './Books'
import Podcast from './Podcast'
import Moviesfor2 from './Moviesfor2'
import Tvseries from './Tvseries'
import Home from './Home'
import Music from './Music'
import Recommendation from './Recommendation'
import LogIn from './LogIn'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
export default function Header() {
	
	
	return (
		<Styledheader>
				<Router>
			<Nav/>

					 <Route path="/" exact component={Home}/>
					 <Route path="/Movies" component={Movies}/>
						 <Route path="/Tvseries" component={Tvseries} />
						 <Route path="/Books" component={Books} />
						 <Route path="/Podcast" component={Podcast} />
						 <Route path="/Music" component={Music} />
						 <Route path="/Moviesfor2" component={Moviesfor2} />
						 <Route path="/Recommendation" component={Recommendation} />
						 <Route path="/LogIn" component={LogIn} />
{/* 
				</Route>
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
				<Route path="/">
					<Button bg='#ff0099' color='#fff'>Moviesfor2</Button>
				</Route>
				<Route path="/">
					<Button bg='#ff0099' color='#fff'>Our Recommendation</Button>
				</Route> */}
</Router>
		
		

			
		</Styledheader>
	)
}
