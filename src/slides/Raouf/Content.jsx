import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from '../../components/Slide';
import { FeatureCard } from '../../components/Card';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { Megaphone, Palette, Search, Users, ExternalLink, Globe, Wifi, Clock, Zap, Briefcase, TrendingUp, ArrowDown, Compass } from 'lucide-react';

// Animation Variants
const containerVariants = staggerContainer(0.15);

export function CapacityBuilding() {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ width: '100%', height: '100%' }}
            >
                <motion.div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 'var(--space-2xl)', flexDirection: 'column' }}>
                    {/* Elevate Logo Concept */}
                    <motion.h2 variants={fadeInUp} style={{ fontSize: '4rem', fontWeight: '900', letterSpacing: '-2px', lineHeight: 1, textAlign: 'center' }}>
                        Elevate <span className="gradient-text">2.0</span>
                        <div style={{ fontSize: '2.5rem', marginTop: 'var(--space-xs)', color: 'var(--color-text-secondary)' }}>2025</div>
                    </motion.h2>
                </motion.div>

                <div className="grid-3">
                    <FeatureCard
                        title="Train-to-Hire"
                        description="Financial support for intern stipends to onboard fresh, pre-vetted talent."
                        delay={0.1}
                    >
                        <div style={{ marginTop: 'var(--space-md)', fontSize: 'var(--font-size-sm)' }}>
                            <div style={{ marginBottom: 'var(--space-sm)' }}>
                                <strong className="gradient-text" style={{ fontSize: 'var(--font-size-2xl)' }}>40 Interns</strong>
                                <div style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-xs)' }}>
                                    Placed in 10 companies (20 WB, 20 Gaza)
                                </div>
                            </div>
                            <div style={{ marginBottom: 'var(--space-sm)', padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                    <span>West Bank Hiring:</span>
                                    <strong style={{ color: 'var(--color-accent-secondary)' }}>75%</strong>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Gaza Hiring:</span>
                                    <strong style={{ color: 'var(--color-accent-primary)' }}>30%</strong>
                                </div>
                            </div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-md)' }}>
                                ODOO, ASP.NET, Angular, Blockchain, Cybersec, UI/UX
                            </div>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Upskilling"
                        description="Covering training costs for existing staff to meet evolving market demands."
                        delay={0.2}
                    >
                        <div style={{ marginTop: 'var(--space-md)', fontSize: 'var(--font-size-sm)' }}>
                            <div style={{ marginBottom: 'var(--space-md)' }}>
                                <strong className="gradient-text" style={{ fontSize: 'var(--font-size-2xl)' }}>81 Employees</strong>
                                <div style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-xs)' }}>
                                    From 17 companies
                                </div>
                            </div>
                            <ul style={{ fontSize: 'var(--font-size-xs)', marginTop: 'var(--space-sm)' }}>
                                <li>Cloud Architecture & DevOps</li>
                                <li>Communication & Time Management</li>
                                <li>Digital Marketing & Campaign Management</li>
                            </ul>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Talent Recovery"
                        description="Supporting Gaza-based companies by covering salaries to recover war-affected employees."
                        highlighted={true}
                        highlightLabel="Gaza Specific"
                        delay={0.3}
                    >
                        <div
                            style={{
                                marginTop: 'var(--space-md)',
                                padding: 'var(--space-md)',
                                background: 'rgba(0, 210, 170, 0.1)',
                                borderRadius: 'var(--radius-lg)',
                                fontSize: 'var(--font-size-sm)',
                            }}
                        >
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
                                Helping retain former talents at Gaza companies
                            </div>
                        </div>
                    </FeatureCard>
                </div>


            </motion.div>
        </Slide>
    );
}

