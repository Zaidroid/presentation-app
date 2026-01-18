import React from 'react';
import { motion } from 'framer-motion';

export const FloatingBackground = ({ images = [] }) => {
    if (!images || images.length === 0) return null;

    // Configuration inspired by Alan's "GazaResilience" slide
    // Uses 3 main floating images with specific styles
    const configs = [
        {
            // Left floating - similar to "Background Image 1" in Alan's slide
            left: '-10%',
            top: '10%',
            width: '45%',
            height: '60%',
            animate: {
                y: [0, -20, 0],
                x: [0, 10, 0]
            },
            transition: {
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        {
            // Right floating - similar to "Background Image 2"
            right: '-10%',
            top: '30%',
            width: '40%',
            height: '50%',
            animate: {
                y: [0, 20, 0],
                x: [0, -10, 0]
            },
            transition: {
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        {
            // Bottom Center floating - similar to "Background Image 3"
            left: '20%',
            bottom: '-5%',
            width: '35%',
            height: '45%',
            animate: {
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.4, 0.3]
            },
            transition: {
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        // Extra positions for when we have more than 3 images
        {
            right: '25%',
            top: '-5%',
            width: '30%',
            height: '40%',
            animate: {
                y: [0, 15, 0],
                rotate: [0, 2, 0]
            },
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        {
            left: '-5%',
            bottom: '10%',
            width: '25%',
            height: '35%',
            animate: {
                x: [0, 15, 0],
                rotate: [0, -2, 0]
            },
            transition: {
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }} // Overall container opacity as in Alan's slide
            transition={{ duration: 1.5 }}
            style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 0
            }}
        >
            {images.slice(0, 5).map((src, i) => {
                const cfg = configs[i % configs.length];
                return (
                    <motion.div
                        key={i}
                        animate={cfg.animate}
                        transition={cfg.transition}
                        style={{
                            position: 'absolute',
                            left: cfg.left,
                            top: cfg.top,
                            right: cfg.right,
                            bottom: cfg.bottom,
                            width: cfg.width,
                            height: cfg.height,
                            borderRadius: 'var(--radius-3xl)', // Use variable from Alan's slide
                            overflow: 'hidden',
                            opacity: i === 2 ? undefined : 0.6 // Keep opacity logic consistent with usage
                        }}
                    >
                        <img
                            src={src}
                            alt=""
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'blur(2px) grayscale(20%)' // Style from Alan's slide
                            }}
                        />
                    </motion.div>
                );
            })}

            {/* Gradient overlay to ensure readability - copied from Alan's slide */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.85) 0%, rgba(13, 17, 23, 0.75) 100%)',
                backdropFilter: 'blur(1px)'
            }} />
        </motion.div>
    );
};
