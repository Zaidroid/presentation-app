import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

export default function SectionIntroCinematic({ title, subtitle, presenter, role, presenterPhoto, part, topImage }) {
    return (
        <Slide>
            <div className="w-full h-full flex flex-col items-center justify-center relative z-10 p-8">

                {/* 1. Part Badge (Floating Top) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="badge badge-primary mb-12"
                >
                    {part}
                </motion.div>

                {/* 2. Hero Content (Flexible Center) */}
                <div className="flex-grow flex flex-col items-center justify-center w-full max-w-5xl mb-16">
                    {topImage ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            {/* MASSIVE LOGO for Raouf */}
                            <img
                                src={topImage}
                                alt="Section Logo"
                                className="w-auto drop-shadow-2xl"
                                style={{ maxHeight: '320px', marginBottom: '2rem' }}
                            />
                            <h1 className="text-5xl font-extrabold text-white/90 tracking-tight">
                                {title}
                            </h1>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center"
                        >
                            <h1 className="text-8xl font-black mb-6 leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50">
                                {title}
                            </h1>
                            {subtitle && (
                                <h2 className="text-4xl font-bold gradient-text">
                                    {subtitle}
                                </h2>
                            )}
                        </motion.div>
                    )}
                </div>

                {/* 3. Horizontal Speaker Bar (Compact Bottom) */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                    className="glass-strong rounded-full p-3 pr-12 flex items-center gap-6"
                    style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                >
                    {/* Photo Circle */}
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-primary shadow-lg shrink-0">
                        {presenterPhoto ? (
                            <img
                                src={presenterPhoto}
                                alt={presenter}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-surface-dark flex items-center justify-center text-white font-bold">
                                {presenter?.[0]}
                            </div>
                        )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-col items-start">
                        <span className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-0.5">
                            Presented By
                        </span>
                        <div className="flex items-baseline gap-3">
                            <h3 className="text-xl font-bold text-white">
                                {presenter}
                            </h3>
                            {role && (
                                <>
                                    <span className="text-white/20">•</span>
                                    <span className="text-sm text-accent-primary font-medium">
                                        {role}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>

            </div>
        </Slide>
    );
}
