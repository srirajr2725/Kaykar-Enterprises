import { motion } from 'framer-motion';
import { Camera, Router, ShieldCheck, Zap, ArrowRight, CheckCircle, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';
import cctvImg from '../assets/cctv.png';
import networkImg from '../assets/network.png';
import solarCctvImg from '../assets/solar-cctv.png';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "CCTV Installation & Service",
      description: "High-definition security cameras tailored for your home or business. 24/7 monitoring capabilities.",
      icon: <Camera size={40} className="service-icon" />,
      image: cctvImg,
      features: ["IP Cameras", "HD Analog", "Remote Viewing", "Maintenance"]
    },
    {
      title: "Advanced Networking",
      description: "Robust and reliable network infrastructure for seamless connectivity and business operations.",
      icon: <Router size={40} className="service-icon" />,
      image: networkImg,
      features: ["Structured Cabling", "Wi-Fi Setup", "Router Configuration", "Troubleshooting"]
    },
    {
      title: "Solar-Powered CCTV",
      description: "Eco-friendly security solutions for remote locations without power access. Fully autonomous and reliable.",
      icon: <Sun size={40} className="service-icon" />,
      image: solarCctvImg,
      features: ["Standalone Operation", "Battery Backup", "4G/5G Connectivity", "Weatherproof"]
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ShieldCheck size={18} /> Top Rated CCTV Provider in Gobi
          </motion.div>
          <motion.h1
            className="hero-title"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            Secure Your Space With <span className="gradient-text" style={{ backgroundSize: '200% auto', animation: 'shine 5s linear infinite' }}>Next-Gen Tech</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -5, 0] }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.2 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
            }}
          >
            Delivering cutting-edge CCTV and advanced networking solutions to keep your business and loved ones safe, connected, and thriving.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlight Section */}
      <section className="stats-section" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div 
          className="stats-container glass-panel"
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              "0 20px 40px rgba(0, 0, 0, 0.04)",
              "0 30px 50px rgba(37, 99, 235, 0.1)",
              "0 20px 40px rgba(0, 0, 0, 0.04)"
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="stat-item"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          >
            <h3 className="gradient-text">10+</h3>
            <p>Years Experience</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <h3 className="gradient-text">100%</h3>
            <p>Client Satisfaction</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <h3 className="gradient-text">24/7</h3>
            <p>Support Available</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services-section section">
        <div className="text-center mb-8">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            We provide comprehensive security and networking solutions designed for reliability and performance.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card glass-panel"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 1 },
                opacity: { duration: 0.6, delay: index * 0.2 }
              }}
            >
              <motion.div 
                className="service-image-container"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 1 }}
              >
                <img src={service.image} alt={service.title} className="service-image" />
                <motion.div 
                  className="service-icon-overlay"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                  {service.icon}
                </motion.div>
              </motion.div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="text-muted">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}><CheckCircle size={16} className="text-primary" /> {feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content glass-panel">
          <h2>Ready to upgrade your security?</h2>
          <p>Contact us today for professional installation and unmatched service quality.</p>
          <motion.div
            animate={{ 
              y: [0, -5, 0],
              boxShadow: ["0px 0px 0px rgba(37, 99, 235, 0)", "0px 10px 20px rgba(37, 99, 235, 0.2)", "0px 0px 0px rgba(37, 99, 235, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ marginTop: '1.5rem' }}
          >
            <Link to="/contact" className="btn-primary">
              <Zap size={18} /> Contact Us Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
