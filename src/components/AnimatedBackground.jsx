import { motion } from 'framer-motion';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-bg-container">
      <div className="ultra-mesh"></div>
      <div className="ultra-grid"></div>

      {/* Ultra floating UI accents */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`accent-${i}`}
          style={{
            position: 'absolute',
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            borderRadius: Math.random() > 0.5 ? '50%' : '12px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)',
            zIndex: -5
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: [null, Math.random() * -200 + 100],
            x: [null, Math.random() * 200 - 100],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
