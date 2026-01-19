import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from '../../components/Slide';
import { FeatureCard, StatCard } from '../../components/Card';
import AnimatedMetric from '../../components/AnimatedMetric';
import { staggerContainer, fadeInUp, scaleIn } from '../../utils/animations';
import { Sprout, Hammer, Briefcase, CircleDollarSign, Users, Building2, TrendingUp, ArrowRight, Globe } from 'lucide-react';

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
                    <span className="gradient-text">The individuals</span> the talent, the learners, the future leaders.
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
                    <FeatureCard title="Specialist Skills" delay={0.1}>
                        <div style={{ marginTop: 'var(--space-md)' }}>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {['Bootcamps & Courses', 'Advanced Training', 'Certifications'].map((item) => (
                                    <li key={item} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 2.2,
                                        padding: 0 // Override global padding-left: 1.5em
                                    }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent-primary)', flexShrink: 0 }} />
                                        <span>{item}</span>
                                        <style dangerouslySetInnerHTML={{ __html: `li::before { display: none !important; }` }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FeatureCard>

                    <FeatureCard title="Employability" delay={0.2}>
                        <div style={{ marginTop: 'var(--space-md)' }}>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {['Soft Skills & Remote Readiness', 'Career Coaching', 'Freelancing Pathways'].map((item) => (
                                    <li key={item} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 2.2,
                                        padding: 0
                                    }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent-secondary)', flexShrink: 0 }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FeatureCard>

                    <FeatureCard title="Community & Mentorship" delay={0.3}>
                        <div style={{ marginTop: 'var(--space-md)' }}>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {['Mentor Matching', 'Alumni Network'].map((item) => (
                                    <li key={item} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 2.2,
                                        padding: 0
                                    }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent-tertiary)', flexShrink: 0 }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FeatureCard>
                </div>

                <motion.div variants={fadeInUp} style={{ textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-lg)' }}>
                    <h3 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-primary)' }}>
                        This is not training for training’s sake, <strong style={{ color: 'var(--color-accent-secondary)' }}>It’s training for income, employment, and growth</strong>
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
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-2xl)', textAlign: 'center' }}>
                    2025 Impact & <span className="gradient-text">Success</span>
                </motion.h2>

                <div className="grid-2" style={{ flex: 1, gap: 'var(--space-xl)', marginBottom: 'var(--space-xl)' }}>
                    {/* Main Reach - 2025 Participants */}
                    <motion.div
                        variants={scaleIn}
                        className="glass"
                        style={{
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-2xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(255, 255, 255, 0.02))',
                            border: '1px solid rgba(20, 184, 166, 0.2)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{ position: 'absolute', top: -20, left: -20, opacity: 0.05 }}>
                            <Users size={200} />
                        </div>
                        <div className="badge badge-primary" style={{ marginBottom: 'var(--space-md)' }}>2025 Reach</div>
                        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Total Participants</div>
                        <div className="gradient-text" style={{ fontSize: '8rem', fontWeight: 900, lineHeight: 1 }}>
                            <AnimatedMetric value={525} />
                        </div>
                        <div style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-text-primary)', fontWeight: 600 }}>Active Talent Enrolled</div>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 'var(--space-xl)' }}>
                        {/* Gender Balance */}
                        <motion.div
                            variants={fadeInUp}
                            className="glass"
                            style={{
                                padding: 'var(--space-xl)',
                                borderRadius: 'var(--radius-2xl)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-xl)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '20px',
                                background: 'rgba(236, 72, 153, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#ec4899'
                            }}>
                                <Users size={40} />
                            </div>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#ec4899', lineHeight: 1 }}>
                                    51.5%
                                </div>
                                <div style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                                    Female Participation
                                </div>
                            </div>
                        </motion.div>

                        {/* Implementation Method */}
                        <motion.div
                            variants={fadeInUp}
                            className="glass"
                            style={{
                                padding: 'var(--space-xl)',
                                borderRadius: 'var(--radius-2xl)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-xl)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '20px',
                                background: 'rgba(59, 130, 246, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#3b82f6'
                            }}>
                                <Globe size={40} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-xs)' }}>
                                    <span style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>Online Reach</span>
                                    <span style={{ color: '#3b82f6', fontWeight: 800 }}>77.5%</span>
                                </div>
                                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '77.5%' }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        style={{ height: '100%', background: '#3b82f6' }}
                                    />
                                </div>
                                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', marginTop: 'var(--space-xs)' }}>
                                    17.1% In-person | 5.4% Hybrid/Other
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Success Metric - Income Distribution */}
                <motion.div
                    variants={fadeInUp}
                    className="glass"
                    style={{
                        padding: 'var(--space-xl)',
                        borderRadius: 'var(--radius-2xl)',
                        background: 'rgba(245, 158, 11, 0.05)',
                        border: '1px solid rgba(245, 158, 11, 0.2)',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
                        <CircleDollarSign size={24} color="var(--color-accent-tertiary)" />
                        <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-accent-tertiary)', letterSpacing: '1px' }}>
                            2025 Economic Outcome (Post-Training)
                        </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-lg)' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, color: 'var(--color-text-primary)' }}>41.6%</div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Reporting Income</div>
                        </div>
                        <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, color: 'var(--color-accent-tertiary)' }}>16.8%</div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>$500 – $900</div>
                        </div>
                        <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, color: 'var(--color-accent-secondary)' }}>13.9%</div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>$900 – $1500</div>
                        </div>
                        <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, color: 'var(--color-accent-primary)' }}>4.6%</div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>More than $1500</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </Slide>
    );
}

