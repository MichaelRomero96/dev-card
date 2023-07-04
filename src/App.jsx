import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import PortfolioPage from './pages/Portfolio';
import ProjectDetails from './components/Portfolio/ProjectDetails';

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:projectId" element={<ProjectDetails />} />
      </Routes>
    </>
  );
};

export default App;
