import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { Mail, Phone, Users, ShieldCheck, ExternalLink } from 'lucide-react';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/animations';

const CARM = () => {
    const channels = [
        {
            icon: Mail,
            label: 'Email Support',
            value: 'ps-carm@mercycorps.org',
            subValue: 'Primary Channel',
            color: 'var(--color-accent-primary)'
        },
        {
            icon: Mail,
            label: 'Feedback Email',
            value: 'ps-fcarm@mercycorps.org',
            subValue: 'Feedback & Suggestions',
            color: 'var(--color-accent-secondary)'
        },
        {
            icon: Phone,
            label: 'Hotline',
            value: '1800 130 131',
            subValue: 'Toll-free Support',
            color: '#3b82f6'
        },
        {
            icon: Users,
            label: 'Face to Face',
            value: 'In-Person',
            subValue: 'All GSG Staff Members',
            color: '#10b981'
        }
    ];

    return (
        <Slide>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer(0.15)}
                className="w-full h-full flex flex-col items-center justify-center relative p-12"
            >
                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                        <ShieldCheck size={16} className="text-accent-secondary" />
                        <span className="text-xs font-bold tracking-widest uppercase text-accent-secondary">Accountability & Reporting</span>
                    </motion.div>

                    <motion.h2 variants={fadeInUp} className="text-5xl font-black mb-4">
                        We Are Here <span className="gradient-text">To Listen</span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Community Accountability Reporting Mechanisms (CARM) ensure transparency and trust in all our operations.
                    </motion.p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-2 gap-8 w-full max-w-5xl z-10">
                    {channels.map((channel, idx) => (
                        <motion.div
                            key={idx}
                            variants={scaleIn}
                            whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                            className="glass-strong p-8 rounded-3xl flex items-center gap-6 border border-white/5 transition-colors cursor-default group"
                        >
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                                style={{ background: `rgba(255,255,255,0.05)`, border: `1px solid ${channel.color}40` }}
                            >
                                <channel.icon size={32} style={{ color: channel.color }} />
                            </div>

                            <div className="flex flex-col">
                                <span className="text-sm text-text-tertiary font-semibold uppercase tracking-wider mb-1">{channel.label}</span>
                                <span className="text-2xl font-bold text-white mb-1 group-hover:text-accent-primary transition-colors">{channel.value}</span>
                                <span className="text-sm text-text-secondary opacity-70">{channel.subValue}</span>
                            </div>

                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                <ExternalLink size={20} className="text-white/30" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mercy Corps Logo Placeholder / Branding */}
                <motion.div
                    variants={fadeInUp}
                    className="absolute bottom-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    {/* Replace with actual SVG or Image if available, text for now */}
                    <div className="flex items-center gap-3">
                        <div className="h-px w-12 bg-white/30"></div>
                        <span className="text-sm font-semibold tracking-widest uppercase">Mercy Corps Global</span>
                        <div className="h-px w-12 bg-white/30"></div>
                    </div>
                </motion.div>

                {/* Decorative Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-accent-primary/5 via-transparent to-accent-secondary/5 blur-[120px] rounded-full z-0 pointer-events-none" />
            </motion.div>
        </Slide>
    );
};

export default CARM;
