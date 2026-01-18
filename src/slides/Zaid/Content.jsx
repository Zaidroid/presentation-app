import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../../components/Slide';
import FeedbackWall from '../../components/FeedbackWall';
import { FeatureCard } from '../../components/Card';
import AnimatedMetric from '../../components/AnimatedMetric';
import { staggerContainer, fadeInUp } from '../../utils/animations';

// Animation Variants
const containerVariants = staggerContainer(0.15);

export function MarketAccessGrid() {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ width: '100%', height: '100%' }}
            >
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-2xl)' }}>
                    Market Access Components
                </motion.h2>

                <div className="grid-3">
                    <FeatureCard
                        title="C-Suite Coaching"
                        description="Upskilling leadership for global strategy."
                        delay={0.1}
                    >
                        <ul style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                            <li>Pitching & Data Strategy</li>
                            <li>Business Development</li>
                        </ul>
                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-subtle)' }}>
                            <strong className="gradient-text" style={{ fontSize: 'var(--font-size-2xl)' }}>
                                11 Companies
                            </strong>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Legal Support"
                        description="Infrastructure for international expansion."
                        delay={0.2}
                    >
                        <ul style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                            <li>Contracts & NDA Review</li>
                            <li>Registration (UAE, KSA, US)</li>
                        </ul>
                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-subtle)' }}>
                            <strong className="gradient-text" style={{ fontSize: 'var(--font-size-2xl)' }}>
                                7 Companies
                            </strong>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Conferences"
                        description="Direct exposure to global markets."
                        delay={0.3}
                    >
                        <ul style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                            <li>GITEX (Dubai)</li>
                            <li>Future Blockchain Summit</li>
                            <li>Biban (KSA)</li>
                        </ul>
                        <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border-subtle)' }}>
                            <strong className="gradient-text" style={{ fontSize: 'var(--font-size-2xl)' }}>
                                5 Companies
                            </strong>
                        </div>
                    </FeatureCard>
                </div>
            </motion.div>
        </Slide>
    );
}

export function ElevateBridgeModule() {
    return (
        <Slide>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.3 }}>
                <FeedbackWall />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', position: 'relative', zIndex: 10, maxWidth: '1100px', margin: '0 auto' }}
            >
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="badge badge-primary"
                    style={{
                        marginBottom: 'var(--space-3xl)',
                        fontSize: 'var(--font-size-sm)',
                    }}
                >
                    <span style={{
                        height: '12px', width: '12px',
                        background: 'white',
                        borderRadius: '50%',
                        display: 'inline-block',
                        boxShadow: '0 0 15px white',
                        marginRight: 'var(--space-sm)',
                    }}></span>
                    The 4th Component
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        fontSize: 'clamp(3rem, 7vmin, 7rem)',
                        fontWeight: 'var(--font-weight-extrabold)',
                        marginBottom: 'var(--space-lg)',
                        letterSpacing: '-0.03em',
                        lineHeight: 'var(--line-height-tight)',
                    }}
                >
                    Elevate<span className="gradient-text">Bridge</span>
                </motion.h2>

                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    style={{
                        fontSize: 'clamp(1.25rem, 2.5vmin, 2rem)',
                        fontWeight: 'var(--font-weight-light)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-4xl)',
                        fontStyle: 'italic',
                    }}
                >
                    "Collaboration over Competition"
                </motion.h3>

                <motion.div
                    className="glass"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, type: "spring", stiffness: 50 }}
                    style={{
                        padding: 'var(--space-3xl)',
                        borderRadius: 'var(--radius-2xl)',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-xl)',
                    }}
                >
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '5px', height: '100%',
                        background: 'var(--gradient-accent)',
                        borderRadius: 'var(--radius-sm)',
                    }} />

                    <p style={{
                        margin: 0,
                        fontSize: 'clamp(1.1rem, 2.2vmin, 1.5rem)',
                        lineHeight: 'var(--line-height-relaxed)',
                        color: 'var(--color-text-primary)',
                        paddingLeft: 'var(--space-lg)',
                    }}>
                        A specialized <strong style={{ color: 'var(--color-accent-secondary)' }}>Market Access</strong> initiative connecting Palestinian agencies with global opportunities through a network of professional <strong style={{ color: 'var(--color-accent-primary)' }}>"Hunters"</strong>.
                    </p>
                </motion.div>
            </motion.div>
        </Slide>
    );
}

export function MarketAccessImpact() {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
                    zIndex: 0
                }} />

                <motion.h2
                    variants={fadeInUp}
                    style={{
                        fontSize: '3.5rem',
                        fontWeight: 800,
                        marginBottom: 'var(--space-3xl)',
                        textAlign: 'center',
                        zIndex: 1
                    }}
                >
                    Impact & <span className="gradient-text">Success</span>
                </motion.h2>

                <div className="grid-2" style={{ width: '100%', gap: 'var(--space-2xl)', zIndex: 1 }}>
                    {/* Stat Cards - Premium Look */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
                        <motion.div variants={fadeInUp} className="glass-strong" style={{ padding: 'var(--space-xl)', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span className="gradient-text" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>60+</span>
                            <span style={{ marginTop: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Companies</span>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="glass-strong" style={{ padding: 'var(--space-xl)', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span className="gradient-text" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>4</span>
                            <span style={{ marginTop: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Target Markets</span>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="glass-strong" style={{ padding: 'var(--space-xl)', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', gridColumn: 'span 2' }}>
                            <span className="gradient-text" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>$5M+</span>
                            <span style={{ marginTop: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Pipeline Value</span>
                        </motion.div>
                    </div>

                    {/* Stories / Highlights */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                        <motion.div variants={fadeInUp} className="glass" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-accent-primary)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Global Presence</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>Representation at major tech summits: GITEX, Biban, and Web Summit.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="glass" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-accent-secondary)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Strategic Growth</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>11 Companies received specialized C-Suite coaching for investor readiness.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="glass" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-accent-tertiary)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Legal Infrastructure</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>7 Companies supported with international registration and compliance.</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </Slide>
    );
}


