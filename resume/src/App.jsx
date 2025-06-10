import { useState } from 'react';
import './App.css';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <header>
        <div className="logo">MyPortfolio</div>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </div>
      </header>

      <section id="home" className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I’m a passionate developer ready to build amazing websites.</p>
      </section>
    </div>
  );
}

export default App;