// Slide 6: Data Deep Dive
export function Individuals6() {
    // Consolidated Data for Side-by-Side Comparison
    const salaryData = [
        { label: 'No Income', val3m: 79.8, val6m: 58.4, color: 'var(--color-text-tertiary)' },
        { label: '$1-200', val3m: 3.6, val6m: 1.2, color: 'var(--color-accent-tertiary)' },
        { label: '$200-500', val3m: 4.8, val6m: 5.2, color: 'var(--color-accent-tertiary)' },
        { label: '$500-900', val3m: 9.5, val6m: 16.8, color: 'var(--color-accent-secondary)' },
        { label: '$900-1500', val3m: 1.2, val6m: 13.9, color: 'var(--color-accent-primary)' },
        { label: '>$1500', val3m: 1.2, val6m: 4.6, color: 'var(--color-accent-primary)' }
    ];

    const methodData = [
        { label: 'Online', value: 77.5, color: '#3b82f6' },
        { label: 'In-person', value: 17.1, color: '#10b981' },
        { label: 'Hybrid', value: 5.4, color: '#8b5cf6' }
    ];

    return (
        <Slide>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-lg)' }}>
                    Detailed <span className="gradient-text">Impact Analysis</span>
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.4fr', gap: 'var(--space-xl)', flex: 1 }}>
                    {/* Left: Grouped Salary Distribution Chart */}
                    <motion.div variants={scaleIn} className="glass" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--radius-xl)', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-lg)', alignItems: 'center' }}>
                            <h3 style={{ fontSize: 'var(--font-size-lg)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                <CircleDollarSign size={20} color="var(--color-accent-primary)" />
                                Income Progression (3 vs 6 Months)
                            </h3>
                            <div style={{ display: 'flex', gap: 'var(--space-lg)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
                                    <div style={{ width: '12px', height: '12px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }} />
                                    3 Months
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-primary)', fontWeight: 'bold' }}>
                                    <div style={{ width: '12px', height: '12px', background: 'var(--color-accent-primary)', borderRadius: '2px' }} />
                                    6 Months
                                </div>
                            </div>
                        </div>

                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-md)', paddingBottom: 'var(--space-md)' }}>
                            {salaryData.map((item, index) => (
                                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, height: '100%' }}>
                                    <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '4px' }}>
                                        {/* 3 Month Bar (Ghost) */}
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${item.val3m}%` }}
                                            transition={{ duration: 0.8, delay: 0.1 + (index * 0.1) }}
                                            style={{
                                                flex: 1,
                                                background: 'rgba(255,255,255,0.1)',
                                                borderRadius: '4px 4px 0 0',
                                                minHeight: '4px',
                                                position: 'relative'
                                            }}
                                        >
                                            {item.val3m > 5 && (
                                                <div style={{
                                                    position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)',
                                                    fontSize: '10px', color: 'rgba(255,255,255,0.4)'
                                                }}>
                                                    {item.val3m}%
                                                </div>
                                            )}
                                        </motion.div>

                                        {/* 6 Month Bar (Active) */}
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: `${item.val6m}%` }}
                                            transition={{ duration: 1, delay: 0.4 + (index * 0.1), type: 'spring' }}
                                            style={{
                                                flex: 1,
                                                background: item.color,
                                                borderRadius: '4px 4px 0 0',
                                                minHeight: '4px',
                                                position: 'relative',
                                                boxShadow: `0 0 15px ${item.color}40`
                                            }}
                                        >
                                            <div style={{
                                                position: 'absolute', top: -22, left: '50%', transform: 'translateX(-50%)',
                                                fontSize: '12px', fontWeight: 'bold', color: 'var(--color-text-primary)'
                                            }}>
                                                {item.val6m}%
                                            </div>
                                        </motion.div>
                                    </div>
                                    <div style={{
                                        marginTop: 'var(--space-sm)',
                                        fontSize: 'var(--font-size-xs)',
                                        color: 'var(--color-text-tertiary)',
                                        textAlign: 'center',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        lineHeight: 1.2
                                    }}>
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Method & Gender/Other Stats */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>

                        {/* Delivery Method */}
                        <motion.div variants={scaleIn} className="glass" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--radius-xl)', flex: 1 }}>
                            <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-lg)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                <Globe size={20} color="#3b82f6" />
                                Delivery Methodology
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', justifyContent: 'center', height: '100%' }}>
                                {methodData.map((item, index) => (
                                    <div key={index}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: 'var(--font-size-sm)' }}>
                                            <span>{item.label}</span>
                                            <span style={{ fontWeight: 700, color: item.color }}>{item.value}%</span>
                                        </div>
                                        <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${item.value}%` }}
                                                transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                                style={{ height: '100%', background: item.color }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Summary Card */}
                        <motion.div variants={scaleIn} className="glass" style={{ padding: 'var(--space-lg)', borderRadius: 'var(--radius-xl)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.02))' }}>
                            <div style={{ textAlign: 'center', marginBottom: 'var(--space-md)' }}>
                                <div style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 800, color: 'var(--color-primary)' }}>+21.4%</div>
                                <div style={{ fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7 }}>Employment Growth</div>
                            </div>
                            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: 'var(--space-md)' }} />
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 800, color: '#ec4899' }}>271</div>
                                <div style={{ fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7 }}>Female Talent</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </Slide>
    );
}
