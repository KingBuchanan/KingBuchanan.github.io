import React from 'react'
import Layout from '../../components/Layout'
import { SectionTitle, Paragraph } from '../../styles'
import { EducationItem, Institution, Degree } from './styles'

const Education = ({
  user
}) => {
  return /* #__PURE__ */React.createElement(Layout, {
    user: user
  }, /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement(SectionTitle, null, 'Education'), /* #__PURE__ */React.createElement('ul', null, user.education.map((education, i) => /* #__PURE__ */React.createElement(EducationItem, {
    key: i
  }, /* #__PURE__ */React.createElement(Institution, null, education.position), /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement(Degree, null, education.studyType, ', ', education.area), ' ', /* #__PURE__ */React.createElement('span', null, ' \u22C5 '), /* #__PURE__ */React.createElement('span', null, education.start.year, ' to ', education.end.year)), /* #__PURE__ */React.createElement(Paragraph, null, education.description.replace('\n\n', '\n')))))))
}

export default Education
