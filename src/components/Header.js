import { Styledheader, Logo, Image } from './styles/Heder.styled';
import React from 'react';

// import { Button } from "./styles/Button.styled";
import Movies from './Movies/Movies';
import Nav from './Nav';
import Books from './Books';
import Podcast from './Podcast';
import Moviesfor2 from './Moviesfor2';
import Tvseries from './Tvseries';
import Home from './Home';
import Music from './Music';
import Recommendation from './Recommendation';
import LogIn from './LogIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Header() {
  return (
    <Styledheader>
      <p>Hi</p>
      {/* <Nav /> */}
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/Movies" component={Movies} />
          <Route path="/Tvseries" component={Tvseries} />
          <Route path="/Books" component={Books} />
          <Route path="/Podcast" component={Podcast} />
          <Route path="/Music" component={Music} />
          <Route path="/Moviesfor2" component={Moviesfor2} />
          <Route path="/Recommendation" component={Recommendation} />
          <Route path="/LogIn" component={LogIn} />
        </Routes>
      </Router>
    </Styledheader>
  );
}
