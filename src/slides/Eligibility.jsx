import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { FileCheck, Building2, Handshake, Heart, MapPin, Monitor, CheckCircle, ArrowUpRight } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const CriteriaCard = ({ icon: Icon, title, desc, delay, number }) => (
    <motion.div
        variants={fadeInUp}
        custom={delay}
        whileHover={{
            scale: 1.02,
            backgroundColor: 'rgba(255, 255, 255, 0.07)',
            borderColor: 'var(--color-accent-primary)'
        }}
        style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
            height: '100%'
        }}
    >
        {/* Glow Effect */}
        <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-20%',
            width: '80px',
            height: '80px',
            background: 'var(--color-accent-primary)',
            filter: 'blur(40px)',
            opacity: 0.1,
            borderRadius: '50%'
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, var(--color-surface), rgba(255,255,255,0.05))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-accent-primary)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}>
                <Icon size={24} strokeWidth={1.5} />
            </div>
            <div style={{
                fontSize: '1.5rem',
                fontWeight: 900,
                opacity: 0.1,
                color: 'white',
                lineHeight: 1
            }}>
                {String(number).padStart(2, '0')}
            </div>
        </div>

        <div>
            <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '0.4rem',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {title}
                <ArrowUpRight size={14} style={{ opacity: 0.3 }} />
            </h3>
            <p style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.4,
                margin: 0,
                opacity: 0.8
            }}>
                {desc}
            </p>
        </div>
    </motion.div>
);

export default function Eligibility() {
    const criteria = [
        {
            icon: Handshake,
            title: "Legal & Banking",
            desc: "Officially registered company with a corporate bank account in the company's name.",
            delay: 0
        },
        {
            icon: Building2,
            title: "Market Presence",
            desc: "Established and operating company with at least one active client.",
            delay: 0.1
        },
        {
            icon: Heart,
            title: "IT Social Impact",
            desc: "Objectives supporting job creation for Palestinian women and youth in the IT sector.",
            delay: 0.2
        },
        {
            icon: MapPin,
            title: "Verified Premises",
            desc: "Maintenance of an official address and registered premises in Palestine.",
            delay: 0.3
        },
        {
            icon: Monitor,
            title: "Digital Sector",
            desc: "Operating specifically within digital services and software development fields.",
            delay: 0.4
        },
        {
            icon: FileCheck,
            title: "Full Application",
            desc: "Completion and submission of the formal program application.",
            delay: 0.5
        }
    ];

    return (
        <Slide>
            {/* High-End Background System */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: -1,
                overflow: 'hidden',
                background: 'radial-gradient(circle at 0% 0%, rgba(222, 99, 54, 0.05) 0%, transparent 40%), radial-gradient(circle at 100% 100%, rgba(7, 188, 12, 0.03) 0%, transparent 40%)'
            }}>
                {/* Abstract Line Art */}
                <svg width="100%" height="100%" style={{ opacity: 0.1 }}>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Moving Orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '20%',
                        left: '10%',
                        width: '400px',
                        height: '400px',
                        background: 'var(--color-accent-primary)',
                        filter: 'blur(120px)',
                        borderRadius: '50%',
                    }}
                />
            </div>

            <div style={{
                width: '100%',
                height: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1.5fr',
                gap: '4rem',
                alignItems: 'center',
                padding: '0 6rem'
            }}>
                {/* Left: Dramatic Title Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer(0.1)}
                >
                    <motion.div variants={fadeInUp}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.5rem 1.25rem',
                            background: 'rgba(222, 99, 54, 0.1)',
                            border: '1px solid rgba(222, 99, 54, 0.2)',
                            borderRadius: '100px',
                            color: 'var(--color-accent-primary)',
                            fontSize: '0.8rem',
                            fontWeight: 800,
                            letterSpacing: '2px',
                            marginBottom: '2rem',
                            textTransform: 'uppercase'
                        }}>
                            <CheckCircle size={14} />
                            Strategic Partners
                        </div>
                    </motion.div>

                    <motion.h2
                        variants={fadeInUp}
                        style={{
                            fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
                            fontWeight: 900,
                            lineHeight: 1,
                            margin: 0,
                            letterSpacing: '-2px'
                        }}
                    >
                        Eligibility<br />
                        <span className="gradient-text">Criteria</span>
                    </motion.h2>

                    <motion.div
                        variants={fadeInUp}
                        style={{
                            width: '60px',
                            height: '4px',
                            background: 'var(--gradient-primary)',
                            borderRadius: '2px',
                            margin: '2rem 0'
                        }}
                    />

                    <motion.p
                        variants={fadeInUp}
                        style={{
                            fontSize: '1.25rem',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 1.5,
                            maxWidth: '400px',
                            opacity: 0.8
                        }}
                    >
                        We seek high-potential companies ready to scale their impact and define the future of Palestinian tech.
                    </motion.p>
                </motion.div>

                {/* Right: Sophisticated Component Grid */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer(0.08)}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1.5rem'
                    }}
                >
                    {criteria.map((item, index) => (
                        <CriteriaCard key={index} {...item} number={index + 1} />
                    ))}
                </motion.div>
            </div>
        </Slide>
    );
}
