//@flow 
import Flexbox from 'flexbox-react'
import React from 'react'
import Layout from '../../components/Layout'
import { SectionTitle, Paragraph, Pill } from '../../styles'
import { ProfileLink, BlurbBox } from './styles'

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <Flexbox flexDirection='column'>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          {user.skills.map(skill => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <Flexbox flexDirection='row'>
            <ProfileLink key={profile.network}>
              {i !== 0 && ' | '}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
            </Flexbox>
          ))}
        </ul>
      </div>
      </Flexbox>
    </Layout>
  )
}

export default Me
