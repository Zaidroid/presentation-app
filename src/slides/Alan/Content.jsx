import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../../components/Slide';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { Heart, Users, Wifi, TrendingUp, Building2, GraduationCap } from 'lucide-react';

// Import reference images
import coworkingTent from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-01-1s at 9.58.54 PM.jpeg';
import beforeOffice1 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-01-18 at 9.58.53 PM.jpeg';
import beforeOffice2 from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-01-18 at 9.58.54 PM.jpeg';
import destruction from '../../../Alan-Slides/alan-slides-pictures/WhatsApp Image 2026-01-18 at 9.58.5s4 PM.jpeg';

const containerVariants = staggerContainer(0.15);

// Emotional Slide: Gaza Resilience
export function GazaResilience() {
    return (
        <Slide>
            {/* Animated Background Images with Transparency */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 1.5 }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    overflow: 'hidden',
                    zIndex: 0
                }}
            >
                {/* Background Image 1 - Left floating */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        left: '-10%',
                        top: '10%',
                        width: '45%',
                        height: '60%',
                        borderRadius: 'var(--radius-3xl)',
                        overflow: 'hidden',
                        opacity: 0.6
                    }}
                >
                    <img
                        src={beforeOffice2}
                        alt=""
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'blur(2px) grayscale(20%)'
                        }}
                    />
                </motion.div>

                {/* Background Image 2 - Right floating */}
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        x: [0, -10, 0]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        right: '-10%',
                        top: '30%',
                        width: '40%',
                        height: '50%',
                        borderRadius: 'var(--radius-3xl)',
                        overflow: 'hidden',
                        opacity: 0.5
                    }}
                >
                    <img
                        src={coworkingTent}
                        alt=""
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'blur(2px) grayscale(10%)'
                        }}
                    />
                </motion.div>

                {/* Background Image 3 - Center subtle */}
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.4, 0.3]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        left: '20%',
                        bottom: '-5%',
                        width: '35%',
                        height: '45%',
                        borderRadius: 'var(--radius-3xl)',
                        overflow: 'hidden'
                    }}
                >
                    <img
                        src={beforeOffice1}
                        alt=""
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'blur(3px) grayscale(30%)'
                        }}
                    />
                </motion.div>

                {/* Gradient overlay to ensure readability */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.85) 0%, rgba(13, 17, 23, 0.75) 100%)',
                    backdropFilter: 'blur(1px)'
                }} />
            </motion.div>

            {/* Main Content - Foreground */}
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                zIndex: 1,
                padding: 'var(--space-2xl) var(--space-3xl)'
            }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    style={{
                        marginBottom: 'var(--space-2xl)'
                    }}
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-sm)',
                        marginBottom: 'var(--space-md)'
                    }}>
                        <Wifi size={20} style={{ color: 'var(--brand-teal)' }} />
                        <span style={{
                            fontSize: 'var(--font-size-sm)',
                            fontWeight: 'var(--font-weight-bold)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: 'var(--brand-teal)'
                        }}>
                            Working Online in Gaza
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(3rem, 6vmin, 5rem)',
                        fontWeight: 'var(--font-weight-extrabold)',
                        margin: 0,
                        lineHeight: 'var(--line-height-tight)'
                    }}>
                        Continued <span className="gradient-text">Resilience</span>
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div style={{
                    flex: 1,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--space-2xl)',
                    alignItems: 'center'
                }}>
                    {/* Left - Key Message */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="glass"
                        style={{
                            padding: 'var(--space-2xl)',
                            borderRadius: 'var(--radius-3xl)',
                            border: '2px solid rgba(48, 157, 196, 0.3)',
                            background: 'rgba(48, 157, 196, 0.05)',
                            backdropFilter: 'blur(20px)'
                        }}
                    >
                        <div style={{
                            fontSize: 'var(--font-size-2xl)',
                            fontWeight: 'var(--font-weight-bold)',
                            lineHeight: 1.4,
                            marginBottom: 'var(--space-lg)',
                            color: 'var(--color-text-primary)'
                        }}>
                            Despite challenging conditions, the tech community continues <span className="gradient-text">learning & earning online</span>
                        </div>
                        <div style={{
                            fontSize: 'var(--font-size-md)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 1.6
                        }}>
                            From professional workspaces to makeshift tent-based coworking spaces, Palestinian tech workers demonstrate remarkable adaptability and determination.
                        </div>
                    </motion.div>

                    {/* Right - Stats Cards */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-lg)'
                    }}>
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.6, type: 'spring', stiffness: 100 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="glass"
                            style={{
                                padding: 'var(--space-xl)',
                                borderRadius: 'var(--radius-2xl)',
                                border: '2px solid rgba(0, 210, 170, 0.3)',
                                background: 'linear-gradient(135deg, rgba(0, 210, 170, 0.08) 0%, transparent 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-lg)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: 'var(--radius-lg)',
                                background: 'rgba(0, 210, 170, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <Building2 size={28} style={{ color: 'var(--color-accent-primary)' }} strokeWidth={2.5} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-tertiary)',
                                    marginBottom: 'var(--space-xs)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    fontWeight: 'var(--font-weight-bold)'
                                }}>
                                    Coworking Spaces
                                </div>
                                <div style={{
                                    fontSize: 'var(--font-size-xl)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    color: 'var(--color-text-primary)'
                                }}>
                                    Tent-based operations in Gaza
                                </div>
                            </div>
                            <div style={{
                                position: 'absolute',
                                top: -20,
                                right: -20,
                                width: 100,
                                height: 100,
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(0, 210, 170, 0.15) 0%, transparent 70%)',
                                pointerEvents: 'none'
                            }} />
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 0.7, duration: 0.6, type: 'spring', stiffness: 100 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="glass"
                            style={{
                                padding: 'var(--space-xl)',
                                borderRadius: 'var(--radius-2xl)',
                                border: '2px solid rgba(48, 157, 196, 0.3)',
                                background: 'linear-gradient(135deg, rgba(48, 157, 196, 0.08) 0%, transparent 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-lg)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: 'var(--radius-lg)',
                                background: 'rgba(48, 157, 196, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <Users size={28} style={{ color: 'var(--brand-teal)' }} strokeWidth={2.5} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-tertiary)',
                                    marginBottom: 'var(--space-xs)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    fontWeight: 'var(--font-weight-bold)'
                                }}>
                                    Community
                                </div>
                                <div style={{
                                    fontSize: 'var(--font-size-xl)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    color: 'var(--color-text-primary)'
                                }}>
                                    Adapting & thriving together
                                </div>
                            </div>
                            <div style={{
                                position: 'absolute',
                                top: -20,
                                right: -20,
                                width: 100,
                                height: 100,
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(48, 157, 196, 0.15) 0%, transparent 70%)',
                                pointerEvents: 'none'
                            }} />
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.6, type: 'spring', stiffness: 100 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="glass"
                            style={{
                                padding: 'var(--space-xl)',
                                borderRadius: 'var(--radius-2xl)',
                                border: '2px solid rgba(231, 139, 63, 0.3)',
                                background: 'linear-gradient(135deg, rgba(231, 139, 63, 0.08) 0%, transparent 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-lg)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: 'var(--radius-lg)',
                                background: 'rgba(231, 139, 63, 0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <TrendingUp size={28} style={{ color: 'var(--brand-orange)' }} strokeWidth={2.5} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-tertiary)',
                                    marginBottom: 'var(--space-xs)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    fontWeight: 'var(--font-weight-bold)'
                                }}>
                                    Operations
                                </div>
                                <div style={{
                                    fontSize: 'var(--font-size-xl)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    color: 'var(--color-text-primary)'
                                }}>
                                    Continuous online work
                                </div>
                            </div>
                            <div style={{
                                position: 'absolute',
                                top: -20,
                                right: -20,
                                width: 100,
                                height: 100,
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(231, 139, 63, 0.15) 0%, transparent 70%)',
                                pointerEvents: 'none'
                            }} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

