/* eslint-disable react/prop-types */
import React from 'react'
import Layout from '../../components/Layout'
import { SectionTitle, Paragraph, Pill } from '../../styles'
import { ProfileLink } from './styles'

const Me = ({
  user
}) => {
  return /* #__PURE__ */React.createElement(Layout, {
    user: user
  }, /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement(SectionTitle, null, 'About Me'), /* #__PURE__ */React.createElement(Paragraph, null, user.basics.summary)), /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement(SectionTitle, null, 'Skills'), /* #__PURE__ */React.createElement('div', null, user.skills.map(skill => /* #__PURE__ */React.createElement(Pill, {
    key: skill.name
  }, skill.name)))), /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement(SectionTitle, null, 'Profiles'), /* #__PURE__ */React.createElement('ul', null, user.basics.profiles.map((profile, i) => /* #__PURE__ */React.createElement(ProfileLink, {
    key: profile.network
  }, i !== 0 && ' | ', /* #__PURE__ */React.createElement('a', {
    href: profile.url,
    target: '_blank',
    rel: 'noreferrer noopener'
  }, profile.network))))))
}

export default Me
