import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="contact-page">
      <section className="page-header text-center">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get in <span className="gradient-text">Touch</span>
        </motion.h1>
         <motion.p 
          className="text-muted"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          Reach out for a personalized consultation or service request. We're here to help you stay connected and secure.
        </motion.p>
      </section>

      <section className="contact-section section">
        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div className="contact-info-container" {...fadeIn} transition={{ delay: 0.1 }}>
            <h2 className="mb-8">Contact Information</h2>
            
            <div className="info-card glass-panel">
              <div className="info-icon">
                <MapPin size={24} className="icon-primary"/>
              </div>
              <div className="info-text">
                <h3>Our Location</h3>
                <p className="text-muted">14/10, Kcas Complex, L Kallipatti Main Road</p>
                <p className="text-muted">Opposite To Lic Office, Gobichettipalayam</p>
                <p className="text-muted">Erode-638452, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="info-card glass-panel">
              <div className="info-icon">
                <Phone size={24} className="icon-primary"/>
              </div>
              <div className="info-text">
                <h3>Phone Numbers</h3>
                <p className="text-muted">
                  <a href="tel:9751184747">9751184747</a>
                </p>
                <p className="text-muted">
                  <a href="tel:9751094747">9751094747</a>
                </p>
              </div>
            </div>

            <div className="info-card glass-panel">
              <div className="info-icon">
                <Instagram size={24} className="icon-primary"/>
              </div>
              <div className="info-text">
                <h3>Social Media</h3>
                <a 
                  href="https://www.instagram.com/kaykarenterprises?igsh=ajgyNmEzYXJvY3Q4" 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-link-inline"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="contact-form-container glass-panel" {...fadeIn} transition={{ delay: 0.3 }}>
            <h2 className="mb-8">Send Us a Message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="9876543210" required />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service">
                  <option value="cctv">CCTV Installation</option>
                  <option value="networking">Networking Setup</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn-primary w-full mt-4">
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section pt-0">
        <h2 className="text-center mb-8">Find Us on Google Maps</h2>
        <motion.div className="map-container glass-panel" {...fadeIn} transition={{ delay: 0.5 }}>
          <iframe 
            title="Google Maps Location - Kaykar Enterprises"
            src="https://maps.google.com/maps?q=14/10,+Kcas+Complex,+L+Kallipatti+Main+Road,+Opposite+To+Lic+Office,+Gobichettipalayam,+Erode-638452,+Tamil+Nadu,+India&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '12px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
