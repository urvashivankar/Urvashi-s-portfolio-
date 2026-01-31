import { motion } from 'framer-motion';
import { Brain, Database, Globe, Zap, Cpu } from 'lucide-react';

const skills = [
    {
        category: "Frontend Development",
        icon: <Globe size={20} />,
        items: ["React", "Next.js", "Framer Motion", "Tailwind CSS", "JavaScript", "HTML/CSS"],
        description: "Modern, responsive web applications with seamless AI integration and premium UX.",
        primary: false
    },
    {
        category: "Backend Development",
        icon: <Database size={20} />,
        items: ["FastAPI", "Node.js", "Express.js", "PostgreSQL", "Supabase", "REST APIs"],
        description: "High-performance APIs and server-side logic for scalable AI applications."
    },
    {
        category: "AI Integration",
        icon: <Brain size={20} />,
        items: ["LLM APIs", "Gemini", "Llama Vision", "RAG Systems", "Prompt Engineering", "Python"],
        description: "Production AI systems with LLMs, vision models, and intelligent automation.",
        primary: true
    },
    {
        category: "Deployment & DevOps",
        icon: <Zap size={20} />,
        items: ["Docker", "Git", "Vercel", "Render", "n8n", "MLOps"],
        description: "Containerization, CI/CD workflows, and production deployment pipelines."
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative bg-slate-900/20">
            <div className="container mx-auto px-6 text-center lg:text-left">
                <div className="mb-20 flex flex-col lg:flex-row justify-between items-end gap-10">
                    <div className="max-w-2xl">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            Capabilities
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-grotesk font-bold text-white leading-tight"
                        >
                            Technical <br /><span className="text-gradient">Infrastructure.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="glass px-6 py-4 flex items-center gap-4"
                    >
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <Cpu size={20} className="animate-pulse" />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Currently Learning</p>
                            <p className="text-xs text-white font-medium">AI System Design & Scalable Architectures</p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-slate-200 overflow-hidden rounded-3xl">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            className={`bg-slate-950 p-10 flex flex-col group relative hover:z-10 ${skill.primary ? 'ring-2 ring-primary ring-inset' : ''}`}
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-500"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 w-fit bg-white/5 rounded-xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        {skill.icon}
                                    </div>
                                    {skill.primary && (
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-primary text-white rounded">Focus</span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                    {skill.category}
                                </h3>

                                <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">
                                    {skill.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {skill.items.map((item) => (
                                        <span
                                            key={item}
                                            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-white/5 border border-white/5 text-slate-400 group-hover:border-primary/20 group-hover:text-primary group-hover:text-slate-200 transition-all cursor-default"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Border accents */}
                            <div className="absolute bottom-4 right-4 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default Skills;
