import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Megaphone, Monitor, Code, Briefcase, Award } from 'lucide-react';
import Slide from '../components/Slide';
import FeedbackWall from '../components/FeedbackWall';
import { staggerContainer, fadeInUp } from '../utils/animations';

export default function ElevateOverview() {
    const pillars = [
        {
            title: "Capacity Building",
            subtitle: "Talent & Training",
            description: "Upskilling individuals and teams to meet global standards.",
            color: "var(--color-accent-primary)",
            icon: Code,
            delay: 0
        },
        {
            title: "Marketing & Branding",
            subtitle: "Visibility & Growth",
            description: "Enhancing digital presence to attract international clients.",
            color: "var(--color-accent-secondary)",
            icon: Megaphone,
            delay: 1 // For floating offset
        },
        {
            title: "Market Access",
            subtitle: "Global Connections",
            description: "Bridging the gap to international contracts and revenue.",
            color: "#FFB020", // Amber
            icon: TrendingUp,
            delay: 0.5
        }
    ];

    return (
        <Slide>
            {/* Background - FeedbackWall */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 0.2
            }}>
                <FeedbackWall />
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer(0.2)}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                    padding: '0 5%'
                }}
            >
                <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div className="badge badge-primary" style={{ marginBottom: '1rem' }}>
                        Program Overview
                    </div>
                    <h2 style={{ fontSize: 'clamp(3rem, 6vmin, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem' }}>
                        The <span className="gradient-text">Elevate</span> Program
                    </h2>
                    <p style={{ fontSize: '1.4rem', color: 'var(--color-text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        A comprehensive ecosystem designed to accelerate tech growth in Palestine.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2.5rem',
                    width: '100%',
                    maxWidth: '1400px'
                }}>
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: pillar.delay
                            }}
                            whileHover={{ scale: 1.05, translateY: -10, transition: { duration: 0.3 } }}
                            className="glass"
                            style={{
                                padding: '3rem 2rem',
                                borderRadius: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                border: '1px solid rgba(255,255,255,0.08)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Top glow */}
                            <div style={{
                                position: 'absolute',
                                top: '-50%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '100%',
                                height: '100%',
                                background: `radial-gradient(circle, ${pillar.color}20 0%, transparent 70%)`,
                                pointerEvents: 'none'
                            }} />

                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '24px',
                                background: `rgba(255,255,255,0.05)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '2rem',
                                color: pillar.color,
                                border: `1px solid ${pillar.color}40`,
                                boxShadow: `0 0 20px ${pillar.color}20`
                            }}>
                                <pillar.icon size={40} />
                            </div>

                            <h3 style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                marginBottom: '0.5rem',
                                color: 'var(--color-text-primary)'
                            }}>
                                {pillar.title}
                            </h3>
                            <div style={{
                                fontSize: '1rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                color: pillar.color,
                                marginBottom: '1.5rem',
                                opacity: 0.9
                            }}>
                                {pillar.subtitle}
                            </div>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Slide>
    );
}
