import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Certificates from './Components/Certificates';
import "./app.css"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/"/>
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </>
  );
}
export default App