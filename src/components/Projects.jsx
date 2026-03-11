import { memo } from 'react';
import { motion } from 'framer-motion';
import { Github, Box } from 'lucide-react';

const projects = [
    {
        title: "AQUA GUARDIAN",
        category: "GovTech Full-Stack AI",
        problem: "Government agencies manually validated thousands of citizen water pollution reports, causing 3-5 day response delays for critical environmental issues.",
        role: "Full-Stack AI Developer",
        solution: "Built complete AI validation system with React frontend (real-time updates), FastAPI backend (async processing), Llama Vision integration for automatic image analysis, and Supabase for scalable storage. Reduced validation time by 70%.",
        challenge: "Handling concurrent image uploads while maintaining <2s AI response time and ensuring government-grade audit trails.",
        tech: ["React", "FastAPI", "Llama Vision", "Supabase", "Docker"],
        link: "https://github.com/urvashivankar/Aqua_Guardian",
        future: "IoT sensor integration for continuous real-time water quality monitoring."
    },
    {
        title: "AI MOCK INTERVIEW",
        category: "Full-Stack GenAI",
        problem: "Job seekers needed realistic interview practice with instant feedback, but human mock interviews are expensive and scheduling-dependent.",
        role: "Full-Stack AI Developer",
        solution: "Architected production interview platform with Next.js frontend, voice recording UI, Gemini 1.5 Flash integration for conversational AI, and real-time scoring algorithms. Achieved <2s response latency with multi-turn context management.",
        challenge: "Maintaining conversation context across multi-turn interviews while processing voice input in real-time.",
        tech: ["Next.js", "Gemini AI", "Voice-to-Text", "Framer Motion"],
        link: "https://github.com/urvashivankar/ai_mock_interview",
        future: "Webcam-based sentiment and body language analysis for non-verbal communication scoring."
    },
    {
        title: "ROSHNI ENTERPRISE",
        category: "Full-Stack MERN",
        problem: "Requirement for a robust, scalable enterprise management system with dynamic data handling.",
        role: "Full-Stack Developer",
        solution: "Built a comprehensive enterprise web application using the MERN stack (MongoDB, Express.js, React, Node.js).",
        challenge: "Ensuring high availability and secure data management across multiple user roles.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        link: "https://github.com/urvashivankar/roshni-enterprise",
        future: "Implementation of advanced analytics dashboards and real-time notifications."
    },
    {
        title: "FAKE NEWS DETECTOR",
        category: "Production NLP",
        problem: "Misinformation spreads faster than human fact-checking, requiring real-time automated detection at browser level.",
        role: "ML Engineer",
        solution: "Built Chrome extension with FastAPI backend serving Passive-Aggressive Classifier achieving 99%+ accuracy. Processes text in <100ms without disrupting user experience.",
        challenge: "Processing text at browser level with minimal latency while maintaining high accuracy.",
        tech: ["Chrome Extension", "FastAPI", "Scikit-Learn", "NLP"],
        link: "https://github.com/urvashivankar/Fake_news_extension",
        future: "Multi-language support and real-time social media source-reliability scoring."
    },
    {
        title: "PROMPT REFINEMENT SYSTEM",
        category: "AI & Prompt Engineering",
        problem: "Inefficient and inconsistent AI prompt generation leading to suboptimal LLM outputs.",
        role: "AI Developer",
        solution: "Developed an interactive system to systematically refine, test, and optimize prompts for various Large Language Models.",
        challenge: "Creating a universal framework that adapts to different LLM requirements and context Windows.",
        tech: ["LLMs", "Prompt Engineering", "React", "Node.js"],
        link: "https://github.com/urvashivankar/prompt-refinement-system",
        future: "Integration with additional specialized AI models via API."
    },
    {
        title: "CSE AI AGENT (NEXUSCHAT)",
        category: "Full-Stack MEAN",
        problem: "Students and professionals needed an intelligent, context-aware chatbot for specialized academic and CSE assistance.",
        role: "Full-Stack Developer",
        solution: "Developed a production-ready AI-powered CSE assistant using the full MEAN stack (MongoDB, Express.js, Angular, Node.js) with real-time Socket.IO and Groq AI integration.",
        challenge: "Integrating AI seamlessly with full-stack architecture for low-latency, real-time responses.",
        tech: ["MongoDB", "Express", "Angular", "Node.js"],
        link: "https://github.com/urvashivankar/Mean-project",
        future: "Incorporating advanced file-parsing capabilities and deeper contextual memory."
    }
];

const Projects = memo(() => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            Selection
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-grotesk font-bold text-white tracking-tighter"
                        >
                            Featured <br /><span className="text-gradient">Projects.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-md text-slate-400 text-lg md:text-right font-inter font-light"
                    >
                        A selection of production-ready AI applications demonstrating end-to-end development: frontend to backend, AI integration to deployment.
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative overflow-hidden rounded-[2rem] border border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700"
                        >
                            <div className="absolute inset-0 bg-slate-950 transition-colors duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-secondary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative p-8 md:p-12 z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-primary transition-all duration-500">
                                            <Box className="text-white group-hover:text-white" size={20} />
                                        </div>
                                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">{project.category}</span>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full border border-slate-100/10 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-grotesk tracking-tight group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <div className="space-y-6 flex-grow">
                                    <p className="text-slate-400 font-inter font-light leading-relaxed">
                                        {project.solution.split('.')[0]}.
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[10px] font-bold text-slate-400 border border-white/10 px-3 py-1.5 rounded-lg group-hover:border-primary/30 group-hover:text-primary transition-all">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Projects;
