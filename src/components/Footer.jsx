import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, CheckCircle2 } from 'lucide-react';
import './Footer.css';
import logoImg from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src={logoImg} alt="Kaykar Logo" style={{ height: '48px', width: 'auto', borderRadius: '8px', marginBottom: '16px' }} />
          <h3 className="gradient-text">KAYKAR ENTERPRISES</h3>
          <p className="text-muted">Professional CCTV & Networking Services prioritizing security and modern connectivity solutions for homes and businesses.</p>
          <div className="established-badge">
            <CheckCircle2 size={16} className="text-primary"/>
            <span>Established 2013</span>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p><MapPin size={18} className="icon-primary"/> 14/10, Kcas Complex, L Kallipatti Main Road, Gobichettipalayam</p>
          <p><Phone size={18} className="icon-primary"/> 9751184747</p>
          <p><Phone size={18} className="icon-primary"/> 9751094747</p>
          <a href="https://www.instagram.com/kaykarenterprises?igsh=ajgyNmEzYXJvY3Q4" target="_blank" rel="noreferrer" className="social-link">
            <Instagram size={20} /> Follow on Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kaykar Enterprises. All Rights Reserved.</p>
        <p className="text-sm text-muted">Owner: K S Praveen Kumar</p>
      </div>
    </footer>
  );
};

export default Footer;
