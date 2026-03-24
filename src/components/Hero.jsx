import { useRef, Suspense, lazy, memo, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { SiReact, SiPython, SiFastapi, SiMongodb, SiNodedotjs, SiTailwindcss, SiJavascript, SiHtml5, SiGithub, SiVercel, SiSupabase, SiMysql } from 'react-icons/si';

const Spline = lazy(() => import('@splinetool/react-spline'));

const ORBIT_ICONS = [
    { icon: SiReact,      name: 'React',      color: '#61DAFB', glow: 'rgba(97,218,251,0.6)' },
    { icon: SiJavascript, name: 'JavaScript',  color: '#F7DF1E', glow: 'rgba(247,223,30,0.6)' },
    { icon: SiPython,     name: 'Python',      color: '#3776AB', glow: 'rgba(55,118,171,0.6)' },
    { icon: SiFastapi,    name: 'FastAPI',     color: '#009688', glow: 'rgba(0,150,136,0.6)' },
    { icon: SiMongodb,    name: 'MongoDB',     color: '#47A248', glow: 'rgba(71,162,72,0.6)' },
    { icon: SiNodedotjs,  name: 'Node.js',     color: '#339933', glow: 'rgba(51,153,51,0.6)' },
    { icon: SiTailwindcss,name: 'Tailwind',    color: '#06B6D4', glow: 'rgba(6,182,212,0.6)' },
    { icon: SiGithub,     name: 'GitHub',      color: '#ffffff', glow: 'rgba(255,255,255,0.4)' },
];

const OrbitRing = () => {
    const [isPaused, setIsPaused] = useState(false);
    const total = ORBIT_ICONS.length;

    return (
        <div className="relative w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[420px] md:h-[420px] mx-auto">
            {/* Center Glow Core */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-600/30 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                    <span className="text-white font-extrabold font-grotesk tracking-tight text-sm sm:text-lg md:text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI</span>
                </div>
                {/* Orbit ring circles */}
                <div className="absolute w-full h-full rounded-full border border-white/5"></div>
                <div className="absolute w-[85%] h-[85%] rounded-full border border-dashed border-white/5"></div>
            </div>

            {/* Rotating wrapper */}
            <motion.div
                className="absolute inset-0"
                animate={{ rotate: isPaused ? undefined : 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
                {ORBIT_ICONS.map((tech, i) => {
                    const angle = (360 / total) * i;
                    const rad = (angle * Math.PI) / 180;
                    const r = 50; // % radius
                    const cx = 50 + r * Math.cos(rad);
                    const cy = 50 + r * Math.sin(rad);

                    return (
                        <motion.div
                            key={tech.name}
                            className="absolute group cursor-pointer"
                            style={{
                                left: `${cx}%`,
                                top: `${cy}%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                            onHoverStart={() => setIsPaused(true)}
                            onHoverEnd={() => setIsPaused(false)}
                        >
                            {/* Counter-rotate icon so it stays upright */}
                            <motion.div
                                animate={{ rotate: isPaused ? 0 : -360 }}
                                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                            >
                                {/* Tooltip */}
                                <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#020617]/90 border border-white/10 px-2 py-1 rounded-lg text-[10px] font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                                    {tech.name}
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.25, boxShadow: `0 0 20px ${tech.glow}`, borderColor: tech.color + '60' }}
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-300"
                                    style={{ color: tech.color }}
                                >
                                    <tech.icon size={22} />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

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


const Typewriter = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[index];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentWord.substring(0, displayText.length + 1));
                if (displayText.length === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setDisplayText(currentWord.substring(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, index, words]);

    return (
        <span className="inline-block min-h-[1.5em]">
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[3px] h-[1em] bg-blue-400 ml-1 align-middle"
            />
        </span>
    );
};

const Hero = memo(() => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Parallax out effects for Hero
    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
        show: { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            transition: { duration: 1.2, type: "spring", bounce: 0.4 } 
        }
    };
    
    const orbitContainer = {
        hidden: { opacity: 0, scale: 0.8, rotate: -20 },
        show: { 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            transition: { duration: 1.5, type: "spring", bounce: 0.2, delay: 0.5 }
        }
    };

    return (
        <section id="home" ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden pt-32 pb-16 md:py-20 perspective-1000">
            <motion.div 
                style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
                className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full transform-gpu origin-top"
            >
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
                    {/* Left Side: Content */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="text-left z-20 flex flex-col justify-center"
                    >
                        <motion.div variants={item} className="flex items-center gap-3 mb-5">
                            <span className="w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500"></span>
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-cyan-400">Full Stack AI Developer</span>
                        </motion.div>

                        <motion.h1 
                            variants={item}
                            className="text-3xl sm:text-5xl md:text-6xl font-bold font-grotesk leading-tight tracking-tight mb-4 relative"
                        >
                            {/* Heading Glow */}
                            <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent blur-[60px] -z-10 rounded-full"></div>
                            <span className="text-white block">Urvashi</span>
                            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent block">
                                Vankar.
                            </span>
                        </motion.h1>

                        <motion.div variants={item} className="flex flex-col space-y-5 max-w-xl">
                            <h2 className="text-base md:text-lg font-semibold text-slate-200 leading-snug">
                                Building Scalable AI &amp; Web Applications
                            </h2>
                            
                            <p className="text-slate-500 text-sm md:text-sm leading-relaxed font-light">
                                I build real-world applications using modern web and AI technologies.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-wrap items-center gap-4 pt-3">
                                <MagneticButton
                                    href="#projects"
                                    className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold tracking-[0.15em] uppercase hover:opacity-90 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                                >
                                    Explore My Work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </MagneticButton>

                                <MagneticButton
                                    href="/Fullstack_urvashi_RESUME.pdf"
                                    target="_blank"
                                    className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-white/10 hover:border-white/40 transition-all"
                                >
                                    <Download size={14} /> Download Resume
                                </MagneticButton>
                            </div>

                            <div className="pt-5">
                                <span className="text-[10px] tracking-[0.2em] text-slate-700 uppercase font-bold animate-pulse">
                                    Scroll to explore
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Circular Orbit Tech Stack */}
                    <motion.div 
                        variants={orbitContainer}
                        initial="hidden"
                        animate="show"
                        style={{ rotate: orbitRotate }}
                        className="relative w-full mt-12 lg:mt-0 flex items-center justify-center transform-gpu"
                    >
                        <OrbitRing />
                        {/* Orbit Glow Section */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-cyan-500/5 via-purple-600/5 to-transparent rounded-full blur-[100px] -z-10 animate-pulse"></div>
                    </motion.div>
                </div >
            </motion.div >

            {/* Subtle Gradient Backdrops - Hardware Accelerated for Performance */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2 transform-gpu will-change-transform pointer-events-none" ></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 transform-gpu will-change-transform pointer-events-none"></div>
        </section >
    );
});

export default Hero;
