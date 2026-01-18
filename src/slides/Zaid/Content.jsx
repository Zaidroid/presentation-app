import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../../components/Slide';
import FeedbackWall from '../../components/FeedbackWall';
import { FeatureCard } from '../../components/Card';
import AnimatedMetric from '../../components/AnimatedMetric';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { FloatingBackground } from '../../components/FloatingBackground';
import zaidBg1 from '../../assets/images/backgrounds/zaid/zaid-1.jpg';
import zaidBg2 from '../../assets/images/backgrounds/zaid/zaid-2.jpg';
import zaidBg3 from '../../assets/images/backgrounds/zaid/zaid-3.jpg';
import zaidBg4 from '../../assets/images/backgrounds/zaid/zaid-4.jpg';
import zaidBg5 from '../../assets/images/backgrounds/zaid/zaid-5.jpg';

const zaidImages = [zaidBg1, zaidBg2, zaidBg3, zaidBg4, zaidBg5];

// Animation Variants
const containerVariants = staggerContainer(0.15);

export function MarketAccessGrid() {
    return (
        <Slide>
            <FloatingBackground images={zaidImages} />
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
            <FloatingBackground images={zaidImages} />
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

import { Globe, TrendingUp, Compass, ShieldCheck, DollarSign, Building2 } from 'lucide-react';

export function MarketAccessImpact() {
    const metrics2024 = [
        { label: 'Strategic Outreach', value: 35, suffix: '+', color: 'var(--color-accent-primary)' },
        { label: 'Companies Supported', value: 20, suffix: '+', color: 'var(--color-accent-secondary)' },
    ];

    const metrics2025 = [
        { label: 'Global Conferences', value: 3, suffix: '', icon: Globe, isNew: true },
        { label: 'Companies Supported', value: 40, suffix: '+', icon: Building2, color: 'var(--color-accent-secondary)', sub: '60+ Total' },
        { label: 'C-Suite Mentoring', value: 11, suffix: '', icon: Compass, isNew: true },
        { label: 'Legal Entities', value: 7, suffix: '', icon: ShieldCheck, isNew: true },
    ];

    const outreachGrowth = 140;

    return (
        <Slide>
            {/* Background Layer */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 70% 30%, rgba(222, 99, 54, 0.08) 0%, transparent 60%)',
                }} />
                <FloatingBackground images={zaidImages} />
            </div>

            {/* Content Layer */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 'var(--space-2xl) var(--space-3xl)'
            }}>
                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: 'var(--space-xl)'
                }}>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="badge badge-primary"
                            style={{ marginBottom: 'var(--space-sm)' }}
                        >
                            Market Access Impact
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                fontSize: 'clamp(2.5rem, 5vmin, 4rem)',
                                fontWeight: 900,
                                margin: 0,
                                lineHeight: 1.1
                            }}
                        >
                            Bridging to <span className="gradient-text">Global Markets</span>
                        </motion.h2>
                    </div>

                    {/* Growth Badge */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                        className="glass"
                        style={{
                            padding: 'var(--space-md) var(--space-xl)',
                            borderRadius: 'var(--radius-xl)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-md)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            background: 'rgba(16, 185, 129, 0.05)'
                        }}
                    >
                        <TrendingUp size={32} style={{ color: 'var(--color-success)' }} />
                        <div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--color-success)', lineHeight: 1 }}>
                                +{outreachGrowth}%
                            </div>
                            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7, fontWeight: 700 }}>
                                Network Growth
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Main Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr',
                    gap: 'var(--space-2xl)',
                    flex: 1
                }}>
                    {/* 2024 Column (Baseline) */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="glass"
                        style={{
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-2xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-lg)',
                            border: '1px solid rgba(255,255,255,0.03)',
                            background: 'rgba(255,255,255,0.01)' // Subtle background
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 'var(--space-md)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700, opacity: 0.6 }}>2024 Baseline</h3>
                            <div className="badge" style={{ background: 'rgba(255,255,255,0.05)', opacity: 0.6 }}>Elevate 1.0</div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', justifyContent: 'center', flex: 1 }}>
                            {metrics2024.map((m, i) => (
                                <div key={m.label}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>{m.label}</span>
                                        <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{m.value}{m.suffix}</span>
                                    </div>
                                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(m.value / 60) * 100}%` }} // Adjusted scale
                                            transition={{ duration: 1, delay: 0.8 + (i * 0.1) }}
                                            style={{ height: '100%', background: m.color || 'var(--color-text-tertiary)', borderRadius: '4px' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 2025 Column (Expansion) */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="glass"
                        style={{
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-2xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-lg)',
                            border: '1px solid rgba(222, 99, 54, 0.2)', // Accent border
                            background: 'linear-gradient(145deg, rgba(222, 99, 54, 0.03) 0%, rgba(255,255,255,0.02) 100%)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 'var(--space-md)', borderBottom: '1px solid rgba(222, 99, 54, 0.1)' }}>
                            <h3 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 800 }}>2025 Expansion</h3>
                            <div className="badge" style={{ background: 'rgba(222, 99, 54, 0.15)', color: 'var(--brand-orange)' }}>Elevate 2.0</div>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 'var(--space-lg)',
                            flex: 1,
                            alignContent: 'center'
                        }}>
                            {metrics2025.map((m, i) => (
                                <motion.div
                                    key={m.label}
                                    variants={fadeInUp}
                                    whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                    style={{
                                        background: 'rgba(255,255,255,0.02)',
                                        padding: '1.2rem',
                                        borderRadius: 'var(--radius-xl)',
                                        border: m.isNew ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(255,255,255,0.05)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        position: 'relative'
                                    }}
                                >
                                    {m.isNew && (
                                        <div style={{
                                            position: 'absolute', top: 10, right: 10,
                                            fontSize: '9px', fontWeight: 800,
                                            padding: '2px 6px', borderRadius: '4px',
                                            background: 'var(--color-success)', color: '#000'
                                        }}>
                                            NEW
                                        </div>
                                    )}

                                    <div style={{ marginBottom: 'var(--space-sm)', color: m.color || 'var(--color-text-primary)' }}>
                                        {m.icon && <m.icon size={24} />}
                                    </div>

                                    <div>
                                        <div style={{ fontSize: '2.2rem', fontWeight: 900, lineHeight: 1, marginBottom: '4px' }}>
                                            {m.value}<span style={{ fontSize: '1rem', opacity: 0.6 }}>{m.suffix}</span>
                                        </div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', lineHeight: 1.2 }}>
                                            {m.label}
                                        </div>
                                        {m.sub && (
                                            <div style={{ fontSize: '0.75rem', marginTop: '4px', color: 'var(--color-text-tertiary)' }}>{m.sub}</div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}


