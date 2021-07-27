import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem } from 'carbon-components-react/lib/components/UIShell'
import { StyledSideNav } from './styles'
const items = [{
  name: 'Me',
  path: '/'
}, {
  name: 'Projects',
  path: '/projects'
}, {
  name: 'Work',
  path: '/work'
}, {
  name: 'Education',
  path: '/education'
}, {
  name: 'Contact',
  path: '/contactme'
}, {
  name: 'Blog',
  path: '/blog'
}]

const Sidebar = () => {
  const location = useLocation()
  return /* #__PURE__ */React.createElement(StyledSideNav, {
    isFixedNav: true,
    expanded: true,
    isChildOfHeader: false,
    'aria-label': 'Side navigation'
  }, /* #__PURE__ */React.createElement(SideNavItems, null, items.map(i => /* #__PURE__ */React.createElement(SideNavLink, {
    isActive: location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path,
    element: Link,
    to: i.path,
    key: i.name
  }, i.name)), /* #__PURE__ */React.createElement(SideNavMenu, {
    title: 'Anime'
  }, /* #__PURE__ */React.createElement(SideNavMenuItem, {
    element: Link,
    to: '/anime/watching',
    key: 'Watching'
  }, 'Watching'), /* #__PURE__ */React.createElement(SideNavMenuItem, {
    element: Link,
    to: '/anime/favorites',
    key: 'Favorites',
    href: '/favorites'
  }, 'Favorites'), /* #__PURE__ */React.createElement(SideNavMenuItem, {
    element: Link,
    to: '/anime/completed',
    key: 'Completed',
    href: '/completed'
  }, 'Completed'))))
}

export default Sidebar
