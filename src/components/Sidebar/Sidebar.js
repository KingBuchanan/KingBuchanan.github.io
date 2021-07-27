import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem } from 'carbon-components-react/lib/components/UIShell'

import { StyledSideNav } from './styles'

const items = [
  { name: 'Me', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Work', path: '/work' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contactme' },
  { name: 'Blog', path: '/blog' }

]

const Sidebar = () => {
  const location = useLocation()

  return (
    <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
      <SideNavItems>
        {items.map(i => (
          <SideNavLink
            isActive={
              location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
          >
            {i.name}
          </SideNavLink>

        ))}
        <SideNavMenu title="Anime" >
          <SideNavMenuItem element={Link} to={'/anime/watching'} key={'Watching'}>
            Watching
          </SideNavMenuItem>
          <SideNavMenuItem element={Link} to={'/anime/favorites'} key={'Favorites'}href="/favorites">
            Favorites
          </SideNavMenuItem>
          <SideNavMenuItem element={Link} to={'/anime/completed'} key={'Completed'}href="/completed">
            Completed
          </SideNavMenuItem>
        </SideNavMenu>
      </SideNavItems>
    </StyledSideNav>
  )
}

export default Sidebar
