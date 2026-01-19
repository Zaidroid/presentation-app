import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../../components/Slide';

// Import images from Alan's pictures folder
import img1 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-01-18 at 9.58.53 PM.jpeg';
import img2 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-01-18 at 9.58.54 PM.jpeg';
import img3 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-01-18 at 9.58.5s4 PM.jpeg';
import img4 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-01-1s at 9.58.54 PM.jpeg';
import img5 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-01-sat 9.58.54 PM.jpeg';
import img6 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-0s1-18 at 9.58.54 PM.jpeg';
import img7 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 202s6-01-18 at 9.58.54 PM.jpeg';
import img8 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Imagse 2026-01-18 at 9.58.54 PM.jpeg';

export function AnqaaSlide() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    return (
        <Slide>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 'var(--space-2xl) var(--space-3xl)',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                        fontWeight: 900,
                        margin: 0,
                        letterSpacing: '-1px'
                    }}>
                        Anqaa – <span className="gradient-text">collaborate & revive</span>
                    </h2>
                </motion.div>

                {/* Images Gallery */}
                <div style={{
                    flex: 1,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gap: 'var(--space-md)',
                    width: '100%',
                    height: '100%'
                }}>
                    {images.map((src, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            style={{
                                position: 'relative',
                                borderRadius: 'var(--radius-xl)',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                            }}
                        >
                            <img
                                src={src}
                                alt={`Alan Gallery ${idx + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
