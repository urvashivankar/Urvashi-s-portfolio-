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
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-white mb-4">About Me</h2>
                        <p className="text-primary font-bold tracking-widest uppercase text-sm">Namaste, I'm Urvashi Vankar</p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {/* Main Bio Card (Simplified) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-4 glass p-8 relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold font-grotesk mb-4 text-white">Full-Stack AI Developer</h3>
                            <p className="text-slate-400 text-lg leading-relaxed font-inter font-light">
                                I architect entire AI stacks—from responsive React frontends to robust FastAPI backends and integrated LLM systems.
                            </p>
                        </div>
                    </motion.div>

                    {/* What I Do - Bento Grid Sections */}
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`glass p-8 relative overflow-hidden group flex flex-col justify-between`}
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
