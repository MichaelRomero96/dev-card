import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Resume from './Resume';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
};

export default Layout;
