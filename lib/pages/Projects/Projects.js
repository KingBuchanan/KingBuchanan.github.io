/* eslint-disable react/prop-types */
import React from 'react'
import Layout from '../../components/Layout'
import { SectionTitle, Pill } from '../../styles'
import { ProjectItem, ProjectTitle, SkillContainer } from './styles'

const Projects = ({
  user
}) => {
  return /* #__PURE__ */React.createElement(Layout, {
    user: user
  }, /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement(SectionTitle, null, 'Projects'), /* #__PURE__ */React.createElement('ul', null, user.projects.map((project, i) => /* #__PURE__ */React.createElement(ProjectItem, {
    key: i
  }, /* #__PURE__ */React.createElement(ProjectTitle, null, project.name), /* #__PURE__ */React.createElement('p', null, project.summary), /* #__PURE__ */React.createElement(SkillContainer, null, [...project.languages, ...project.libraries].map((item, j) => /* #__PURE__ */React.createElement(Pill, {
    key: j
  }, item))))))))
}

export default Projects
