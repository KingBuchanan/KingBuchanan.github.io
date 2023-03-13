import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';
import AnimeFave from './Anime/AnimeFave';
import AnimeCurrent from  './Anime/AnimeCurrent';
import AnimeComplete from './Anime/AnimeComplete';
import Contact from './ContactMe';


const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Me user={user} />
        </Route>
        <Route path="/projects">
          <Projects user={user} />
        </Route>
        <Route path="/work">
          <Work user={user} />
        </Route>
        <Route path="/education">
          <Education user={user} />
        </Route>
        <Route path="/anime/favorites">
          <AnimeFave user={user} />
        </Route>
        <Route path="/anime/watching">
          <AnimeCurrent user={user} />
        </Route>
        <Route path="/anime/completed">
          <AnimeComplete user={user} />
        </Route>
        <Route path="/contactme">
          <Contact user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;