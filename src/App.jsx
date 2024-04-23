import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import Resume from './pages/resume/index';
import Portfolio from './pages/portfolio/index';
import Project from './pages/portfolio/project/index';
import NotFound from './pages/NotFound';
import Download from './pages/resume/download/index';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/resume/download' element={<Download />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/:projectId' element={<Project />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App