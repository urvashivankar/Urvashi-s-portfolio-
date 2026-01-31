import { motion } from 'framer-motion';
import { BarChart2, Brain, Globe, Server, Rocket, ArrowUpRight } from 'lucide-react';

const About = () => {
    const services = [
        {
            icon: <Brain size={24} />,
            title: "AI Integration",
            text: "Production AI Systems",
            subtext: "Integrating LLMs, vision models, and intelligent automation into scalable applications.",
            color: "from-purple-500/10 to-pink-500/10",
            span: "md:col-span-1"
        },
        {
            icon: <Globe size={24} />,
            title: "Full-Stack",
            text: "End-to-End Development",
            subtext: "Building complete web platforms from React frontends to FastAPI backends.",
            color: "from-orange-500/10 to-yellow-500/10",
            span: "md:col-span-1"
        },
        {
            icon: <Server size={24} />,
            title: "Backend",
            text: "Scalable APIs & Databases",
            subtext: "Engineering high-performance server logic with Node.js, FastAPI, and SQL/NoSQL databases.",
            color: "from-green-500/10 to-emerald-500/10",
            span: "md:col-span-1"
        },
        {
            icon: <Rocket size={24} />,
            title: "Soft Skills",
            text: "Leadership & Collaboration",
            subtext: "Ownership, Clear Communication, Problem Solving, Team Coordination, and Time Management.",
            color: "from-indigo-500/10 to-blue-500/10",
            span: "md:col-span-1"
        }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-white mb-4">About Me</h2>
                        <p className="text-primary font-bold tracking-widest uppercase text-sm">Building AI Products End-to-End</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl text-slate-400 text-lg md:text-right"
                    >
                        I build complete AI products: React frontends, FastAPI backends, AI model integration, and production deployment.
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Main Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-2 glass p-8 md:p-12 relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold font-grotesk mb-8 text-white">Namaste! 🙏</h3>
                            <div className="text-slate-300 space-y-6 text-xl md:text-2xl leading-relaxed font-inter font-light">
                                <p>
                                    I'm <strong className="text-primary font-bold">Urvashi Vankar</strong>, a Full-Stack AI Developer who ships complete AI applications. From React frontends to FastAPI backends, AI model integration to production deployment. I don't just build interfaces or train models. <span className="text-white font-medium">I architect the entire stack.</span>
                                </p>
                                <p className="text-slate-400">
                                    After becoming a full-stack AI developer, I'm focusing on <strong className="text-secondary font-semibold">AI system design, scalable AI architectures, and MLOps</strong> to build reliable, production-ready AI platforms.
                                </p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4 text-slate-400 text-sm">
                                <span className="font-bold uppercase tracking-widest text-[10px]">Languages:</span>
                                <span className="text-slate-400">English, Gujarati, Hindi</span>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700"></div>
                    </motion.div>

                    {/* What I Do - Bento Grid Sections */}
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`glass p-8 relative overflow-hidden group flex flex-col justify-between ${item.span}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-white group-hover:text-primary transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <ArrowUpRight className="text-slate-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">{item.title}</p>
                                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight mb-4">
                                        {item.text}
                                    </h4>
                                    <p className="text-sm text-slate-400 leading-relaxed font-inter font-light">
                                        {item.subtext}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default About;
