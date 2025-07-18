import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Protfolio</div>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/certificates" onClick={closeMenu}>Certificates</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h2>Hello<span className="dot">.</span></h2>
          <h1>I'm <span className="name">Rishitha Nallapureddy</span></h1>
          <h2>Software Developer</h2>

          <div className="hero-buttons">
            <a
  href="https://docs.google.com/document/d/1LDSz1Vjd0bBdiH3Lq2ijBFryV5IqLgW3U2gdc_MeBmY/edit?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="outline-btn">My Resume</button>
</a>
          </div>
        </div>

        <div className="hero-image">
  <img src="/Profilephoto.jpg" alt="Rishitha" />
</div>

      </section>
    </>
  );
};

export default Navbar;