export function Marketing() {
    const scope = [
        { icon: Palette, text: 'Brand Strategy & Positioning' },
        { icon: Search, text: 'Marketing Strategy' },
        { icon: Globe, text: 'Social Media & Creative Production' },
        { icon: Search, text: 'SEO & Digital Visibility' },
        { icon: Users, text: 'Coaching & Training of Resources' },
        { icon: Megaphone, text: 'Campaigns Management' },
        { icon: ExternalLink, text: 'Campaign Sponsorship Support' },
    ];

    return (
        <Slide>
            {/* Background Effects */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 10% 10%, rgba(48, 157, 196, 0.05) 0%, transparent 50%), radial-gradient(circle at 90% 90%, rgba(222, 99, 54, 0.05) 0%, transparent 50%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 'var(--space-md) var(--space-2xl)',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                {/* Header Row */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: 'var(--space-2xl)',
                    marginBottom: 'var(--space-lg)',
                    alignItems: 'center'
                }}>
                    <motion.div variants={fadeInUp}>
                        <div className="badge" style={{
                            background: 'var(--brand-teal)',
                            color: 'white',
                            marginBottom: 'var(--space-sm)',
                            boxShadow: '0 4px 15px rgba(48, 157, 196, 0.3)'
                        }} >
                            Visibility & Identity
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 6vmin, 3.8rem)',
                            fontWeight: 900,
                            margin: 0,
                            letterSpacing: '-0.02em',
                            lineHeight: 1
                        }}>
                            Marketing & <span className="gradient-text">Branding</span>
                        </h2>
                        <p style={{
                            fontSize: 'var(--font-size-md)',
                            margin: 'var(--space-sm) 0 0',
                            color: 'var(--color-text-secondary)',
                            fontWeight: 400,
                            maxWidth: '600px'
                        }}>
                            Improve the visibility and visual identity of companies through elite marketing interventions.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="glass-strong"
                        style={{
                            padding: 'var(--space-lg)',
                            borderRadius: 'var(--radius-2xl)',
                            borderRight: '4px solid var(--brand-teal)',
                            background: 'var(--color-surface-elevated)'
                        }}
                    >
                        <h4 style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--brand-teal)', margin: '0 0 8px' }}>
                            Sub-Interventions
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>• Contracting Marketing Agency</div>
                            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>• Placing Marketing Resources (TTH)</div>
                        </div>
                    </motion.div>
                </div>

                {/* Main Bento Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gridTemplateRows: 'auto 1fr',
                    gap: 'var(--space-lg)',
                    flex: 1
                }}>
                    {/* Track 1: Scope Items */}
                    <motion.div
                        variants={fadeInUp}
                        className="glass"
                        style={{
                            gridRow: 'span 2',
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-3xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-md)',
                            background: 'var(--color-surface)',
                            border: '1px solid var(--color-border-subtle)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-xs)' }}>
                            <div style={{ padding: '8px', background: 'var(--brand-teal)15', borderRadius: '10px', color: 'var(--brand-teal)' }}>
                                <Palette size={20} />
                            </div>
                            <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>Scope of Work</h3>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-sm)' }}>
                            {scope.map((item, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-md)',
                                    padding: '10px 14px',
                                    background: 'var(--color-surface-elevated)',
                                    borderRadius: '12px',
                                    border: '1px solid var(--color-border-subtle)'
                                }}>
                                    <div style={{ color: 'var(--brand-teal)', display: 'flex' }}><item.icon size={16} /></div>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Track 2: Dual Track Visualization (Minimized) */}
                    <motion.div
                        variants={fadeInUp}
                        className="glass"
                        style={{
                            padding: 'var(--space-lg)',
                            borderRadius: 'var(--radius-3xl)',
                            background: 'var(--color-surface)',
                            border: '1px solid var(--color-border-subtle)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                            <div style={{ textAlign: 'center', padding: 'var(--space-sm)' }}>
                                <div style={{ color: 'var(--brand-red)', marginBottom: '4px' }}><ExternalLink size={24} /></div>
                                <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>Agency<br />Driven</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: 'var(--space-sm)', borderLeft: '1px solid var(--color-border-subtle)' }}>
                                <div style={{ color: 'var(--brand-teal)', marginBottom: '4px' }}><Users size={24} /></div>
                                <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>TTH<br />Talent</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Track 3: Impact Metrics */}
                    <motion.div
                        variants={fadeInUp}
                        className="glass-strong"
                        whileHover={{ scale: 1.02 }}
                        style={{
                            padding: 'var(--space-xl)',
                            borderRadius: 'var(--radius-3xl)',
                            background: 'var(--gradient-primary)',
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)'
                        }}
                    >
                        <div style={{ position: 'absolute', top: '-10%', right: '-10%', opacity: 0.1 }}>
                            <Megaphone size={120} />
                        </div>
                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.9, marginBottom: '4px' }}>Impact Delivered</div>
                        <div style={{ fontSize: '5rem', fontWeight: 900, lineHeight: 1 }}>9</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>Companies Supported</div>
                        <div style={{
                            marginTop: 'var(--space-md)',
                            padding: '4px 16px',
                            background: 'rgba(255,255,255,0.2)',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            backdropFilter: 'blur(4px)'
                        }}>
                            3 GS • 6 WB
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </Slide>
    );
}

