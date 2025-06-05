import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Certificates from "./Components/Certificates";

const Home = () => (
  <div id="home">
    <h1>Welcome to My Portfolio</h1>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </>
  );
}

export default App;
