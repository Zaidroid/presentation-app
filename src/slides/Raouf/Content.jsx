import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from '../../components/Slide';
import { FeatureCard } from '../../components/Card';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { Megaphone, Palette, Search, Users, ExternalLink, Globe, Wifi, Clock, Zap, Briefcase, TrendingUp, ArrowDown, Compass, Building2 } from 'lucide-react';

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
    const metrics = [
        { label: 'Bandwidth Gain', v25: 125, v26: 162.5, unit: 'Mbps', color: 'var(--brand-teal)', max: 200 },
        { label: 'Latency / Exp.', v25: 4.5, v26: 7.5, unit: 'Mbps', color: 'var(--brand-teal)', max: 10 },
        { label: 'Operating Hours', v25: 10, v26: 12.2, unit: 'H/D', color: 'var(--brand-orange)', max: 24 },
        { label: 'Utilization Rate', v25: 50.4, v26: 61.7, unit: '%', color: 'var(--brand-orange)', max: 100 },
        { label: 'Daily Active Users', v25: 22, v26: 33, unit: 'Users', color: 'var(--brand-navy)', max: 50 },
        { label: 'Space Capacity', v25: 45, v26: 54, unit: 'Seats', color: 'var(--brand-navy)', max: 100 },
    ];

    const roadmap = [
        { label: 'Planned Hubs', value: '7-10', sub: 'New Strategic Hubs', icon: Building2 },
        { label: 'Program Price', value: '450', sub: 'Resilient ILS Rate', icon: Zap },
        { label: 'Cohort Support', value: '75%', sub: 'Ops Subsidy Target', icon: Users },
        { label: 'Target Launch', value: 'FEB 26', sub: 'Cohort 2 Kickoff', icon: Clock },
    ];

    return (
        <Slide>
            {/* Background Effect inspired by Geo Slide */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 30% 20%, rgba(48, 157, 196, 0.05) 0%, transparent 50%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 'var(--space-2xl) var(--space-3xl) var(--space-xs)',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Header inspired by Geo Slide */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        marginBottom: 'var(--space-lg)'
                    }}
                >
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-sm)',
                            marginBottom: 'var(--space-sm)',
                            color: 'var(--brand-teal)'
                        }}>
                            <Wifi size={20} />
                            <span style={{
                                fontSize: 'var(--font-size-sm)',
                                fontWeight: 'var(--font-weight-bold)',
                                textTransform: 'uppercase',
                                letterSpacing: '2px'
                            }}>
                                Resilience Infrastructure
                            </span>
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vmin, 4rem)',
                            fontWeight: 'var(--font-weight-extrabold)',
                            margin: 0,
                            lineHeight: 'var(--line-height-tight)'
                        }}>
                            Phase <span className="gradient-text">Expansion</span> Roadmap
                        </h2>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 800, color: 'var(--color-text-tertiary)', opacity: 0.6 }}>STRATEGIC HORIZON</div>
                        <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 900, color: 'var(--brand-navy)' }}>2025 - 2026</div>
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: 'var(--space-2xl)',
                    flex: 1
                }}>

                    {/* Left Card: Performance States (2025 vs 2026) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                        className="glass"
                        style={{
                            borderRadius: 'var(--radius-3xl)',
                            padding: 'var(--space-xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: 'var(--shadow-lg)',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xl)' }}>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>Network <span className="gradient-text">Performance</span></h3>
                                <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--color-text-tertiary)' }}>2025 Baseline vs 2026 Targeted Impact</p>
                            </div>
                            <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                                    <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>2025</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brand-teal)' }} />
                                    <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>2026</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)', flex: 1, alignItems: 'center' }}>
                            {metrics.map((m, idx) => (
                                <div key={m.label} style={{ background: 'rgba(255,255,255,0.02)', padding: 'var(--space-md)', borderRadius: 'var(--radius-xl)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>{m.label}</span>
                                        <span style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--brand-teal)' }}>{m.v26} <small style={{ opacity: 0.5 }}>{m.unit}</small></span>
                                    </div>
                                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                                        {/* 2025 Reference */}
                                        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${(m.v25 / m.max) * 100}%`, background: 'rgba(255,255,255,0.1)', borderRadius: '4px', zIndex: 1 }} />
                                        {/* 2026 Progress */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(m.v26 / m.max) * 100}%` }}
                                            transition={{ duration: 1.2, delay: 1 + (idx * 0.1) }}
                                            style={{ height: '100%', background: m.color, borderRadius: '4px', position: 'relative', zIndex: 2 }}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                                        <span style={{ fontSize: '0.65rem', opacity: 0.4 }}>Base: {m.v25}</span>
                                        <span style={{ fontSize: '0.7rem', color: 'var(--color-success)', fontWeight: 800 }}>+{Math.round(((m.v26 - m.v25) / m.v25) * 100)}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Card: Cohort Strategy (Inspired by Geo Panel) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        className="glass-strong"
                        style={{
                            borderRadius: 'var(--radius-3xl)',
                            padding: 'var(--space-xl)',
                            display: 'flex',
                            flexDirection: 'column',
                            borderLeft: '4px solid var(--brand-orange)',
                            boxShadow: 'var(--shadow-xl)'
                        }}
                    >
                        <div style={{ marginBottom: 'var(--space-2xl)' }}>
                            <div className="badge" style={{ background: 'var(--brand-orange)', color: 'white', marginBottom: 'var(--space-md)' }}>NEXT CYCLE</div>
                            <h3 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 900 }}>Cohort 2 <span style={{ color: 'var(--brand-orange)' }}>Scale-Up</span></h3>
                            <p style={{ margin: '8px 0 0', fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Strategic expansion of the resilience network across Gaza.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--space-lg)', flex: 1 }}>
                            {roadmap.map((item, idx) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 + (idx * 0.1) }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-lg)',
                                        padding: 'var(--space-md)',
                                        background: 'rgba(255,255,255,0.03)',
                                        borderRadius: 'var(--radius-2xl)',
                                        border: '1px solid rgba(255,255,255,0.05)'
                                    }}
                                >
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '14px',
                                        background: 'var(--brand-orange)15',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--brand-orange)'
                                    }}>
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 900, lineHeight: 1 }}>{item.value}</div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: '4px' }}>{item.label}</div>
                                        <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>{item.sub}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Impact Badge inspired by Geo footer */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    style={{
                        marginTop: 'var(--space-md)',
                        textAlign: 'center'
                    }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--space-sm)',
                        padding: '10px 24px',
                        background: 'rgba(48, 157, 196, 0.1)',
                        borderRadius: 'full',
                        border: '1px solid rgba(48, 157, 196, 0.2)',
                        fontSize: '0.9rem',
                        fontWeight: 'var(--font-weight-bold)'
                    }}>
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--brand-teal)', boxShadow: '0 0 10px var(--brand-teal)' }} />
                        Targeting 10+ Integrated Hubs by end of 2026 Cycle
                    </div>
                </motion.div>
            </div>
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
