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

// Slide 5: 2025 Scale & Impact (Consolidated)
export function IndividualsImpact() {
    return (
        <Slide>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
                    2025: <span className="gradient-text">Scale & Impact</span>
                </motion.h2>

                {/* ROW 1: Unified Impact Panel */}
                <motion.div
                    variants={scaleIn}
                    className="glass"
                    style={{
                        marginBottom: 'var(--space-2xl)',
                        borderRadius: 'var(--radius-2xl)',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 0.8fr', // 3 sections
                        alignItems: 'center',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
                    }}
                >
                    {/* Section 1: Participants (Reach) */}
                    <div style={{ padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', lineHeight: 1 }}>
                            <div className="gradient-text" style={{ fontSize: '5rem', fontWeight: 900 }}>
                                <AnimatedMetric value={5.5} duration={2} decimals={1} />
                            </div>
                            <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-accent-primary)' }}>K</span>
                        </div>
                        <div style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-sm)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                            Participants into Activities
                        </div>
                        {/* Invisible Placeholder for Alignment with Sibling Badge */}
                        <div style={{
                            marginTop: 'var(--space-md)', padding: '6px 16px',
                            border: '1px solid transparent',
                            fontSize: '0.85rem',
                            visibility: 'hidden',
                            userSelect: 'none'
                        }}>
                            Alignment Placeholder
                        </div>
                    </div>

                    {/* Section 2: Graduates (Depth) */}
                    <div style={{ padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', lineHeight: 1 }}>
                            <div className="gradient-text" style={{ fontSize: '5rem', fontWeight: 900 }}>
                                <AnimatedMetric value={2.2} duration={2.2} decimals={1} />
                            </div>
                            <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-accent-secondary)' }}>K</span>
                        </div>
                        <div style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-sm)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                            Graduates from Training
                        </div>
                        <div style={{
                            marginTop: 'var(--space-md)', padding: '6px 16px',
                            background: 'rgba(20, 184, 166, 0.1)', borderRadius: '20px',
                            border: '1px solid rgba(20, 184, 166, 0.2)',
                            fontSize: '0.85rem', color: 'var(--color-accent-secondary)', fontWeight: 500
                        }}>
                            From Very Tech → To Less Tech
                        </div>
                    </div>

                    {/* Section 3: Diversity (Inclusion) */}
                    <div style={{ padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--space-lg)' }}>
                        {/* Women */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '12px',
                                background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Users size={24} />
                            </div>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1, color: '#ec4899' }}>54%</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Women</div>
                            </div>
                        </div>

                        {/* Gaza */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                            <div style={{
                                width: '48px', height: '48px', borderRadius: '12px',
                                background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Globe size={24} />
                            </div>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1, color: '#3b82f6' }}>33%</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>From Gaza</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ROW 2: Income Journey Timeline */}
                <motion.div variants={fadeInUp} className="glass" style={{
                    flex: 1, padding: 'var(--space-xl)', borderRadius: 'var(--radius-xl)',
                    display: 'flex', flexDirection: 'column',
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(20, 184, 166, 0.05) 100%)',
                    border: '1px solid rgba(20, 184, 166, 0.2)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                        <div style={{ padding: '8px', background: 'var(--color-accent-secondary)', borderRadius: '8px', color: '#000' }}>
                            <TrendingUp size={24} />
                        </div>
                        <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>The Path to Financial Independence</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: 'var(--space-md)', alignItems: 'center', flex: 1 }}>

                        {/* 3 Months */}
                        <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: 'rgba(0,0,0,0.2)', borderRadius: '16px' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-xs)', textTransform: 'uppercase' }}>After 3 Months</div>
                            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--color-accent-tertiary)', lineHeight: 1 }}>12%</div>
                            <div style={{ fontSize: '1rem', color: 'var(--color-text-primary)', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Secured Income</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Avg: <span style={{ color: '#fff', fontWeight: 'bold' }}>$710</span></div>
                        </div>

                        <ArrowRight size={32} color="rgba(255,255,255,0.2)" />

                        {/* 6 Months */}
                        <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '16px', border: '1px solid var(--color-accent-secondary)', transform: 'scale(1.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-accent-secondary)', marginBottom: 'var(--space-xs)', textTransform: 'uppercase', fontWeight: 700 }}>After 6 Months</div>
                            <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--color-accent-secondary)', lineHeight: 1 }}>56%</div>
                            <div style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Secured Income</div>
                            <div style={{ fontSize: '1rem', color: 'var(--color-text-secondary)' }}>Avg: <span style={{ color: '#fff', fontWeight: 'bold' }}>$990</span></div>
                        </div>

                        <ArrowRight size={32} color="rgba(255,255,255,0.2)" />

                        {/* 12 Months Projection */}
                        <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', opacity: 0.8, border: '1px dashed rgba(255,255,255,0.2)' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-xs)', textTransform: 'uppercase' }}>12 Month Goal</div>
                            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--color-text-secondary)', lineHeight: 1 }}>~75%</div>
                            <div style={{ fontSize: '1rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>Expected Outcome</div>
                        </div>

                    </div>

                    <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)', fontSize: '0.85rem', color: 'var(--color-text-tertiary)', fontStyle: 'italic' }}>
                        Income sources include: Freelancing, Full-time, Part-time, and Consultation contracts.
                    </div>
                </motion.div>
            </motion.div>
        </Slide>
    );
}
