import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Aboutme from './pages/Aboutme';
import Qualifications from './pages/Qualifications';
import Hobbies from './pages/Hobbies';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ContactMe } from './components/ContactMe';


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
          <Route path='contactme' element={<ContactMe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
