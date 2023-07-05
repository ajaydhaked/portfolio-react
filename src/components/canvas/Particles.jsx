import React from 'react'
import { useCallback } from 'react'
import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
function ParticlesContainer() {
    const particlesInit = useCallback(async(main) => {
        await loadFull(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    }, []);
    const particlesLoaded = useCallback(async(container) => {
        
    }, []);
  return (
    <Particles
        className="w-full h-full absolute translate-z-0"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            fullScreen: {
                enable: false,
            },
            background: {
                color: {
                    value: "",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },    
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 10,
                        duration: 0.5,
                    },
                    repulse: {
                        distance: 80,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#e68e2e",
                },
                links: {
                    color: "#f5d393",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move : {
                    direction: "none",
                    enable: true,
                    outMode: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                    value: 70,
                    max: 85,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: {min: 1, max: 5},
                    max: 5,
                },
            },
            detectRetina: true,
        }}
    />
  )
}

export default ParticlesContainer;