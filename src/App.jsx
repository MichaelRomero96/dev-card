import React from 'react';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
};

export default App;
