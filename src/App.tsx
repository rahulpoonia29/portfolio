import Experience from './components/experience';
import Footer from './components/footer';
import Hero from './components/hero';
import Projects from './components/projects';
import TechStack from './components/techStack';
import './index.css';
import { motion } from 'motion/react';
import { ClientOnly } from 'vite-react-ssg/single-page';
import ThemeToggle from './components/theme-toggle';

function App() {
  return (
    <>
      {/* Subtle top gradient for depth */}
      {/* Gradient removed for terminal vibe */}

      <div className="fixed top-6 right-6 z-50">
        <ClientOnly>
          {() => (
            <ThemeToggle
              className="border-border hover:bg-muted/80 flex size-9 cursor-pointer items-center justify-center rounded-md border bg-transparent transition-colors"
              iconClassName="size-4"
            />
          )}
        </ClientOnly>
      </div>

      <motion.main
        role="main"
        className="container space-y-10 pt-24 pb-20 md:max-w-3xl md:space-y-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <Hero />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <Projects />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <Experience />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <TechStack />
        </motion.div>
      </motion.main>

      <Footer />
    </>
  );
}

export default App;
