import { motion } from 'framer-motion';
import { Target, Shield, Users, Award } from 'lucide-react';
import './About.css';
import cctvImg from '../assets/cctv.png';
import logoImg from '../assets/logo.svg';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  } ;

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header text-center">
        <motion.img 
          src={logoImg} 
          alt="Kaykar Logo" 
          style={{ height: '80px', width: 'auto', borderRadius: '16px', marginBottom: '1.5rem' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          About <span className="gradient-text">Kaykar Enterprises</span>
        </motion.h1>
        <motion.p
          className="text-muted text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          Your trusted partner for top-tier CCTV Service, Solar Solutions, and Advanced Networking since 2013.
        </motion.p>
      </section>

      {/* Story Section */}
      <section className="story-section section">
        <div className="story-grid">
          <motion.div className="story-content" {...fadeIn}>
            <h2 className="mb-4">Our Legacy & Mission</h2>
            <p className="mb-4">
              Founded on <strong>March 3, 2013</strong> by <strong>K S Praveen Kumar</strong>, Kaykar Enterprises embarked on a mission to simplify and secure the lives and businesses of the Gobi community.
            </p>
            <p className="mb-4">
              Over the years, we have evolved with the ever-changing landscape of security technology and network infrastructure. Our team is committed to providing not just hardware, but complete peace of mind through meticulously planned CCTV installations, eco-friendly solar-powered solutions, and robust networking systems.
            </p>
            <div className="owner-badge glass-panel mt-8">
              <div className="owner-info">
                <span className="text-muted text-sm uppercase">Founder & Owner</span>
                <h3 className="gradient-text">K S Praveen Kumar</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="story-image-placeholder glass-panel"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <img src={cctvImg} alt="CCTV Installation" className="about-image" />
            <div className="image-overlay">
              <h3>Securing Futures</h3>
              <p>Since 2013</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <h2 className="section-title text-center mb-8">Our Core Values</h2>
        <div className="values-grid">
          <motion.div className="value-card glass-panel" {...fadeIn} transition={{ delay: 0.1 }}>
            <Award size={40} className="icon-primary mb-4" />
            <h3>Excellence</h3>
            <p className="text-muted">We refuse to compromise on the quality of our equipment and the precision of our installations.</p>
          </motion.div>
          <motion.div className="value-card glass-panel" {...fadeIn} transition={{ delay: 0.2 }}>
            <Shield size={40} className="icon-primary mb-4" />
            <h3>Integrity</h3>
            <p className="text-muted">Transparent pricing, honest assessments, and steadfast reliability are the hallmarks of our service.</p>
          </motion.div>
          <motion.div className="value-card glass-panel" {...fadeIn} transition={{ delay: 0.3 }}>
            <Target size={40} className="icon-primary mb-4" />
            <h3>Innovation</h3>
            <p className="text-muted">Staying ahead of the technological curve to offer the most advanced Networking and Solar CCTV solutions.</p>
          </motion.div>
          <motion.div className="value-card glass-panel" {...fadeIn} transition={{ delay: 0.4 }}>
            <Users size={40} className="icon-primary mb-4" />
            <h3>Customer First</h3>
            <p className="text-muted">Your security concerns are our top priority. We offer dedicated support when you need it most.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
