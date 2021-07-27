/* eslint-disable react/prop-types */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Me from './Me'
import Projects from './Projects'
import Work from './Work'
import Education from './Education'
import AnimeFave from './Anime/AnimeFave'
import AnimeCurrent from './Anime/AnimeCurrent'
import AnimeComplete from './Anime/AnimeComplete'
import Contact from './ContactMe'
import Blog from './Blog'

const Pages = ({
  user
}) => {
  return /* #__PURE__ */React.createElement(Router, null, /* #__PURE__ */React.createElement(Switch, null, /* #__PURE__ */React.createElement(Route, {
    exact: true,
    path: '/'
  }, /* #__PURE__ */React.createElement(Me, {
    user: user
  })), /* #__PURE__ */React.createElement(Route, {
    path: '/projects'
  }, /* #__PURE__ */React.createElement(Projects, {
    user: user
  })), /* #__PURE__ */React.createElement(Route, {
    path: '/work'
  }, /* #__PURE__ */React.createElement(Work, {
    user: user
  })), /* #__PURE__ */React.createElement(Route, {
    path: '/education'
  }, /* #__PURE__ */React.createElement(Education, {
    user: user
  })), /* #__PURE__ */React.createElement(Route, {
    path: '/anime/favorites'
  }, /* #__PURE__ */React.createElement(AnimeFave, {
    user: user
  })), /* #__PURE__ */React.createElement(Route, {
    path: '/anime/watching'
  }, /* #__PURE__ */React.createElement(AnimeCurrent, {
    user: user
  })), /* #__PURE__ */React.createElement(Route, {
    path: '/anime/completed'
  }, /* #__PURE__ */React.createElement(AnimeComplete, {
    user: user
  })), /* #__PURE__ */React.createElement(Route, {
    path: '/contactme'
  }, /* #__PURE__ */React.createElement(Contact, {
    user: user
  })), /* #__PURE__ */React.createElement(Route, {
    exact: true,
    path: '/blog'
  }, /* #__PURE__ */React.createElement(Blog, {
    user: user
  }))))
}

export default Pages
