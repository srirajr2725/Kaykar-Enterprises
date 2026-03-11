import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const UltraBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -10, background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' }}>
            {/* Soft animated gradient orbs in background */}
            <div style={{
                position: 'absolute', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)',
                top: '-20%', left: '-10%', filter: 'blur(80px)', animation: 'pulseOrbs 15s infinite alternate ease-in-out'
            }} />
            <div style={{
                position: 'absolute', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                bottom: '-10%', right: '-10%', filter: 'blur(100px)', animation: 'pulseOrbs 20s infinite alternate-reverse ease-in-out'
            }} />

            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    background: { color: { value: "transparent" } },
                    fpsLimit: 60,
                    particles: {
                        color: { value: "#3b82f6" },
                        links: {
                            color: "#93c5fd",
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: { default: "bounce" },
                            random: false,
                            speed: 1.5,
                            straight: false,
                        },
                        number: { density: { enable: true, area: 800 }, value: 60 },
                        opacity: { value: 0.3 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 3 } },
                    },
                    detectRetina: true,
                }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
            <style>
                {`
                    @keyframes pulseOrbs {
                        0% { transform: scale(1) translate(0, 0); }
                        100% { transform: scale(1.2) translate(5%, 5%); }
                    }
                `}
            </style>
        </div>
    );
};

export default UltraBackground;
