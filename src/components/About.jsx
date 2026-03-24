import { memo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart2, Brain, Globe, Server, Rocket, ArrowUpRight } from 'lucide-react';

const About = memo(() => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Fast Parallax for Header
    const headerY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    const services = [
        {
            icon: <Brain size={24} />,
            title: "AI Integration",
            text: "Production AI Systems",
            subtext: "Integrating LLMs, vision models, and intelligent automation into scalable applications.",
            color: "from-purple-500/20 to-indigo-500/20",
        },
        {
            icon: <Globe size={24} />,
            title: "Full Stack",
            text: "End-to-End Development",
            subtext: "Building complete web platforms from React frontends to FastAPI backends.",
            color: "from-blue-500/20 to-cyan-500/20",
        },
        {
            icon: <Server size={24} />,
            title: "Backend",
            text: "Scalable APIs & Databases",
            subtext: "Engineering high-performance server logic with Node.js, FastAPI, and SQL/NoSQL databases.",
            color: "from-indigo-500/20 to-blue-500/20",
        },
        {
            icon: <Rocket size={24} />,
            title: "Soft Skills",
            text: "Leadership & Collaboration",
            subtext: "Ownership, Clear Communication, Problem Solving, Team Coordination, and Time Management.",
            color: "from-pink-500/20 to-purple-500/20",
        }
    ];

    return (
        <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden perspective-1000">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
                    <motion.div
                        style={{ y: headerY }}
                        initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-grotesk font-black text-white mb-4 tracking-tighter">About Me</h2>
                        <p className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-sm">Namaste, I'm Urvashi Vankar</p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 relative z-20">
                    {/* Main Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 0.1 }}
                        className="md:col-span-4 glass p-8 md:p-12 relative overflow-hidden group rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors"
                    >
                        <div className="relative z-10 max-w-4xl">
                            <h3 className="text-2xl sm:text-3xl font-bold font-grotesk mb-6 text-white tracking-tight">Full Stack <span className="text-gradient">AI Developer</span></h3>
                            <p className="text-slate-400 text-base md:text-xl leading-relaxed font-inter font-light">
                                I'm a Full Stack Developer focused on building practical, scalable applications that combine modern web technologies with AI capabilities. From designing responsive interfaces to developing robust backend systems and integrating intelligent features, I work across the entire stack to turn ideas into real, usable products. My approach is simple &mdash; build with purpose, solve real problems, and continuously improve through hands-on development.
                            </p>
                        </div>
                    </motion.div>

                    {/* What I Do - Bento Grid Sections */}
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.95, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.1 + (index * 0.1) }}
                             className={`glass p-6 md:p-8 relative overflow-hidden group flex flex-col justify-between rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-500`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen`}></div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                                        {item.icon}
                                    </div>
                                    <ArrowUpRight className="text-slate-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">{item.title}</p>
                                    <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight mb-4 tracking-tight">
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
});

export default About;
