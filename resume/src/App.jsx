import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Certificates from "./Components/Certificates";

const Home = () => (
  <div id="home">
    <h1>Welcome to My Portfolio</h1>
    {/* Other sections like About, Projects, Contact can go here */}
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
};

export default App;