// Data Slide: Post-2023 Impact
export function Post2023Impact() {
    const metrics = [
        {
            icon: Users,
            number: '5,000',
            label: 'Individuals',
            subtitle: '30% from Gaza',
            detail: '2,000 training graduates + 3,000 awareness participants',
            color: 'var(--brand-teal)',
            delay: 0.3
        },
        {
            icon: Building2,
            number: '35',
            label: 'Companies',
            subtitle: 'Supported in 2025',
            detail: 'Across Gaza and West Bank',
            color: 'var(--brand-orange)',
            delay: 0.4
        },
        {
            icon: Wifi,
            number: '5',
            label: 'Coworking Spaces',
            subtitle: 'Funded in Gaza',
            detail: 'Foundation for revival',
            color: 'var(--color-success)',
            delay: 0.5
        },
        {
            icon: GraduationCap,
            number: 'Q4 2025',
            label: 'Return to Gaza',
            subtitle: 'On-ground training',
            detail: 'Resumed inside Gaza',
            color: 'var(--brand-red)',
            delay: 0.6
        }
    ];

    return (
        <Slide>
            {/* Background Effects */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 70% 30%, rgba(0, 210, 170, 0.12) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(48, 157, 196, 0.08) 0%, transparent 50%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 'var(--space-2xl) var(--space-3xl)',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    style={{
                        marginBottom: 'var(--space-xl)',
                        textAlign: 'center'
                    }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--space-sm)',
                        marginBottom: 'var(--space-md)',
                        padding: 'var(--space-sm) var(--space-lg)',
                        background: 'rgba(0, 210, 170, 0.1)',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(0, 210, 170, 0.3)'
                    }}>
                        <TrendingUp size={20} style={{ color: 'var(--color-accent-primary)' }} />
                        <span style={{
                            fontSize: 'var(--font-size-sm)',
                            fontWeight: 'var(--font-weight-bold)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: 'var(--color-accent-primary)'
                        }}>
                            Continued Operations
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(3rem, 6vmin, 5rem)',
                        fontWeight: 'var(--font-weight-extrabold)',
                        margin: 0,
                        lineHeight: 'var(--line-height-tight)'
                    }}>
                        GSG <span className="gradient-text">Never Stopped</span>
                    </h2>
                    <p style={{
                        fontSize: 'var(--font-size-xl)',
                        color: 'var(--color-text-secondary)',
                        marginTop: 'var(--space-md)',
                        maxWidth: '800px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontWeight: 'var(--font-weight-medium)'
                    }}>
                        Our impact in 2025 - working with Palestinians despite the war
                    </p>
                </motion.div>

                {/* Metrics Grid */}
                <div style={{
                    flex: 1,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-xl)',
                    alignContent: 'center'
                }}>
                    {metrics.map((metric, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                delay: metric.delay,
                                duration: 0.6,
                                type: 'spring',
                                stiffness: 100
                            }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="glass"
                            style={{
                                padding: 'var(--space-xl)',
                                borderRadius: 'var(--radius-3xl)',
                                border: `2px solid ${metric.color}40`,
                                background: `linear-gradient(135deg, ${metric.color}08 0%, transparent 100%)`,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--space-md)',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: `0 8px 32px ${metric.color}15`
                            }}
                        >
                            {/* Icon */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: 'var(--radius-xl)',
                                    background: `${metric.color}20`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: metric.color
                                }}>
                                    <metric.icon size={32} strokeWidth={2.5} />
                                </div>
                            </div>

                            {/* Number */}
                            <div>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: metric.delay + 0.2, duration: 0.5 }}
                                    style={{
                                        fontSize: 'clamp(2.5rem, 5vmin, 4rem)',
                                        fontWeight: 900,
                                        lineHeight: 1,
                                        color: metric.color,
                                        marginBottom: 'var(--space-xs)'
                                    }}
                                >
                                    {metric.number}
                                </motion.div>
                                <div style={{
                                    fontSize: 'var(--font-size-xl)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    marginBottom: 'var(--space-xs)',
                                    color: 'var(--color-text-primary)'
                                }}>
                                    {metric.label}
                                </div>
                                <div style={{
                                    fontSize: 'var(--font-size-md)',
                                    color: metric.color,
                                    fontWeight: 'var(--font-weight-semibold)',
                                    marginBottom: 'var(--space-sm)'
                                }}>
                                    {metric.subtitle}
                                </div>
                            </div>

                            {/* Detail */}
                            <div style={{
                                fontSize: 'var(--font-size-sm)',
                                color: 'var(--color-text-tertiary)',
                                padding: 'var(--space-sm)',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: 'var(--radius-lg)',
                                borderLeft: `3px solid ${metric.color}`
                            }}>
                                {metric.detail}
                            </div>

                            {/* Decorative element */}
                            <div style={{
                                position: 'absolute',
                                top: -20,
                                right: -20,
                                width: 100,
                                height: 100,
                                borderRadius: '50%',
                                background: `radial-gradient(circle, ${metric.color}15 0%, transparent 70%)`,
                                pointerEvents: 'none'
                            }} />
                        </motion.div>
                    ))}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="glass"
                    style={{
                        marginTop: 'var(--space-xl)',
                        padding: 'var(--space-lg) var(--space-xl)',
                        borderRadius: 'var(--radius-2xl)',
                        border: '2px solid var(--color-border-subtle)',
                        textAlign: 'center',
                        background: 'rgba(48, 157, 196, 0.05)'
                    }}
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'var(--space-md)'
                    }}>
                        <div style={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: 'var(--color-accent-primary)',
                            boxShadow: '0 0 12px var(--color-accent-primary)'
                        }} />
                        <p style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'var(--font-weight-semibold)',
                            margin: 0,
                            color: 'var(--color-text-primary)'
                        }}>
                            Delivered online from Ramallah team + reduced Gaza team during the war
                        </p>
                    </div>
                </motion.div>
            </div>
        </Slide>
    );
}
