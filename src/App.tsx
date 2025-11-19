import { motion } from 'motion/react';
import Experience from './components/experience';
import Footer from './components/footer';
import Hero from './components/hero';
import Projects from './components/projects';
import TechStack from './components/techStack';
import './index.css';

import CommandMenu from './components/command-menu';

function App() {
  return (
    <>
      <CommandMenu />
      <div className="fixed top-6 right-6 z-50"></div>

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
