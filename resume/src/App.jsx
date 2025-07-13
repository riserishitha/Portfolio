import { Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Certificates from './Components/Certificates';
import About from './Components/About';
import Contact from './Components/Contact';
import "./app.css"
function App() {
  return (
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
  );
}

export default App;
