import React from 'react'
import { User32, Code32, Portfolio32, Education32, FaceActivated24 } from '@carbon/icons-react'
import { Container, Spacer, NavWrapper, NavButton, NavLink } from './styles'

const MobileNav = () => {
  return /* #__PURE__ */React.createElement(Container, null, /* #__PURE__ */React.createElement(Spacer, null), /* #__PURE__ */React.createElement(NavWrapper, null, /* #__PURE__ */React.createElement(NavLink, {
    to: '/'
  }, /* #__PURE__ */React.createElement(NavButton, {
    hasIconOnly: true,
    renderIcon: User32,
    iconDescription: 'Me',
    tooltipPosition: 'bottom'
  })), /* #__PURE__ */React.createElement(NavLink, {
    to: '/projects'
  }, /* #__PURE__ */React.createElement(NavButton, {
    hasIconOnly: true,
    renderIcon: Code32,
    iconDescription: 'Projects',
    tooltipPosition: 'bottom'
  })), /* #__PURE__ */React.createElement(NavLink, {
    to: '/work'
  }, /* #__PURE__ */React.createElement(NavButton, {
    hasIconOnly: true,
    renderIcon: Portfolio32,
    iconDescription: 'Work',
    tooltipPosition: 'bottom'
  })), /* #__PURE__ */React.createElement(NavLink, {
    to: '/education'
  }, /* #__PURE__ */React.createElement(NavButton, {
    hasIconOnly: true,
    renderIcon: Education32,
    iconDescription: 'Education',
    tooltipPosition: 'bottom'
  })), /* #__PURE__ */React.createElement(NavLink, {
    to: '/anime'
  }, /* #__PURE__ */React.createElement(NavButton, {
    hasIconOnly: true,
    renderIcon: FaceActivated24,
    iconDescription: 'Anime',
    tooltipPosition: 'bottom'
  }))))
}

export default MobileNav
