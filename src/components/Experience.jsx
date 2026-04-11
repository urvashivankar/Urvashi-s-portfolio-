import { memo } from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Star, ArrowUpRight, GraduationCap, Building2 } from 'lucide-react';

const experiences = [
    {
        title: "AQUA GUARDIAN",
        type: "Top 10 Innovation – Gujarat Showcase",
        period: "2025 - 2026",
        outcome: "Architected a full-stack AI-powered water pollution reporting and monitoring system, enabling real-time validation and tracking. Reduced manual validation time by 70%. Recognized among the Top 10 innovations at a Gujarat Innovation Showcase event.",
        icon: <Star size={20} />,
        color: "bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
    },
    {
        title: "MaMo TechnoLabs LLP",
        type: "Full Stack Development",
        period: "2026",
        outcome: "Contributed as a full-stack developer intern, building real-world web and app solutions in a collaborative team setting (On-site).",
        icon: <Building2 size={20} />,
        color: "bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
    },

    {
        title: "CII & YI Events",
        type: "EVENT COORDINATION",
        period: "2025-2026",
        outcome: "Spearheaded end-to-end coordination for high-profile events organized by the Confederation of Indian Industry (CII) and the Young Indians (Yi) chapter. Managed logistics, speaker coordination, delegate engagement, and on-site execution for events that brought together industry leaders, entrepreneurs, and policymakers.",
        icon: <Users size={20} />,
        color: "bg-pink-500/20 shadow-[0_0_15px_rgba(244,114,182,0.2)]"
    },
    {
        title: "KS Technologies",
        type: "Python Developer",
        period: "2022",
        outcome: "Developed Python backend features and performed API integrations for web applications during a project, building a strong foundation in backend development.",
        icon: <Building2 size={20} />,
        color: "bg-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
    },

];

const education = [
    {
        title: "B.Tech CSE",
        type: "Parul University",
        period: "2023 - 2026 | 8.0 CGPA",
        outcome: "Focused on AI, Machine Learning, and Full-Stack Development.",
        icon: <GraduationCap size={20} />,
        color: "bg-blue-600/20 shadow-[0_0_15px_rgba(37,99,235,0.2)]"
    },
    {
        title: "Diploma in Computer Science",
        type: "Parul Polytechnic Institute",
        period: "2020 - 2023 | 8 CGPA",
        outcome: "Acquired fundamental knowledge in software engineering, database management, and system architecture.",
        icon: <GraduationCap size={20} />,
        color: "bg-indigo-600/20 shadow-[0_0_15px_rgba(79,70,229,0.2)]"
    }
];


const Experience = memo(() => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                {/* Work Experience Section */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="h-px w-8 bg-primary" />
                            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Professional Proof</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-grotesk font-bold text-white tracking-tighter leading-none"
                        >
                            Work <br /><span className="text-gradient">Experience.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-24">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: 20, filter: 'blur(15px)' }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1.2, type: "spring", bounce: 0.4, delay: index * 0.15 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="glass p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start group hover:border-primary/30 transition-all border-white/5 shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
                        >
                            <div className={`w-16 h-16 shrink-0 rounded-2xl ${exp.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500`}>
                                {exp.icon}
                            </div>
                            <div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{exp.type}</p>
                                    <h3 className="text-lg md:text-xl font-bold text-white font-grotesk">{exp.title}</h3>
                                </div>
                                <span className="text-[10px] md:text-xs font-medium text-slate-400 font-inter mt-1 tracking-wider whitespace-nowrap">{exp.period}</span>
                                <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                                    {exp.outcome}
                                </p>
                                <div className="flex items-center gap-1.5 text-primary text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                    Validated Impact <ArrowUpRight size={12} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Education Section */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="h-px w-8 bg-primary" />
                            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Academic Journey</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-grotesk font-bold text-white tracking-tighter leading-none"
                        >
                            My <br /><span className="text-gradient">Education.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: 20, filter: 'blur(15px)' }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1.2, type: "spring", bounce: 0.4, delay: index * 0.15 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="glass p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start group hover:border-primary/30 transition-all border-white/5 shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
                        >
                            <div className={`w-16 h-16 shrink-0 rounded-2xl ${edu.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500`}>
                                {edu.icon}
                            </div>
                            <div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{edu.type}</p>
                                    <h3 className="text-lg md:text-xl font-bold text-white font-grotesk">{edu.title}</h3>
                                </div>
                                <span className="text-[10px] md:text-xs font-medium text-slate-400 font-inter mt-1 tracking-wider whitespace-nowrap">{edu.period}</span>
                                <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                                    {edu.outcome}
                                </p>
                                <div className="flex items-center gap-1.5 text-primary text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                    Academic Excellence <ArrowUpRight size={12} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});


export default Experience;
