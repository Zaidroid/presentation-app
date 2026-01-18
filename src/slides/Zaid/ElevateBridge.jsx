import React from 'react';
import { motion } from 'framer-motion';
import { Target, Handshake, Zap, ShieldCheck } from 'lucide-react';
import Slide from '../../components/Slide';
import FeedbackWall from '../../components/FeedbackWall';

/**
 * ElevateBridge Full Slide - REFINED
 * Morphs from the widget in MarketAccessProgressive using shared layoutId
 */
export function ElevateBridge() {
    // Shared transition config for premium feel
    const sharedTransition = {
        layout: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
        opacity: { duration: 0.5 }
    };

    return (
        <Slide>
            {/* Background Decor */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
            }}>
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        rotate: [0, 45, 0],
                        opacity: [0.08, 0.12, 0.08],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        top: '-15%',
                        right: '-5%',
                        width: '50%',
                        height: '50%',
                        background: 'var(--gradient-radial-primary)',
                        filter: 'blur(100px)',
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1.15, 1, 1.15],
                        rotate: [0, -45, 0],
                        opacity: [0.08, 0.12, 0.08],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        bottom: '-15%',
                        left: '-5%',
                        width: '50%',
                        height: '50%',
                        background: 'var(--gradient-radial-secondary)',
                        filter: 'blur(100px)',
                    }}
                />
            </div>

            {/* Subtle FeedbackWall */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 0.07,
            }}>
                <FeedbackWall />
            </div>

            {/* Main Content */}
            <motion.div
                layoutId="elevate-bridge-hero"
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1,
                    padding: 'var(--space-2xl)',
                }}
                transition={sharedTransition}
            >
                {/* Badge */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="badge badge-primary"
                    style={{
                        marginBottom: 'var(--space-xl)',
                        fontSize: 'var(--font-size-sm)',
                        padding: '0.5rem 1.25rem',
                        boxShadow: '0 8px 30px rgba(222, 99, 54, 0.25)',
                        letterSpacing: '0.1em',
                    }}
                >
                    <ShieldCheck size={16} style={{ marginRight: '8px' }} />
                    The 4th Component
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    style={{
                        fontSize: 'clamp(4rem, 10vmin, 8rem)',
                        fontWeight: 'var(--font-weight-extrabold)',
                        marginBottom: 'var(--space-md)',
                        letterSpacing: '-0.04em',
                        lineHeight: 0.9,
                    }}
                >
                    Elevate<span className="gradient-text">Bridge</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(1.2rem, 2.5vmin, 2.2rem)',
                        fontWeight: 'var(--font-weight-light)',
                        color: 'var(--color-text-secondary)',
                        marginBottom: 'var(--space-3xl)',
                        fontStyle: 'italic',
                        opacity: 0.7,
                    }}
                >
                    "Collaboration over Competition"
                </motion.h3>

                {/* Description Card */}
                <motion.div
                    className="glass-strong"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{
                        y: [0, -8, 0],
                        opacity: 1
                    }}
                    transition={{
                        y: { delay: 1, duration: 5, repeat: Infinity, ease: "easeInOut" },
                        opacity: { delay: 1, duration: 0.8 }
                    }}
                    style={{
                        padding: 'var(--space-3xl)',
                        borderRadius: 'var(--radius-3xl)',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                        maxWidth: '1000px',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        background: 'rgba(255, 255, 255, 0.5)',
                    }}
                >
                    {/* Accent Bar */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '8px',
                        height: '100%',
                        background: 'var(--gradient-primary)',
                    }} />

                    <p style={{
                        margin: 0,
                        fontSize: 'clamp(1.3rem, 2.6vmin, 1.8rem)',
                        lineHeight: 1.5,
                        color: 'var(--color-text-primary)',
                        paddingLeft: 'var(--space-xl)',
                        fontWeight: 'var(--font-weight-medium)',
                    }}>
                        A specialized <strong style={{ color: 'var(--brand-red)' }}>Market Access</strong> initiative connecting Palestinian agencies with global opportunities through a network of professional <strong style={{ color: 'var(--brand-teal)' }}>"Hunters"</strong>.
                    </p>
                </motion.div>

                {/* Key Points - Removed Emojis, Added Lucide Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                    style={{
                        marginTop: 'var(--space-3xl)',
                        display: 'flex',
                        gap: 'var(--space-xl)',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    {[
                        { label: 'Lead Generation', icon: Target, color: 'var(--brand-red)' },
                        { label: 'Partner Matching', icon: Handshake, color: 'var(--brand-teal)' },
                        { label: 'Deal Closing', icon: Zap, color: 'var(--brand-orange)' },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(255,255,255,0.15)',
                                borderColor: item.color,
                                y: -5
                            }}
                            transition={{ delay: 1.5 + i * 0.1 }}
                            style={{
                                padding: 'var(--space-md) var(--space-xl)',
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: 'var(--radius-2xl)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-md)',
                                fontSize: 'var(--font-size-md)',
                                fontWeight: 'var(--font-weight-bold)',
                                cursor: 'default',
                                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                boxShadow: 'var(--shadow-md)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <item.icon size={22} style={{
                                color: item.color,
                                filter: `drop-shadow(0 0 8px ${item.color}44)`
                            }} />
                            <span style={{ color: 'var(--brand-navy)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Slide>
    );
}

