import { memo } from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Star, ArrowUpRight, GraduationCap, Building2 } from 'lucide-react';

const experiences = [
    {
        title: "AQUA GUARDIAN",
        type: "Civic Innovation",
        period: "2025 - 2026",
        outcome: "Architected a full-stack AI validation system for water pollution reporting. Reduced manual validation time by 70%.",
        icon: <Star size={20} />,
        color: "bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
    },
    {
        title: "MaMo TechnoLabs LLP",
        type: "Business Development",
        period: "2026",
        outcome: "Web and app development project coordination at a CMMI Level 3 consulting firm.",
        icon: <Building2 size={20} />,
        color: "bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
    },
    {
        title: "Product Building",
        type: "Full-Stack AI",
        period: "2023 - Present",
        outcome: "Built 10+ AI applications from React frontends to FastAPI backends with LLM integration.",
        icon: <Briefcase size={20} />,
        color: "bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
    },
    {
        title: "CII & YI Events",
        type: "Coordination",
        period: "2025",
        outcome: "Led logistics and stakeholder engagement for high-impact professional networking initiatives.",
        icon: <Users size={20} />,
        color: "bg-pink-500/20 shadow-[0_0_15px_rgba(244,114,182,0.2)]"
    },
    {
        title: "KS Technologies",
        type: "Python Developer",
        period: "2022",
        outcome: "Developed Python backend features and API integrations for web applications.",
        icon: <Building2 size={20} />,
        color: "bg-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
    },
    {
        title: "B.Tech CSE",
        type: "Parul University",
        period: "2023 - 2026 | 8.0 CGPA",
        outcome: "Focused on AI, Machine Learning, and Full-Stack Development.",
        icon: <GraduationCap size={20} />,
        color: "bg-blue-600/20 shadow-[0_0_15px_rgba(37,99,235,0.2)]"
    }

];

const Experience = memo(() => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            Milestones
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1.2, type: "spring", bounce: 0.3, delay: 0.1 }}
                            className="text-3xl md:text-5xl font-grotesk font-bold text-white leading-tight"
                        >
                            Proof of <br /><span className="text-gradient">Credibility.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
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
            </div>
        </section>
    );
});

export default Experience;
