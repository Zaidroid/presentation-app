import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

export default function SectionIntro({ title, subtitle, presenter, role, presenterPhoto, part, topImage }) {
    return (
        <Slide>
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '900px', margin: '0 auto' }}>
                {/* Part Badge */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="badge badge-primary"
                    style={{
                        marginBottom: topImage ? 'var(--space-md)' : 'var(--space-3xl)',
                        padding: 'var(--space-md) var(--space-2xl)',
                        fontSize: 'var(--font-size-base)',
                    }}
                >
                    {part}
                </motion.div>

                {/* Optional Top Image (Logo) */}
                {topImage && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        style={{
                            marginBottom: 'var(--space-md)',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <img src={topImage} alt="Section Logo" style={{ maxHeight: '280px', width: 'auto', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))', objectFit: 'contain' }} />
                    </motion.div>
                )}

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    style={{
                        fontSize: topImage ? '3.5rem' : 'clamp(3rem, 8vmin, 7rem)',
                        fontWeight: 'var(--font-weight-extrabold)',
                        marginBottom: topImage ? 'var(--space-md)' : 'var(--space-lg)',
                        lineHeight: 'var(--line-height-tight)',
                    }}
                >
                    {title}
                </motion.h1>

                {/* Subtitle with gradient underline - Only render if subtitle exists */}
                {subtitle && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <h2
                            className="gradient-text"
                            style={{
                                fontSize: 'clamp(1.75rem, 3.5vmin, 3rem)',
                                fontWeight: 'var(--font-weight-semibold)',
                                marginBottom: 'var(--space-3xl)',
                            }}
                        >
                            {subtitle}
                        </h2>

                        {/* Decorative animated line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '200px' }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            style={{
                                height: '4px',
                                background: 'var(--gradient-accent)',
                                margin: '0 auto var(--space-3xl)',
                                borderRadius: 'var(--radius-full)',
                                boxShadow: 'var(--shadow-glow)',
                            }}
                        />
                    </motion.div>
                )}

                {/* Separator if no subtitle but logo exists (to separate title from speaker) */}
                {!subtitle && topImage && (
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100px' }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        style={{
                            height: '2px',
                            background: 'rgba(255,255,255,0.1)',
                            margin: '0 auto var(--space-xl)',
                            borderRadius: 'var(--radius-full)',
                        }}
                    />
                )}

                {/* Presenter info */}
                {(presenter || presenterPhoto) && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 'var(--space-sm)',
                            marginTop: 'var(--space-lg)'
                        }}
                    >
                        {presenterPhoto ? (
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '3px solid var(--color-accent-primary)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                position: 'relative'
                            }}>
                                <img
                                    src={presenterPhoto}
                                    alt={presenter}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'top'
                                    }}
                                />
                            </div>
                        ) : (
                            // Fallback to old chip if no photo
                            <div
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-md)',
                                    padding: 'var(--space-lg) var(--space-2xl)',
                                    background: 'var(--color-surface)',
                                    backdropFilter: 'blur(var(--glass-blur))',
                                    borderRadius: 'var(--radius-full)',
                                    border: '1px solid var(--color-border-subtle)',
                                    boxShadow: 'var(--shadow-lg)',
                                }}
                            >
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-tertiary)', marginBottom: '0.15rem' }}>
                                        Presented by
                                    </div>
                                    <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-primary)' }}>
                                        {presenter}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                color: 'var(--color-text-secondary)',
                                background: 'rgba(0,0,0,0.2)',
                                padding: '4px 12px',
                                borderRadius: '12px',
                                backdropFilter: 'blur(4px)',
                                marginBottom: '4px'
                            }}>
                                {presenter}
                            </span>
                            {role && (
                                <span style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--color-text-tertiary)',
                                    fontWeight: 500,
                                    letterSpacing: '0.5px'
                                }}>
                                    {role}
                                </span>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </Slide>
    );
}
