import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Aboutme from './pages/Aboutme';
import Qualifications from './pages/Qualifications';
import Hobbies from './pages/Hobbies';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contactme from './pages/Contactme';
import Certificates from './pages/Certificates';
import Projects from './pages/Projects';




function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="Aboutme" element={<Aboutme/>}/>
          <Route path="Qualifications" element={<Qualifications/>}/>
          <Route path="Hobbies" element={<Hobbies/>}/>
          <Route path="Skills" element={<Skills/>}/>
          <Route path="Experience" element={<Experience/>}/>
          <Route path='Contactme' element={<Contactme/>}/>
          <Route path='Certificates' element={<Certificates/>}/>
          <Route path='Projects' element={<Projects/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
