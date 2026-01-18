import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../../components/Slide';
import { FeatureCard } from '../../components/Card';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { Megaphone, Palette, Search, Users, ExternalLink, Globe, Wifi, Clock, Zap, Briefcase, TrendingUp, ArrowDown } from 'lucide-react';

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
    const [activeCategory, setActiveCategory] = React.useState(null);

    const categories = [
        {
            id: 'connectivity',
            label: 'Network Strength',
            icon: Wifi,
            color: 'var(--brand-teal)',
            metrics: [
                { label: 'Bandwidth Speed', v25: '125', v26: '162.5', unit: 'Mbps', growth: '+30%' },
                { label: 'Individual Experience', v25: '4.5', v26: '7.5', unit: 'Mbps', growth: '+66.7%' }
            ]
        },
        {
            id: 'availability',
            label: 'Service Continuity',
            icon: Clock,
            color: 'var(--brand-orange)',
            metrics: [
                { label: 'Operating Hours', v25: '10', v26: '12.2', unit: 'H/D', growth: '+22%' },
                { label: 'Utilization Rate', v25: '50.4%', v26: '61.7%', unit: '', growth: '+11.3%' }
            ]
        },
        {
            id: 'community',
            label: 'Ecosystem Scale',
            icon: Users,
            color: 'var(--brand-navy)',
            metrics: [
                { label: 'Space Capacity', v25: '45', v26: '54', unit: 'Seats', growth: '+19.5%' },
                { label: 'Active Users', v25: '22', v26: '33', unit: 'Users', growth: '+52%' }
            ]
        },
        {
            id: 'resilience',
            label: 'Cost Resilience',
            icon: ArrowDown,
            color: 'var(--brand-red)',
            metrics: [
                { label: 'Membership Cost', v25: '600', v26: '450', unit: 'ILS', growth: '-25%' }
            ]
        }
    ];

    return (
        <Slide>
            {/* Immersive Background */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 50% 50%, rgba(48, 157, 196, 0.08) 0%, transparent 70%)',
                }} />

                {/* Animated Particles/Nodes Background */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        opacity: 0.1,
                        background: 'repeating-radial-gradient(circle at 50% 50%, white 0, white 1px, transparent 1px, transparent 100px)',
                    }}
                />
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
                {/* Central Focus Title */}
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
                    <motion.div variants={fadeInUp} className="badge" style={{ background: 'var(--brand-red)', color: 'white', marginBottom: 'var(--space-sm)' }}>
                        RESILIENCE NETWORK 2026
                    </motion.div>
                    <motion.h2
                        variants={fadeInUp}
                        style={{ fontSize: 'clamp(3rem, 6vmin, 4.5rem)', fontWeight: 900, margin: 0 }}
                    >
                        Spatial <span className="gradient-text">Impact</span> View
                    </motion.h2>
                </div>

                {/* Spatial Interface */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(350px, 1fr) 2fr',
                    gap: 'var(--space-3xl)',
                    flex: 1,
                    alignItems: 'center'
                }}>

                    {/* Left: Category Orbiters */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={cat.id}
                                variants={fadeInUp}
                                whileHover={{ x: 10 }}
                                onMouseEnter={() => setActiveCategory(cat)}
                                style={{
                                    padding: 'var(--space-lg)',
                                    borderRadius: 'var(--radius-2xl)',
                                    background: activeCategory?.id === cat.id ? 'var(--color-surface-elevated)' : 'rgba(255,255,255,0.03)',
                                    border: `1px solid ${activeCategory?.id === cat.id ? cat.color : 'rgba(255,255,255,0.05)'}`,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-lg)',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: activeCategory?.id === cat.id ? `0 10px 30px ${cat.color}15` : 'none'
                                }}
                            >
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '14px',
                                    background: `${cat.color}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: cat.color,
                                    boxShadow: activeCategory?.id === cat.id ? `0 0 20px ${cat.color}30` : 'none'
                                }}>
                                    <cat.icon size={24} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: activeCategory?.id === cat.id ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)' }}>
                                        {cat.label}
                                    </div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.6, letterSpacing: '0.5px' }}>
                                        {cat.metrics.length} Critical Indicators
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Expansion Insight */}
                        <motion.div
                            variants={fadeInUp}
                            className="glass-strong"
                            style={{
                                marginTop: 'var(--space-xl)',
                                padding: 'var(--space-lg)',
                                borderRadius: 'var(--radius-xl)',
                                borderLeft: '4px solid var(--brand-orange)'
                            }}
                        >
                            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-orange)' }}>Expansion Focus</div>
                            <div style={{ fontSize: '1.4rem', fontWeight: 900 }}>7-10 New Hubs</div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>Targeting Feb 2026 Resilience Expansion</div>
                        </motion.div>
                    </div>

                    {/* Right: Immersive Metric Display */}
                    <div className="glass-strong" style={{
                        height: '100%',
                        borderRadius: 'var(--radius-3xl)',
                        padding: 'var(--space-3xl)',
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <AnimatePresence mode="wait">
                            {activeCategory ? (
                                <motion.div
                                    key={activeCategory.id}
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.05, y: -20 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-2xl)' }}>
                                        <div style={{ color: activeCategory.color }}><activeCategory.icon size={32} /></div>
                                        <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: 900 }}>{activeCategory.label}</h3>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', flex: 1, justifyContent: 'center' }}>
                                        {activeCategory.metrics.map((m, i) => (
                                            <div key={m.label} style={{ position: 'relative' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '10px' }}>
                                                    <div>
                                                        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-tertiary)', marginBottom: '4px' }}>{m.label}</div>
                                                        <div style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1 }}>{m.v26} <span style={{ fontSize: '1rem', opacity: 0.5 }}>{m.unit}</span></div>
                                                    </div>
                                                    <div style={{ textAlign: 'right' }}>
                                                        <div style={{
                                                            fontSize: '1.2rem',
                                                            fontWeight: 800,
                                                            color: m.growth.includes('-') ? 'var(--brand-red)' : 'var(--color-success)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '4px',
                                                            justifyContent: 'flex-end'
                                                        }}>
                                                            {m.growth.includes('+') && <TrendingUp size={20} />}
                                                            {m.growth}
                                                        </div>
                                                        <div style={{ fontSize: '0.8rem', opacity: 0.4 }}>vs {m.v25} base</div>
                                                    </div>
                                                </div>

                                                {/* Animated Progress Bar Container */}
                                                <div style={{
                                                    height: '14px',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    borderRadius: '7px',
                                                    position: 'relative',
                                                    overflow: 'hidden'
                                                }}>
                                                    {/* Baseline marker */}
                                                    <div style={{
                                                        position: 'absolute',
                                                        left: '60%',
                                                        top: 0,
                                                        bottom: 0,
                                                        width: '2px',
                                                        background: 'rgba(255,255,255,0.2)',
                                                        zIndex: 2
                                                    }} />

                                                    {/* Active Growth Bar */}
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: '85%' }}
                                                        transition={{ duration: 1.5, delay: 0.2 + (i * 0.2), ease: "circOut" }}
                                                        style={{
                                                            height: '100%',
                                                            background: i === 0 ? `linear-gradient(90deg, ${activeCategory.color}22, ${activeCategory.color})` : 'var(--color-accent-primary)',
                                                            borderRadius: '7px',
                                                            boxShadow: `0 0 20px ${activeCategory.color}44`
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div style={{ marginTop: 'auto', paddingTop: 'var(--space-xl)', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 'var(--space-xl)' }}>
                                        <div style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', textAlign: 'center' }}>
                                            <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>RESILIENCE INDEX</div>
                                            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: activeCategory.color }}>OPTIMIZED</div>
                                        </div>
                                        <div style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', textAlign: 'center' }}>
                                            <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>STATUS</div>
                                            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-success)' }}>ACTIVE</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
                                >
                                    <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--brand-teal)11', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-xl)' }}>
                                        <Compass size={60} className="glow" style={{ color: 'var(--brand-teal)' }} />
                                    </div>
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Select a Dimension</h3>
                                    <p style={{ opacity: 0.6, maxWidth: '300px' }}>Explore the detailed resilience metrics of the Gaza Coworking Network.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Background HUD elements */}
                        <div style={{ position: 'absolute', bottom: '-5%', right: '-5%', width: '300px', height: '300px', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '50%', pointerEvents: 'none' }} />
                        <div style={{ position: 'absolute', top: '10%', right: '5%', opacity: 0.05, pointerEvents: 'none' }}>
                            <Zap size={200} />
                        </div>
                    </div>
                </div>
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
