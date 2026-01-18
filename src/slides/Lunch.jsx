import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import elevateLogo from '../assets/elevate-logo.png';

export default function Lunch() {
    return (
        <Slide>
            <div style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                gap: 'var(--space-3xl)',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 var(--space-3xl)',
                maxWidth: '1400px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1
            }}>
                {/* LEFT PANEL: Branding Area */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    style={{
                        flex: '0 0 40%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 'var(--space-2xl)',
                    }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="badge badge-primary"
                        style={{
                            padding: 'var(--space-md) var(--space-2xl)',
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-bold)',
                            letterSpacing: '2px',
                            boxShadow: '0 0 30px var(--brand-orange)',
                            animation: 'pulse 3s ease-in-out infinite',
                            background: 'var(--brand-orange)'
                        }}
                    >
                        BREAK
                    </motion.div>

                    {/* Logo Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            backdropFilter: 'blur(var(--glass-blur))',
                            WebkitBackdropFilter: 'blur(var(--glass-blur))',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: 'var(--radius-2xl)',
                            padding: 'var(--space-xl)',
                            boxShadow: 'var(--shadow-lg)',
                        }}
                    >
                        <motion.img
                            src={elevateLogo}
                            alt="Elevate Logo"
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                            style={{
                                maxHeight: '300px',
                                width: 'auto',
                                filter: 'drop-shadow(0 10px 30px var(--brand-orange))',
                            }}
                        />
                    </motion.div>
                </motion.div>

                {/* RIGHT PANEL: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-xl)',
                        alignItems: 'flex-start',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                    >
                        <h1
                            className="gradient-text-orange"
                            style={{
                                fontSize: 'clamp(4rem, 8vmin, 7rem)',
                                fontWeight: 'var(--font-weight-extrabold)',
                                lineHeight: 'var(--line-height-tight)',
                                letterSpacing: '-0.02em',
                                marginBottom: 'var(--space-md)',
                                background: 'linear-gradient(135deg, var(--brand-orange) 0%, #ff8c00 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            Lunch Break
                        </h1>

                        <h2
                            style={{
                                fontSize: 'clamp(1.5rem, 3vmin, 2.5rem)',
                                fontWeight: 'var(--font-weight-semibold)',
                                color: 'var(--color-text-secondary)',
                            }}
                        >
                            Recharge • Refuel • Relax
                        </h2>
                    </motion.div>

                    {/* Animated Divider */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 1.0, duration: 0.8 }}
                        style={{
                            height: '2px',
                            background: 'linear-gradient(90deg, var(--brand-orange) 0%, transparent 100%)',
                            borderRadius: 'var(--radius-full)',
                            maxWidth: '400px'
                        }}
                    />
                </motion.div>
            </div>

            {/* Background Particles - Warmer for Lunch */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.2, 0],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 10 + Math.random() * 5,
                            repeat: Infinity,
                            delay: i * 2,
                        }}
                        style={{
                            position: 'absolute',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: '300px',
                            height: '300px',
                            background: i % 2 === 0 ? 'var(--brand-orange)' : 'var(--brand-teal)',
                            borderRadius: '50%',
                            filter: 'blur(100px)',
                            opacity: 0.05
                        }}
                    />
                ))}
            </div>
        </Slide>
    );
}
