import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import './Navbar.css';
import logoImg from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="navbar glass-panel">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logoImg} alt="Kaykar Enterprises Logo" className="logo-image" />
          <span>KAYKAR</span>
        </Link>
        
        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={location.pathname === link.path ? 'active-link' : ''}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:9751184747" className="btn-primary nav-cta">
            <PhoneCall size={18} />
            Call Now
          </a>
        </nav>

        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
