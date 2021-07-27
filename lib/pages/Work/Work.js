/* eslint-disable react/prop-types */
import React from 'react'
import Layout from '../../components/Layout'
import { SectionTitle, Paragraph } from '../../styles'
import { WorkItem, WorkTitle, JobTitle } from './styles'

const Work = ({
  user
}) => {
  return /* #__PURE__ */React.createElement(Layout, {
    user: user
  }, /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement(SectionTitle, null, 'Work'), /* #__PURE__ */React.createElement('ul', null, user.work.map((work, i) => /* #__PURE__ */React.createElement(WorkItem, {
    key: i
  }, /* #__PURE__ */React.createElement(WorkTitle, null, work.position), /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement(JobTitle, null, work.company), ' ', /* #__PURE__ */React.createElement('span', null, work.location), /* #__PURE__ */React.createElement('span', null, ' \u22C5 '), /* #__PURE__ */React.createElement('span', null, work.start.year, ' to ', work.end.year)), /* #__PURE__ */React.createElement(Paragraph, null, work.summary))))))
}

export default Work
