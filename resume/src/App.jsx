import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" className="section home">Home</section>
      <section id="about" className="section about">About</section>
      <section id="projects" className="section projects">Projects</section>
      <section id="contact" className="section contact">Contact</section>
    </div>
  );
}

export default App;
