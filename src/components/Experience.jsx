import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Star, ArrowUpRight, GraduationCap, Building2 } from 'lucide-react';

const experiences = [
    {
        title: "AQUA GUARDIAN - State Innovation Showcase",
        type: "Production AI System",
        period: "2025 - 2026",
        outcome: "Architected and deployed full-stack AI validation system for government water pollution reporting. Recognized as top civic innovation project for production-ready implementation and 70% reduction in manual validation time.",
        icon: <Star size={20} />,
        color: "bg-blue-500/10"
    },
    {
        title: "MaMo TechnoLabs LLP",
        type: "Business Development Intern",
        period: "Jan 2026 - Present",
        outcome: "Working at CMMI Level 3 IT consulting company on web and app development projects. Gaining real-world experience in client communication, project coordination, and technical solution delivery.",
        icon: <Building2 size={20} />,
        color: "bg-cyan-500/10"
    },
    {
        title: "Full-Stack AI Development",
        type: "End-to-End Product Building",
        period: "2023 - Present",
        outcome: "Built 10+ production-ready AI applications spanning GovTech, EdTech, and automation. Mastered complete development lifecycle: React frontends, FastAPI backends, LLM integration, database design, and cloud deployment.",
        icon: <Briefcase size={20} />,
        color: "bg-purple-500/10"
    },
    {
        title: "Coordinated CII AND YI events",
        type: "Event Coordinator",
        period: "2023 - 2024",
        outcome: "Led and coordinated high-impact events for the Confederation of Indian Industry (CII) and Young Indians (YI). Managed end-to-end logistics, team coordination, and stakeholder engagement for professional networking and community initiatives.",
        icon: <Users size={20} />,
        color: "bg-orange-500/10"
    },
    {
        title: "KS Technologies",
        type: "Python Developer Intern",
        period: "May - Oct 2022",
        outcome: "Developed Python-based backend features for web applications. Worked with databases and API integrations. Collaborated with team to improve application functionality and usability.",
        icon: <Building2 size={20} />,
        color: "bg-green-500/10"
    },
    {
        title: "B.Tech Computer Science & Engineering",
        type: "Parul Institute of Engineering & Technology",
        period: "2023 - 2026",
        outcome: "Pursuing B.Tech in CSE with focus on AI, Machine Learning, and Full-Stack Development. Building production-ready projects and participating in hackathons throughout the program.",
        icon: <GraduationCap size={20} />,
        color: "bg-indigo-500/10"
    },
    {
        title: "Diploma in Computer Science",
        type: "Parul University",
        period: "2020 - 2023",
        outcome: "Completed Diploma in Computer Science. Built foundation in programming fundamentals, web development basics, and problem-solving skills.",
        icon: <GraduationCap size={20} />,
        color: "bg-slate-500/10"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            Milestones
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
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
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="glass p-10 flex flex-col md:flex-row gap-8 items-start group hover:border-primary/30 transition-all border-white/5"
                        >
                            <div className={`w-16 h-16 shrink-0 rounded-2xl ${exp.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500`}>
                                {exp.icon}
                            </div>
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{exp.type}</p>
                                        <h3 className="text-xl font-bold text-white font-grotesk">{exp.title}</h3>
                                    </div>
                                    <span className="text-xs font-medium text-slate-400 font-inter">{exp.period}</span>
                                </div>
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
};

export default Experience;
