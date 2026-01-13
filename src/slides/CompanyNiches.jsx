import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from '../components/Slide';
import { staggerContainer, fadeInUp } from '../utils/animations';
import AnimatedMetric from '../components/AnimatedMetric';

// Sector data
const sectors = [
    { name: 'Software Development', count: 22 },
    { name: 'Digital Services', count: 14 },
    { name: 'Frontier Tech', count: 10 },
    { name: 'Business Solutions', count: 9 },
    { name: 'EdTech & Learning', count: 8 },
    { name: 'Advisory & M&E', count: 7 },
];

const totalCompanies = 70;
const maxCount = Math.max(...sectors.map(s => s.count));

const SectorBar = ({ name, count, index, isHighlighted }) => (
    <motion.div
        animate={{
            scale: isHighlighted ? 1.02 : 1,
            x: isHighlighted ? 8 : 0,
        }}
        transition={{ duration: 0.4 }}
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.25rem',
        }}
    >
        {/* Sector Name */}
        <div style={{
            width: '180px',
            fontSize: '1rem',
            color: isHighlighted ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
            fontWeight: isHighlighted ? 600 : 400,
            textAlign: 'right',
            transition: 'all 0.3s ease',
        }}>
            {name}
        </div>

        {/* Bar */}
        <div style={{
            flex: 1,
            height: '32px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '6px',
            overflow: 'hidden',
        }}>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(count / maxCount) * 100}%` }}
                transition={{ delay: index * 0.12 + 0.5, duration: 0.8, ease: 'easeOut' }}
                style={{
                    height: '100%',
                    background: isHighlighted
                        ? 'var(--gradient-primary)'
                        : 'linear-gradient(90deg, rgba(222, 99, 54, 0.7), rgba(222, 99, 54, 0.4))',
                    borderRadius: '6px',
                    boxShadow: isHighlighted ? '0 0 15px rgba(222, 99, 54, 0.4)' : 'none',
                    transition: 'all 0.3s ease',
                }}
            />
        </div>

        {/* Count - Outside the bar for readability */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.12 + 1 }}
            style={{
                width: '40px',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: isHighlighted ? 'var(--color-accent-primary)' : 'var(--color-text-primary)',
                textAlign: 'left',
                transition: 'all 0.3s ease',
            }}
        >
            {count}
        </motion.div>
    </motion.div>
);

export default function CompanyNiches() {
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    // Cycle through highlighting each sector
    useEffect(() => {
        const interval = setInterval(() => {
            setHighlightedIndex(prev => (prev + 1) % (sectors.length + 2));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer(0.1)}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    gap: '5rem',
                    padding: '0 5rem',
                    alignItems: 'center',
                }}
            >
                {/* Left Side: Big Number */}
                <motion.div
                    variants={fadeInUp}
                    style={{
                        flex: '0 0 280px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        position: 'relative',
                    }}
                >
                    {/* Pulsing glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.2, 0.35, 0.2],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            width: '220px',
                            height: '220px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(222, 99, 54, 0.5) 0%, transparent 70%)',
                            filter: 'blur(50px)',
                            zIndex: 0,
                        }}
                    />

                    <div style={{
                        fontSize: '5rem',
                        fontWeight: 800,
                        lineHeight: 1,
                        marginBottom: '0.5rem',
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'center',
                    }}>
                        <span style={{ display: 'inline-block' }}>
                            <AnimatedMetric value={totalCompanies} duration={2.5} delay={0.3} />
                        </span>
                        <span className="gradient-text" style={{ marginLeft: '0.1em' }}>+</span>
                    </div>
                    <div style={{
                        fontSize: '1.3rem',
                        color: 'var(--color-text-primary)',
                        fontWeight: 600,
                        marginBottom: '0.75rem',
                        position: 'relative',
                        zIndex: 1,
                    }}>
                        Tech Companies
                    </div>
                    <div style={{
                        fontSize: '1rem',
                        color: 'var(--color-text-tertiary)',
                        position: 'relative',
                        zIndex: 1,
                    }}>
                        Gaza & West Bank
                    </div>

                    {/* Rotating taglines */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={Math.floor(highlightedIndex / 2)}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                marginTop: '2rem',
                                padding: '0.6rem 1.25rem',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '20px',
                                fontSize: '0.85rem',
                                color: 'var(--color-text-secondary)',
                                border: '1px solid rgba(255,255,255,0.08)',
                            }}
                        >
                            {highlightedIndex % 3 === 0 && "Cohort 1 & 2 Combined"}
                            {highlightedIndex % 3 === 1 && "Across Multiple Sectors"}
                            {highlightedIndex % 3 === 2 && "Growing Every Year"}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Right Side: Sector Breakdown */}
                <div style={{ flex: 1 }}>
                    <motion.h2
                        variants={fadeInUp}
                        style={{
                            fontSize: '2rem',
                            fontWeight: 700,
                            marginBottom: '2rem',
                        }}
                    >
                        Sector <span className="gradient-text">Breakdown</span>
                    </motion.h2>

                    {sectors.map((sector, i) => (
                        <SectorBar
                            key={i}
                            {...sector}
                            index={i}
                            isHighlighted={highlightedIndex === i}
                        />
                    ))}

                    <motion.div
                        variants={fadeInUp}
                        style={{
                            marginTop: '2rem',
                            display: 'flex',
                            gap: '2rem',
                            fontSize: '0.9rem',
                            color: 'var(--color-text-tertiary)',
                        }}
                    >
                        <span>Elevate 1: 25 companies</span>
                        <span>•</span>
                        <span>Elevate 2: 35 companies</span>
                    </motion.div>
                </div>
            </motion.div>
        </Slide>
    );
}
