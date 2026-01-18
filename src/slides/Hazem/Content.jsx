import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../../components/Slide';
import { FeatureCard, StatCard } from '../../components/Card';
import AnimatedMetric from '../../components/AnimatedMetric';
import { staggerContainer, fadeInUp, scaleIn } from '../../utils/animations';
import { Sprout, Hammer, Briefcase, CircleDollarSign, Users, Building2, TrendingUp, ArrowRight } from 'lucide-react';

const containerVariants = staggerContainer(0.15);

// Slide 1: Introduction
export function Individuals1() {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
                <div className="badge badge-primary" style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-md)' }}>
                    Part I: Individuals
                </div>
                <motion.h2 variants={fadeInUp} style={{ fontSize: 'var(--font-size-7xl)', marginBottom: 'var(--space-xl)', lineHeight: 1.1 }}>
                    <span className="gradient-text">The individuals</span> — the talent, the learners, the future leaders.
                </motion.h2>
                <motion.h3
                    variants={fadeInUp}
                    style={{
                        fontSize: 'var(--font-size-4xl)',
                        color: 'var(--color-accent-secondary)',
                        fontWeight: 'bold',
                        maxWidth: '80%'
                    }}
                >
                    Individuals Are the Engine of Growth
                </motion.h3>
            </motion.div>
        </Slide>
    );
}

// Slide 2: Potential to Professional Flow
export function Individuals2() {
    return (
        <Slide>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-3xl)' }}>
                    From Potential to Professional
                </motion.h2>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'auto', padding: '0 var(--space-xl)' }}>
                    {[
                        { label: 'Potential', icon: <Sprout size={48} strokeWidth={1.5} /> },
                        { label: 'Skills', icon: <Hammer size={48} strokeWidth={1.5} /> },
                        { label: 'Experience', icon: <Briefcase size={48} strokeWidth={1.5} /> },
                        { label: 'Income', icon: <CircleDollarSign size={48} strokeWidth={1.5} /> }
                    ].map((step, index) => (
                        <React.Fragment key={step.label}>
                            <motion.div
                                variants={scaleIn}
                                className="glass"
                                style={{
                                    width: '160px',
                                    height: '160px',
                                    borderRadius: '50%',
                                    border: '4px solid var(--color-accent-primary)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: 'var(--shadow-lg)',
                                    zIndex: 2,
                                    color: 'var(--color-text-primary)'
                                }}
                            >
                                <div style={{ color: 'var(--color-accent-primary)', marginBottom: 'var(--space-xs)' }}>{step.icon}</div>
                                <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>{step.label}</div>
                            </motion.div>
                            {index < 3 && (
                                <motion.div
                                    variants={fadeInUp}
                                    style={{
                                        flex: 1,
                                        height: '4px',
                                        background: 'var(--color-border-medium)',
                                        margin: '0 var(--space-md)',
                                        position: 'relative'
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        right: -2,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: 0,
                                        height: 0,
                                        borderTop: '8px solid transparent',
                                        borderBottom: '8px solid transparent',
                                        borderLeft: '12px solid var(--color-border-medium)'
                                    }} />
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <motion.p
                    variants={fadeInUp}
                    style={{
                        fontSize: 'var(--font-size-2xl)',
                        textAlign: 'center',
                        maxWidth: '900px',
                        margin: 'var(--space-3xl) auto var(--space-2xl)',
                        lineHeight: 1.6,
                        color: 'var(--color-text-secondary)'
                    }}
                >
                    A holistic journey: nurture <strong>raw potential</strong>, build <strong>specialist skills</strong>, gain <strong>real-world experience</strong> and secure <strong>income</strong>.
                </motion.p>
            </motion.div>
        </Slide>
    );
}

// Slide 3: Three Pillars
export function Individuals3() {
    return (
        <Slide>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-xl)' }}>
                    The Power of Three
                </motion.h2>

                <div className="grid-3" style={{ flex: 1, marginBottom: 'var(--space-xl)', gap: 'var(--space-lg)' }}>
                    <FeatureCard title="Technical Skills" delay={0.1}>
                        <div style={{ marginTop: 'var(--space-md)' }}>
                            <div style={{ color: 'var(--color-accent-secondary)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', fontSize: 'var(--font-size-sm)', textTransform: 'uppercase' }}>Core Training</div>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-secondary)', lineHeight: 1.6, textAlign: 'center' }}>
                                <li>Intensive Bootcamps</li>
                                <li>Advanced Courses</li>
                                <li>Industry Certifications</li>
                            </ul>
                        </div>
                    </FeatureCard>

                    <FeatureCard title="Employability" delay={0.2}>
                        <div style={{ marginTop: 'var(--space-md)' }}>
                            <div style={{ color: 'var(--color-accent-secondary)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', fontSize: 'var(--font-size-sm)', textTransform: 'uppercase' }}>Market Readiness</div>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-secondary)', lineHeight: 1.6, textAlign: 'center' }}>
                                <li>Soft Skills & English</li>
                                <li>Remote Work Best Practices</li>
                                <li>Career Coaching</li>
                            </ul>
                        </div>
                    </FeatureCard>

                    <FeatureCard title="Community" delay={0.3}>
                        <div style={{ marginTop: 'var(--space-md)' }}>
                            <div style={{ color: 'var(--color-accent-secondary)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', fontSize: 'var(--font-size-sm)', textTransform: 'uppercase' }}>Network & Support</div>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text-secondary)', lineHeight: 1.6, textAlign: 'center' }}>
                                <li>Mentorship Matching</li>
                                <li>Alumni Network</li>
                                <li>Peer Learning</li>
                            </ul>
                        </div>
                    </FeatureCard>
                </div>

                <motion.div variants={fadeInUp} style={{ textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)' }}>
                    <h3 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)' }}>
                        Training for <strong style={{ color: 'var(--color-accent-secondary)' }}>income, employment, and growth</strong> — not just for training's sake.
                    </h3>
                </motion.div>
            </motion.div>
        </Slide>
    );
}

