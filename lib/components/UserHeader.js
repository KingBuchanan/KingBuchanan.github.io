import React from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowRight16 } from '@carbon/icons-react'
import { HeaderContainer, Header, Image, ViewResumeLink } from './styles'

const UserHeader = ({
  user
}) => {
  const location = useLocation()
  return /* #__PURE__ */React.createElement(HeaderContainer, {
    isHome: location.pathname === '/'
  }, /* #__PURE__ */React.createElement(Header, null, /* #__PURE__ */React.createElement(Image, {
    src: user.basics.picture
  }), /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement('h2', null, user.basics.name, /* #__PURE__ */React.createElement('img', {
    src: 'https://piskel-imgstore-b.appspot.com/img/7c148d8a-b8c2-11e9-bf50-69f4a3300400.gif',
    alt: 'Hakeem the Wizard'
  }), ' '), /* #__PURE__ */React.createElement('h4', null, /* #__PURE__ */React.createElement('a', {
    href: `https://gitconnected.com/${user.basics.username}`,
    target: '_blank',
    rel: 'noreferrer noopener'
  }, '@', user.basics.username)), /* #__PURE__ */React.createElement('p', null, user.basics.label), /* #__PURE__ */React.createElement('p', null, 'Coding in ', user.basics.region), /* #__PURE__ */React.createElement('p', null, 'Lv.', user.basics.yearsOfExperience, ' Developer '), /* #__PURE__ */React.createElement('p', null, user.basics.headline))), /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement(ViewResumeLink, {
    href: `https://gitconnected.com/${user.basics.username}/resume`,
    target: '_blank',
    rel: 'noopener noreferrer'
  }, /* #__PURE__ */React.createElement('span', null, 'View R\xE9sum\xE9'), /* #__PURE__ */React.createElement(ArrowRight16, null))))
}

export default UserHeader
