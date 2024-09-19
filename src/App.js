import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout.js';
import Home from './Pages/Home.js';
import Projects from './Pages/Projects.js';
import Contact from './Pages/Contact.js';
import NoPage from './Pages/NoPage.js';

function App() {
  return (
    <div className='min-h-100 font-sans'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
