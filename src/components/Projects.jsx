import { memo, useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Box, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const projects = [
    {
<<<<<<< HEAD
        title: "Developer Portfolio CMS",
        category: "Full Stack",
        solution: "A production-ready CMS to manage portfolio content with a Django backend and dynamic React/Vite frontend integration.",
        tech: ["Django", "Django REST Framework", "React", "Vite", "PostgreSQL"],
        link: "https://github.com/urvashivankar/django-portfolio-cms",
        demo: "#",
        thumbnail: "/projects/django-portfolio-cms.png",
        isFeatured: true
    },
    {
=======
>>>>>>> 3eac06802c2c9b556f11ce88f15367b0054e73f9
        title: "AQUA GUARDIAN",
        category: "GovTech • AI",
        solution: "A comprehensive water quality monitoring system that empowers citizens to report pollution and enables authorities to respond effectively. Users can upload images of polluted water bodies, and the system automatically detects contamination using AI, logs the location, and generates alerts for immediate action.",
        tech: ["React", "FastAPI", "Llama Vision", "Supabase", "Docker"],
        link: "https://github.com/urvashivankar/Aqua_Guardian",
        demo: "#",
        thumbnail: "/projects/aqua-guardian.png", // High-quality illustration
        isFeatured: false
    },
    {
        title: "AI MOCK INTERVIEW",
        category: "GenAI",
        solution: "Sleek AI-powered interaction system for real-time interview simulations and scoring.",
        tech: ["Next.js", "Gemini AI", "Voice-to-Text", "Framer Motion"],
        link: "https://github.com/urvashivankar/ai_mock_interview",
        demo: "#",
        thumbnail: "/projects/ai-mock-interview.png", // Premium AI Interview UI
        isFeatured: false
    },
    {
        title: "FACE ATTENDANCE",
        category: "Computer Vision • AI",
        solution: "Biometric facial recognition attendance system with real-time biometric database integration.",
        tech: ["Python", "OpenCV", "Face-Recognition", "SQLite"],
        link: "https://github.com/urvashivankar/face-attendence-system.git",
        demo: "#",
        thumbnail: "/projects/face-attendance.png", // High-tech biometric UI
        isFeatured: false
    },
    {
        title: "FAKE NEWS DETECTOR",
        category: "NLP • Security",
        solution: "NLP-powered verification system monitoring digital news credibility for browser users.",
        tech: ["Chrome Extension", "FastAPI", "Scikit-Learn", "NLP"],
        link: "https://github.com/urvashivankar/Fake_news_extension",
        demo: "#",
        thumbnail: "/projects/fake-news-detector.png", // Premium fact-check UI
        isFeatured: false
    },
    {
        title: "QUIZ APP",
        category: "Frontend • EdTech",
        solution: "Modern interactive MCQ application with dynamic scoring and clean educational interface.",
        tech: ["Next.js", "TailwindCSS", "Framer Motion"],
        link: "https://github.com/urvashivankar/quiz-app.git",
        demo: "#",
        thumbnail: "/projects/quiz-app.svg", // Custom SVG mockup
        isFeatured: false
    },
    {
        title: "IRIS PREDICTION",
        category: "Data Science • ML",
        solution: "Data-driven classification system visualize botanic dataset predictions using high-fidelity graphs.",
        tech: ["Python", "Scikit-Learn", "Flask", "Matplotlib"],
        link: "https://github.com/urvashivankar/Iris-Flower-Prediction.git",
        demo: "#",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", // ML Graph / Dataset Vis
        isFeatured: false
    },
    {
        title: "ROSHNI ENTERPRISE",
        category: "Full Stack • Service",
        solution: "Premium AC service booking application featuring digital diagnostics and technician scheduling.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        link: "https://github.com/urvashivankar/roshni-enterprise",
        demo: "#",
        thumbnail: "/projects/roshni-enterprise.png", // Professional service photo
        isFeatured: false
    },
    {
        title: "PROMPT REFINEMENT",
        category: "AI • Engineering",
        solution: "Sophisticated workspace systematically refining and testing creative prompts for varied LLMs.",
        tech: ["LLMs", "Prompt Engineering", "React", "FastAPI"],
        link: "https://github.com/urvashivankar/prompt-refinement-system",
        demo: "#",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000", // AI Prompt UI
        isFeatured: false
    },
    {
        title: "NEXUSCHAT AI",
        category: "Web3 • Chat",
        solution: "Futuristic real-time AI conversation interface built on production-ready MEAN stack.",
        tech: ["MongoDB", "Express", "Angular", "Node.js"],
        link: "https://github.com/urvashivankar/Mean-project",
        demo: "#",
        thumbnail: "/projects/nexuschat.svg", // Custom SVG mockup
        isFeatured: false
    }
];

const ProjectCard = memo(({ project, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    // Parallax elements
    const topX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10px", "10px"]);
    const topY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10px", "10px"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative h-[420px] max-w-sm mx-auto w-full rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-colors duration-500 overflow-hidden shadow-2xl hover:shadow-primary/20"
        >
            {/* Top Section: Image Preview */}
            <div className="relative h-44 overflow-hidden rounded-t-3xl bg-slate-800">
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Floating Tech Badges on Image */}
                <div className="absolute bottom-4 left-5 z-20 flex flex-wrap gap-2">
                    {project.tech.slice(0, 2).map((t) => (
                        <span key={t} className="text-[8px] font-bold text-white/90 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="relative p-5 flex flex-col h-[calc(100%-11rem)] z-10" style={{ transform: "translateZ(30px)" }}>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary mb-2">
                    {project.category}
                </span>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-slate-400 text-xs font-inter leading-relaxed line-clamp-2 mb-4">
                    {project.solution}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(2, 5).map((t) => (
                        <span key={t} className="text-[8px] font-bold text-slate-500 border border-white/5 px-2 py-1 rounded-lg group-hover:border-primary/20 transition-colors">
                            {t}
                        </span>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-auto flex items-center gap-4">
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        <Github size={16} />
                        View Code
                    </motion.a>
                    <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center p-3 rounded-full border border-white/10 hover:border-primary hover:text-primary transition-all duration-300"
                    >
                        <ExternalLink size={18} />
                    </motion.a>
                </div>
            </div>

            {/* Inner Glow / Lighting */}
            <div className="absolute inset-0 pointer-events-none group-hover:inner-glow transition-all duration-500" />
        </motion.div>
    );
});

const Projects = memo(() => {
    const [page, setPage] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setVisibleCards(1);
            else if (window.innerWidth < 1024) setVisibleCards(2);
            else setVisibleCards(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

<<<<<<< HEAD
    const totalProjects = projects.length + 1; // +1 for "View All" card
    const totalPages = Math.ceil(totalProjects / visibleCards);
=======
    const totalPages = Math.ceil(projects.length / visibleCards);
>>>>>>> 3eac06802c2c9b556f11ce88f15367b0054e73f9

    const paginate = (newDirection) => {
        setPage((prev) => {
            let nextPage = prev + newDirection;
            if (nextPage < 0) nextPage = totalPages - 1;
            if (nextPage >= totalPages) nextPage = 0;
            return nextPage;
        });
    };

<<<<<<< HEAD
    const displayIndices = Array.from({ length: visibleCards }, (_, i) => page * visibleCards + i)
        .filter(idx => idx < totalProjects);
=======
    const displayProjects = projects.slice(page * visibleCards, (page + 1) * visibleCards);
>>>>>>> 3eac06802c2c9b556f11ce88f15367b0054e73f9

    return (
        <section id="projects" className="py-32 relative overflow-hidden bg-slate-950">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="h-px w-8 bg-primary" />
                            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Portfolio</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-grotesk font-bold text-white tracking-tighter leading-none"
                        >
                            Featured <br /><span className="text-gradient">Projects.</span>
                        </motion.h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => paginate(-1)}
                                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 glass text-white text-xs font-bold tracking-widest uppercase transition-all"
                            >
                                <ChevronLeft size={16} /> Previous
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => paginate(1)}
                                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 glass text-white text-xs font-bold tracking-widest uppercase transition-all"
                            >
                                Next <ChevronRight size={16} />
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Projects Slider */}
                <div className="relative min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, transition: { duration: 0.3 } }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
<<<<<<< HEAD
                            {displayIndices.map((idx) => {
                                if (idx < projects.length) {
                                    return <ProjectCard key={projects[idx].title} project={projects[idx]} index={idx % visibleCards} />;
                                } else {
                                    // Render "View All" Card
                                    return (
                                        <motion.a
                                            key="view-all"
                                            href="https://github.com/urvashivankar?tab=repositories"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.02, borderColor: "rgba(168,85,247,0.4)" }}
                                            className="relative h-[420px] max-w-sm mx-auto w-full rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-dashed border-white/20 flex flex-col items-center justify-center group transition-all duration-500 hover:bg-slate-900/80 cursor-pointer"
                                        >
                                            <div className="relative w-32 h-32 rounded-full border border-dashed border-white/20 flex items-center justify-center mb-8 group-hover:border-primary/50 transition-colors duration-500">
                                                <div className="absolute inset-2 rounded-full border border-dashed border-white/10" />
                                                <Github size={48} className="text-white/30 group-hover:text-primary transition-colors duration-500" />
                                            </div>

                                            <h3 className="text-xl font-bold text-white/50 tracking-[0.3em] uppercase font-grotesk group-hover:text-white transition-colors">
                                                All Projects
                                            </h3>

                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                                        </motion.a>
                                    );
                                }
                            })}
=======
                            {displayProjects.map((project, idx) => (
                                <ProjectCard key={project.title} project={project} index={idx} />
                            ))}
>>>>>>> 3eac06802c2c9b556f11ce88f15367b0054e73f9
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Indicators */}
                <div className="flex justify-center gap-3 mt-20">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className="group relative px-2 py-4"
                        >
                            <div className={`h-[4px] rounded-full transition-all duration-500 ${i === page ? "w-12 bg-primary shadow-[0_0_15px_rgba(168,85,247,0.5)]" : "w-4 bg-white/10 group-hover:bg-white/30"
                                }`} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Projects;
