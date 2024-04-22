import React, { FC } from 'react';
import Sidebar from '../Sidebar/Nav';
import NavOverlay from '../Sidebar/NavOverlay';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="main lg:flex lg:min-h-screen">
      <Sidebar />
      {children}
      <NavOverlay />
    </main>
  );
};

export default Layout;
