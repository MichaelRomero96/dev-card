import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </>
  );
};

export default App;
