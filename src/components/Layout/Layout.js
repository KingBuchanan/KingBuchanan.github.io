import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Nav/Navbar';
import UserHeader from '../UserHeader';
import MobileNav from '../../MobileNav';

import { StyledContent } from './styles';

const Layout = ({ user, children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;