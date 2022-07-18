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
      <Nav />
      <Router>
        <Routes>
          <Route path="/Home" exact element={Home} />
          <Route path="/Movies" element={Movies} />
          <Route path="/Tvseries" element={Tvseries} />
          <Route path="/Books" element={Books} />
          <Route path="/Podcast" element={Podcast} />
          <Route path="/Music" element={Music} />
          <Route path="/Moviesfor2" element={Moviesfor2} />
          <Route path="/Recommendation" element={Recommendation} />
          <Route path="/LogIn" component={LogIn} />
        </Routes>
      </Router>
      <Home />
    </Styledheader>
  );
}