export function WorkingSpaces() {
    const quadrants = [
        {
            title: 'Digital Core',
            icon: Wifi,
            color: 'var(--brand-teal)',
            stats: [
                { label: 'Bandwidth', value: '162.5', unit: 'Mbps', impact: '+30%' },
                { label: 'Latency Drop', value: '66.7%', unit: 'Exp.', impact: 'Optimized' }
            ]
        },
        {
            title: 'Operational Continuity',
            icon: Clock,
            color: 'var(--brand-orange)',
            stats: [
                { label: 'Operating Hours', value: '12.2', unit: 'H/D', impact: '+22.5%' },
                { label: 'Utilization', value: '61.7', unit: '%', impact: '+11.3%' }
            ]
        },
        {
            title: 'Community Scale',
            icon: Users,
            color: 'var(--brand-navy)',
            stats: [
                { label: 'Daily Users', value: '33', unit: 'Active', impact: '+52%' },
                { label: 'Capacity', value: '54', unit: 'Seats', impact: '+19.5%' }
            ]
        },
        {
            title: 'Cost Resilience',
            icon: Zap,
            color: 'var(--brand-red)',
            stats: [
                { label: 'Membership', value: '450', unit: 'ILS', impact: '-25% Drop' },
                { label: 'Expansion', value: '7-10', unit: 'Hubs', impact: 'Feb 2026' }
            ]
        }
    ];

    return (
        <Slide>
            {/* Background Texture */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(48, 157, 196, 0.1) 0%, transparent 70%)' }} />
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 'var(--space-2xl) var(--space-3xl)',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                {/* Clean Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-2xl)' }}>
                    <motion.div variants={fadeInUp}>
                        <h2 style={{ fontSize: 'clamp(3rem, 5vmin, 4.5rem)', fontWeight: 900, margin: 0, lineHeight: 1 }}>
                            Gaza <span className="gradient-text">Coworking</span> Support
                        </h2>
                        <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-xs)', fontWeight: 500 }}>
                            Revitalizing the digital ecosystem through resilient infrastructure
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="glass-strong" style={{ padding: 'var(--space-md) var(--space-lg)', borderRadius: 'var(--radius-xl)', borderLeft: '4px solid var(--brand-orange)' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.6, letterSpacing: '1px', textTransform: 'uppercase' }}>Current Focus</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>Cohort 2 Expansion</div>
                    </motion.div>
                </div>

                {/* 4-Quadrant Visual Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr 1fr',
                    gap: 'var(--space-xl)',
                    flex: 1
                }}>
                    {quadrants.map((q, idx) => (
                        <motion.div
                            key={q.title}
                            variants={fadeInUp}
                            className="glass"
                            style={{
                                padding: 'var(--space-xl)',
                                borderRadius: 'var(--radius-3xl)',
                                display: 'flex',
                                flexDirection: 'column',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    background: `${q.color}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: q.color
                                }}>
                                    <q.icon size={22} />
                                </div>
                                <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800 }}>{q.title}</h3>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)', flex: 1, alignItems: 'center' }}>
                                {q.stats.map(s => (
                                    <div key={s.label}>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                                            {s.label}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                            <span style={{ fontSize: '2.2rem', fontWeight: 900 }}>{s.value}</span>
                                            <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>{s.unit}</span>
                                        </div>
                                        <div style={{
                                            fontSize: '0.9rem',
                                            fontWeight: 700,
                                            color: s.impact.includes('-') || s.impact.includes('Drop') ? 'var(--brand-red)' : 'var(--color-success)',
                                            marginTop: '4px'
                                        }}>
                                            {s.impact}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Corner Icon */}
                            <q.icon size={100} style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.03, transform: 'rotate(-15deg)' }} />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Impact Summary */}
                <motion.div
                    variants={fadeInUp}
                    style={{
                        marginTop: 'var(--space-xl)',
                        padding: 'var(--space-lg)',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: 'var(--radius-xl)',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Network Resilience</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--brand-teal)' }}>Operational</div>
                    </div>
                    <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)' }} />
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Efficiency Growth</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-success)' }}>+11.3%</div>
                    </div>
                    <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)' }} />
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Target Timeline</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--brand-orange)' }}>Feb 2026</div>
                    </div>
                </motion.div>
            </motion.div>
        </Slide>
    );
}


