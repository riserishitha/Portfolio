import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

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
        <Link to="/about" onClick={closeMenu}> </Link>
        <Link to="/contact" onClick={closeMenu}></Link>
        <Link to="/certificates" onClick={closeMenu}>Certificates</Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
