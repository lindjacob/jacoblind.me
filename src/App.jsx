import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index';
import Resume from './pages/resume/index';
import Portfolio from './pages/portfolio/index';
import Contact from './pages/contact/index';
import NotFound from './pages/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App