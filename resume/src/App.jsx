import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="home" className="section">
        <h1>Welcome to My Portfolio</h1>
        <p>I’m a passionate developer ready to build amazing websites.</p>
      </section>
      <section id="about" className="section">
        <h1>About Me</h1>
        <p>I’m a web developer focused on building clean, responsive designs.</p>
      </section>
      <section id="services" className="section">
        <h1>Services</h1>
        <p>I offer full-stack web development and UI/UX design services.</p>
      </section>
      <section id="contact" className="section">
        <h1>Contact</h1>
        <p>Let’s work together! Reach me at myportfolio@email.com</p>
      </section>
    </div>
  );
}

export default App;
