import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Send, MessageSquare, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'cctv',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, service, message } = formData;
    const whatsappMessage = `Hello Kaykar Enterprises!%0A%0A*New Inquiry*%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/919751184747?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="contact-page">
      {/* Simple Header */}
      <header className="simple-header">
        <motion.h1 
          className="page-title text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in <span className="gradient-text">Touch</span>
        </motion.h1>
      </header>

      <section className="contact-main-section section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Details Column */}
            <motion.div className="contact-sidebar" {...fadeIn}>
              <div className="sidebar-group">
                <h2 className="group-title">Contact Details</h2>
                <div className="info-cards-stack">
                  <div className="contact-info-item glass-panel">
                    <div className="item-icon-wrapper">
                      <MapPin size={22} />
                    </div>
                    <div className="item-details">
                      <h3>Visit Us</h3>
                      <p>Kcas Complex, Gobichettipalayam</p>
                      <p className="text-sm">Erode, Tamil Nadu 638452</p>
                    </div>
                  </div>

                  <div className="contact-info-item glass-panel">
                    <div className="item-icon-wrapper">
                      <Phone size={22} />
                    </div>
                    <div className="item-details">
                      <h3>Call Us</h3>
                      <p><a href="tel:9751184747">9751184747</a></p>
                      <p><a href="tel:9751094747">9751094747</a></p>
                    </div>
                  </div>

                  <div className="contact-info-item glass-panel">
                    <div className="item-icon-wrapper">
                      <Clock size={22} />
                    </div>
                    <div className="item-details">
                      <h3>Working Hours</h3>
                      <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                      <p className="text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-group mt-12">
                <h2 className="group-title">Connect Online</h2>
                <div className="social-links-grid">
                  <a href="https://www.instagram.com/kaykarenterprises" target="_blank" rel="noreferrer" className="social-btn instagram">
                    <Instagram size={20} /> Instagram
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div className="contact-form-wrapper" {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="form-container glass-panel">
                <div className="form-header">
                  <MessageSquare size={28} className="text-primary" />
                  <div>
                    <h2>Send an Inquiry</h2>
                    <p className="text-muted">Instant response via WhatsApp</p>
                  </div>
                </div>

                <form className="modern-contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-input-group">
                      <label htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="e.g. Name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-input-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="e.g. 9876543210" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-input-group">
                    <label htmlFor="service">Required Service</label>
                    <div className="select-wrapper">
                      <select id="service" value={formData.service} onChange={handleChange}>
                        <option value="CCTV Installation">CCTV Installation</option>
                        <option value="Solar CCTV Solutions">Solar CCTV Solutions</option>
                        <option value="Networking Setup">Networking Setup</option>
                        <option value="Annual Maintenance">Annual Maintenance</option>
                        <option value="Consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-input-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      placeholder="Tell us about your requirements..." 
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn-whatsapp">
                    <Send size={18} /> Connect on WhatsApp
                  </button>
                  <p className="form-footer-note text-center">
                    Clicking send will open WhatsApp with your pre-filled inquiry.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section pt-0">
        <div className="container">
          <div className="map-wrapper glass-panel">
            <iframe 
              title="Google Maps Location - Kaykar Enterprises"
              src="https://maps.google.com/maps?q=14/10,+Kcas+Complex,+L+Kallipatti+Main+Road,+Opposite+To+Lic+Office,+Gobichettipalayam,+Erode-638452,+Tamil+Nadu,+India&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