// Slide 4: Value for Companies
export function Individuals4() {
    return (
        <Slide>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-3xl)' }}>
                    Why This Matters for Companies
                </motion.h2>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2xl)', marginBottom: 'auto', marginTop: 'auto' }}>
                    {/* Item 1 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-md)' }}>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, type: 'spring' }}
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'var(--color-bg-tertiary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-accent-primary)',
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        >
                            <Users size={56} strokeWidth={1.5} />
                        </motion.div>
                        <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Better Talent In</h3>
                    </div>

                    <motion.div variants={fadeInUp} style={{ color: 'var(--color-border-strong)', display: 'flex', alignItems: 'center' }}>
                        <ArrowRight size={40} />
                    </motion.div>

                    {/* Item 2 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-md)' }}>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring' }}
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'var(--color-bg-tertiary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-accent-secondary)', // Teal
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        >
                            <Building2 size={56} strokeWidth={1.5} />
                        </motion.div>
                        <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Stronger Companies</h3>
                    </div>

                    <motion.div variants={fadeInUp} style={{ color: 'var(--color-border-strong)', display: 'flex', alignItems: 'center' }}>
                        <ArrowRight size={40} />
                    </motion.div>

                    {/* Item 3 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 'var(--space-md)' }}>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: 'spring' }}
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'var(--color-bg-tertiary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-accent-tertiary)', // Orange
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        >
                            <TrendingUp size={56} strokeWidth={1.5} />
                        </motion.div>
                        <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Real Growth</h3>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', marginTop: 'var(--space-3xl)' }}>
                    <motion.h3 variants={fadeInUp} style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>
                        Companies succeed because individuals are prepared
                    </motion.h3>
                    <motion.p variants={fadeInUp} style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                        Work-ready individuals → reduce onboarding time, fuel innovation and enable Palestinian companies to scale globally.
                    </motion.p>
                </div>
            </motion.div>
        </Slide>
    );
}

// Slide 5: Impact Stats
export function Individuals5() {
    return (
        <Slide>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-xl)' }}>
                    Impact & Success
                </motion.h2>

                {/* Stats Row */}
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: 'var(--space-3xl)' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div className="gradient-text" style={{ fontSize: '5rem', fontWeight: 800, lineHeight: 1 }}>4,500</div>
                        <div style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Graduates</div>
                    </div>
                    <div style={{ width: '1px', height: '80px', background: 'var(--color-border-medium)' }} />
                    <div style={{ textAlign: 'center' }}>
                        <div className="gradient-text" style={{ fontSize: '5rem', fontWeight: 800, lineHeight: 1 }}>$20M+</div>
                        <div style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Annual Income Generated</div>
                    </div>
                </div>

                <motion.div
                    className="glass"
                    variants={fadeInUp}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: 'var(--space-2xl)',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        borderRadius: 'var(--radius-xl)',
                        border: 'var(--glass-border)',
                        width: '100%',
                        justifyContent: 'space-around'
                    }}
                >
                    {/* Income Growth Chart */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-text-primary)' }}>Income Growth</h3>

                        <div style={{ display: 'flex', alignItems: 'flex-end', height: '220px', gap: 'var(--space-2xl)' }}>
                            {/* Bar 1 */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '80px' }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    style={{
                                        width: '100px',
                                        background: 'var(--color-bg-tertiary)',
                                        borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        border: '1px solid var(--color-border-light)'
                                    }}
                                >
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: 'var(--color-text-tertiary)', opacity: 0.3 }} />
                                </motion.div>
                                <span style={{ fontSize: 'var(--font-size-sm)', textAlign: 'center', fontWeight: 'bold', color: 'var(--color-text-secondary)', lineHeight: 1.2 }}>Avg<br />Graduate</span>
                            </div>

                            {/* Arrow */}
                            <div style={{ marginBottom: '60px', color: 'var(--color-accent-primary)' }}>
                                <TrendingUp size={32} strokeWidth={2} />
                            </div>

                            {/* Bar 2 */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '200px' }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                    style={{
                                        width: '100px',
                                        background: 'var(--gradient-primary)',
                                        borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
                                        boxShadow: '0 8px 16px rgba(222, 99, 54, 0.25)',
                                        position: 'relative'
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        top: '-40px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        fontWeight: '800',
                                        color: 'var(--color-accent-primary)',
                                        fontSize: '1.5rem'
                                    }}>
                                        3x
                                    </div>
                                </motion.div>
                                <span style={{ fontSize: 'var(--font-size-base)', fontWeight: 'bold', textAlign: 'center', color: 'var(--color-text-primary)', lineHeight: 1.2 }}>Specialist<br />Coder</span>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ width: '1px', height: '240px', background: 'var(--color-border-medium)', opacity: 0.5 }} />

                    {/* Gender Balance Chart */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-text-primary)' }}>Gender Balance</h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2xl)' }}>
                            <div style={{
                                width: '200px',
                                height: '200px',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {/* Donut Segments */}
                                <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                                    {/* Segment 1: Women */}
                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--color-accent-secondary)" strokeWidth="8" strokeDasharray="125.6 251.2" /> {/* 50% */}
                                    {/* Segment 2: Men */}
                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--color-accent-primary)" strokeWidth="8" strokeDasharray="125.6 251.2" strokeDashoffset="-125.6" /> {/* 50% */}
                                </svg>

                                <div style={{ position: 'absolute', textAlign: 'center' }}>
                                    <span style={{ fontWeight: '800', color: 'var(--color-text-primary)', fontSize: '3rem', letterSpacing: '-1px' }}>50%</span>
                                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, marginTop: '-5px' }}>Women</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                                    <div style={{ width: '16px', height: '16px', background: 'var(--color-accent-secondary)', borderRadius: '4px' }} />
                                    <div>
                                        <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>Women</div>
                                        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>High Participation</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                                    <div style={{ width: '16px', height: '16px', background: 'var(--color-accent-primary)', borderRadius: '4px' }} />
                                    <div>
                                        <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>Men</div>
                                        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>Equal Balance</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </Slide>
    );
}
