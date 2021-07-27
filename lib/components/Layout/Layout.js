import React from 'react'
import Sidebar from '../Sidebar'
import UserHeader from '../UserHeader'
import MobileNav from '../../MobileNav'
import { StyledContent } from './styles'

const Layout = ({
  user,
  children
}) => {
  return /* #__PURE__ */React.createElement(React.Fragment, null, /* #__PURE__ */React.createElement(MobileNav, null), /* #__PURE__ */React.createElement(Sidebar, null), /* #__PURE__ */React.createElement(StyledContent, null, /* #__PURE__ */React.createElement(UserHeader, {
    user: user
  }), /* #__PURE__ */React.createElement('div', null, children)))
}

export default Layout
