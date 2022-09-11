import { Styledheader, Logo, Image } from './Heder.styled';
import React from 'react';

// import { Button } from "./styles/Button.styled";
import Movies from '../../templates/Movies/Movies';
import Nav from './Nav';
import Books from '../../templates/Books/Books';
import Podcast from '../../templates/Podcast/Podcast';
import Moviesfor2 from '../../templates/Moviesfor2/Moviesfor2';
import Tvseries from '../../templates/TvSeries/Tvseries';
import Home from '../../templates/Home/Home';
import Music from '../../templates/Music/Music';
import Recommendation from '../../Recommendation';
import LogIn from '../../LogIn';
import { Routes, Route } from 'react-router-dom';

export default function Header() {
  return (
    <Styledheader>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Tvseries" element={Tvseries} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Podcast" element={Podcast} />
        <Route path="/Music" element={Music} />
        <Route path="/Moviesfor2" element={Moviesfor2} />
        <Route path="/Recommendation" element={Recommendation} />
        <Route path="/LogIn" component={LogIn} />
      </Routes>
      {/* <Home /> */}
    </Styledheader>
  );
}
