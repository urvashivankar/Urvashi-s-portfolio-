import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Linkedin, Github, FileText, Send, Twitter, Instagram } from 'lucide-react';
import { useRef } from 'react';

const MagneticButton = ({ children, className, href, target }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        x.set(distanceX * 0.3);
        y.set(distanceY * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            target={target}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className={className}
        >
            {children}
        </motion.a>
    );
};

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-12">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-6xl mx-auto"
                >
                    <motion.h2
                        variants={item}
                        className="text-primary font-bold text-sm md:text-base mb-6 tracking-[0.2em] uppercase"
                    >
                        Shipping Production AI
                    </motion.h2>

                    <motion.h1
                        variants={item}
                        className="text-3xl md:text-5xl lg:text-6xl font-grotesk mb-10 leading-[1.2] text-white tracking-tighter"
                    >
                        <span className="text-gradient">Full-Stack AI Developer</span> <br />
                        building end-to-end intelligent applications
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-inter font-light"
                    >
                        I build AI-powered products from <span className="text-white font-medium">frontend to backend</span>, integrating LLMs, designing scalable APIs, and deploying <span className="text-white font-medium">production-ready systems</span>.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16"
                    >
                        <MagneticButton
                            href="/urvashi_resume.pdf"
                            target="_blank"
                            className="group relative px-10 py-5 bg-white text-slate-900 font-bold rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:text-white"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <FileText size={20} /> Download Resume
                            </span>
                            <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </MagneticButton>

                        <MagneticButton
                            href="#contact"
                            className="group relative px-10 py-5 border border-white/20 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:border-primary"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Send size={20} /> Open to Opportunities
                            </span>
                            <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </MagneticButton>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="flex items-center justify-center gap-10"
                    >
                        {[
                            { icon: <Github size={24} />, href: "https://github.com/urvashivankar" },
                            { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/urvashi-vankar-5229bb272/" },
                            { icon: <Twitter size={24} />, href: "https://x.com/Urvashi16032005" },
                            { icon: <Instagram size={24} />, href: "https://www.instagram.com/_urvashiii.05" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                className="text-slate-500 hover:text-primary transition-all duration-300 hover:scale-125"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Subtle Gradient Backdrops */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 transition-colors"></div>
        </section>
    );
};



export default Hero;