export function SuccessStories() {
    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ width: '100%', height: '100%' }}
            >
                <motion.h2 variants={fadeInUp} style={{ marginBottom: 'var(--space-xl)' }}>
                    Impact Stories
                </motion.h2>

                <div className="grid-2" style={{ gap: 'var(--space-xl)' }}>
                    {/* Accessline Story */}
                    <FeatureCard
                        title="Accessline"
                        description="From Interns to Major Contracts"
                        delay={0.1}
                    >
                        <div style={{ fontSize: 'var(--font-size-sm)', lineHeight: '1.6' }}>
                            <p style={{ marginBottom: 'var(--space-md)' }}>
                                Strengthened by hiring <strong style={{ color: 'var(--color-accent-secondary)' }}>Train-to-Hire interns</strong>, Accessline secured a <strong style={{ color: 'var(--color-accent-primary)' }}>major international project</strong> focused on data estimation in Gaza.
                            </p>
                            <p>
                                This capacity enabled them to:
                            </p>
                            <ul style={{ marginTop: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                                <li>Deliver critical work in a challenging environment</li>
                                <li>Offer full-time jobs to <strong>3 Elevate interns</strong></li>
                                <li>Secure <strong>multiple new projects</strong></li>
                            </ul>
                        </div>
                    </FeatureCard>

                    {/* Hexa Story */}
                    <FeatureCard
                        title="Hexa & MIRA"
                        description="AI Innovation Recognized Globally"
                        delay={0.2}
                    >
                        <div style={{ fontSize: 'var(--font-size-sm)', lineHeight: '1.6' }}>
                            <p style={{ marginBottom: 'var(--space-md)' }}>
                                Achieved a major milestone with <strong style={{ color: 'var(--color-accent-secondary)' }}>MIRA</strong>, an AI-powered smart health app for women using voice & camera analysis.
                            </p>
                            <div style={{
                                padding: 'var(--space-md)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: 'var(--radius-md)',
                                borderLeft: '3px solid var(--color-accent-primary)'
                            }}>
                                <strong style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--color-text-primary)' }}>
                                    Global Competition Selection
                                </strong>
                                Accepted in the first stage with <strong className="gradient-text">significant funding secured</strong>.
                            </div>
                        </div>
                    </FeatureCard>
                </div>
            </motion.div>
        </Slide>
    );
}
