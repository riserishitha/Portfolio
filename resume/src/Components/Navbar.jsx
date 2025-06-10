import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>

      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#services" onClick={toggleMenu}>Services</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <RxCross1 className="icon" /> : <RxHamburgerMenu className="icon" />}
      </div>
    </nav>
  );
};

export default Navbar;
