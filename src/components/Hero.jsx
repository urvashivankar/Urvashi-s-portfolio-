import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Linkedin, Github, FileText, Send, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { useRef, Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

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
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Content */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="text-left"
                    >
                        <motion.h2
                            variants={item}
                            className="text-primary font-bold text-sm mb-6 tracking-[0.2em] uppercase"
                        >
                            Shipping Production AI
                        </motion.h2>

                        <motion.h1
                            variants={item}
                            className="text-4xl md:text-6xl lg:text-7xl font-grotesk mb-8 leading-[1.1] text-white tracking-tighter"
                        >
                            <span className="text-gradient">Full-Stack</span> <br />
                            AI Developer
                        </motion.h1>

                        <motion.p
                            variants={item}
                            className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-inter font-light"
                        >
                            Building end-to-end intelligent applications from frontend to deployment.
                        </motion.p>

                        <motion.div
                            variants={item}
                            className="flex flex-col sm:flex-row items-center gap-6 mb-12"
                        >
                            <MagneticButton
                                href="/urvashi_resume.pdf"
                                target="_blank"
                                className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-full overflow-hidden transition-all duration-300 hover:text-white"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <FileText size={18} /> Resume
                                </span>
                                <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </MagneticButton>

                            <MagneticButton
                                href="#contact"
                                className="group relative px-8 py-4 bg-transparent text-white font-bold rounded-full transition-all duration-300 border border-white/20 hover:border-primary"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Hire Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </MagneticButton>
                        </motion.div>

                        <motion.div
                            variants={item}
                            className="flex items-center gap-8"
                        >
                            {[
                                { icon: <Github size={20} />, href: "https://github.com/urvashivankar" },
                                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/urvashi-vankar-5229bb272/" },
                                { icon: <Twitter size={20} />, href: "https://x.com/Urvashi16032005" },
                                { icon: <Instagram size={20} />, href: "https://www.instagram.com/_urvashiii.05" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    className="text-slate-500 hover:text-primary transition-all duration-300 hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Spline 3D Scene */}
                    <div className="relative h-[400px] lg:h-[600px] w-full">
                        <Suspense fallback={<div className="w-full h-full bg-slate-900/10 animate-pulse rounded-3xl" />}>
                            <div className="w-full h-full transform scale-110 lg:scale-125">
                                <Spline
                                    scene="https://prod.spline.design/1pzJQnCWvdZAETah/scene.splinecode"
                                    className="w-full h-full"
                                    onLoad={(spline) => {
                                        // Massive sweep to find and hide the built-in "Get in touch" or "Hire Me" buttons
                                        [
                                            'Get in touch', 'button', 'Button', 'Contact', 'Text', 'cta', 'CTA',
                                            'Group', 'Shape', 'Hire Me', 'HIRE ME', 'Hire', 'Me', 'Hire me',
                                            'Social', 'Link', 'Follow', 'Email', 'Mail'
                                        ].forEach(name => {
                                            const obj = spline.findObjectByName(name);
                                            if (obj) obj.visible = false;
                                        });
                                    }}
                                />
                            </div>
                        </Suspense>
                    </div>
                </div >
            </div >

            {/* Subtle Gradient Backdrops */}
            < div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2 transition-colors" ></div >
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 transition-colors"></div>
        </section >
    );
};

export default Hero;
