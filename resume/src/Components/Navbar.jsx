import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

        <a
          href="/99230041299_RISHITHA NALLAPUREDDY.png"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Certificates
        </a>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
