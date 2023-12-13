import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import Sidebar from '../Resuables/Sidebar';

const SharedLayout = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="relative">
      <Header setSidebar={setSidebar} />
      {sidebar ? <Sidebar setSidebar={setSidebar} /> : null}
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
