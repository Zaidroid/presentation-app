import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scan, ArrowRight, Users, Briefcase, Award, Heart } from 'lucide-react';
import Slide from '../components/Slide';

export default function ClosingCTA() {
    return (
        <Slide>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 10
            }}>
                {/* Background Ambient Glow */}
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '80vw', height: '80vw',
                    background: 'radial-gradient(circle, var(--color-accent-primary) 0%, transparent 60%)',
                    opacity: 0.08,
                    filter: 'blur(100px)',
                    zIndex: -1,
                }} />

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vmin, 4rem)', fontWeight: 900, marginBottom: 'var(--space-xs)' }}>
                        Join <span className="gradient-text">Elevate Community</span>
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
                        Ways to support, collaborate, and engage.
                    </p>
                </motion.div>

                <div className="grid-2" style={{ maxWidth: '1000px', gap: 'var(--space-3xl)', alignItems: 'center' }}>
                    {/* Left: Native Resource List (Replicating QR Content) */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                        {[
                            { label: 'Apply to Elevate 3.0', subtitle: 'Start Your Journey', icon: ArrowRight, color: 'var(--brand-orange)' },
                            { label: 'Collaborate with Us', subtitle: 'Partner with Gaza Sky Geeks', icon: Users, color: 'var(--brand-teal)' },
                            { label: 'Hire Talent', subtitle: 'Palestinian Tech Professionals', icon: Briefcase, color: 'var(--brand-navy)' },
                            { label: 'Become a Mentor', subtitle: 'Share Your Expertise', icon: Award, color: 'var(--brand-red)' },
                            { label: 'Support Us', subtitle: 'Donate & Contribute', icon: Heart, color: 'var(--brand-red)' },
                        ].map((item, index) => (
                            <motion.button
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                                whileHover={{ scale: 1.02, x: 5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '1.25rem',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(255,255,255,0.05)',
                                    backdropFilter: 'blur(10px)',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    width: '100%',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{
                                    background: `rgba(255,255,255,0.1)`,
                                    padding: '12px',
                                    borderRadius: '12px',
                                    marginRight: '1rem',
                                    color: item.color
                                }}>
                                    <item.icon size={24} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>{item.label}</div>
                                    <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>{item.subtitle}</div>
                                </div>
                                <ArrowRight size={20} style={{ opacity: 0.5 }} />
                            </motion.button>
                        ))}
                    </div>

                    {/* Right: QR Code Action */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
                            whileHover={{ scale: 1.05 }}
                            style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '40px', // Softer definition
                                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.2) inset', // Deeper shadow + inner light
                                display: 'inline-flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                position: 'relative',
                                background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)', // Subtle gradient
                            }}
                        >
                            {/* Stylish scanning markers */}
                            <div style={{ position: 'absolute', top: 20, left: 20, width: 40, height: 40, borderTop: '5px solid var(--brand-orange)', borderLeft: '5px solid var(--brand-orange)', borderRadius: '12px 0 0 0' }} />
                            <div style={{ position: 'absolute', top: 20, right: 20, width: 40, height: 40, borderTop: '5px solid var(--brand-orange)', borderRight: '5px solid var(--brand-orange)', borderRadius: '0 12px 0 0' }} />
                            <div style={{ position: 'absolute', bottom: 20, left: 20, width: 40, height: 40, borderBottom: '5px solid var(--brand-orange)', borderLeft: '5px solid var(--brand-orange)', borderRadius: '0 0 0 12px' }} />
                            <div style={{ position: 'absolute', bottom: 20, right: 20, width: 40, height: 40, borderBottom: '5px solid var(--brand-orange)', borderRight: '5px solid var(--brand-orange)', borderRadius: '0 0 12px 0' }} />

                            <img
                                src="/new-qr.png"
                                alt="Scan QR Code"
                                style={{
                                    width: '320px',
                                    height: '320px',
                                    display: 'block',
                                    borderRadius: '16px',
                                    margin: '10px' // Space for markers
                                }}
                            />

                            <motion.div
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{
                                    marginTop: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    color: 'var(--brand-orange)',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px',
                                    fontSize: '1rem'
                                }}
                            >
                                <Scan size={24} strokeWidth={3} />
                                Scan to Access
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            style={{ textAlign: 'center' }}
                        >
                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--color-text-secondary)',
                                margin: 0
                            }}>
                                Use your camera to view the full document
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

