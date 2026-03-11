import { useEffect, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cursor from './components/Cursor';

// Lazy loading below-the-fold components for performance
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Resumes = lazy(() => import('./components/Resumes'));
const Contact = lazy(() => import('./components/Contact'));

// Fallback skeleton loader
const SectionLoader = () => (
  <div className="w-full h-[50vh] flex items-center justify-center bg-slate-950/50 animate-pulse">
    <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
  </div>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false, // Keep false to allow native touch scrolling which is generally preferred on mobile
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-primary transition-colors duration-500 overflow-x-hidden">
      <Cursor />
      <Navbar />
      <main>
        {/* Hero is above the fold, so it's not lazy loaded */}
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Resumes />
          <Contact />
        </Suspense>
      </main>

      <footer className="py-12 border-t border-white/10 text-center relative z-10 w-full">
        <div className="container mx-auto px-6 text-slate-500 text-sm font-inter">
          <p>© 2026 Urvashi Vankar. Building production-ready AI applications.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
