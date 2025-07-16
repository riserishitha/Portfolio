import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
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

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h2>Hello<span className="dot">.</span></h2>
          <h1>I'm <span className="name">Rishitha Nallapureddy</span></h1>
          <h2>Software Developer</h2>

          <div className="hero-buttons">
            {/* <button className="primary-btn">Got a project?</button> */}
            <button className="outline-btn">My Resume</button>
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
