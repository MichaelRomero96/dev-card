import React from 'react'
import Sidebar from "./Sidebar";
import AboutMe from './AboutMe'
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Sidebar />} />
      <Route path='/about-me' element={<AboutMe />} />
    </Routes>
  )
}

export default App