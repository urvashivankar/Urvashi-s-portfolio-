import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[999] transition-all duration-700 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-2xl py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 overflow-hidden rounded-xl border border-white/10 group-hover:rotate-12 transition-transform duration-500">
                        <img src={logo} alt="UV" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xl font-bold font-grotesk text-white tracking-tighter">
                        Urvashi's <span className="text-primary italic">Portfolio.</span>
                    </span>
                </a>

                <div className="hidden lg:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                            >
                                <span className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all duration-300"></span>
                                {link.name}
                            </a>
                        ))}
                    </div>

                </div>

                {/* Mobile Header Controls */}
                <div className="lg:hidden flex items-center gap-4">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2 glass">
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 overflow-hidden lg:hidden"
                    >
                        <div className="flex flex-col p-8 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-xl font-bold font-grotesk text-slate-400 hover:text-white flex justify-between items-center"
                                >
                                    {link.name} <ArrowUpRight size={16} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
