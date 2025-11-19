import Experience from './components/experience';
import Footer from './components/footer';
import Hero from './components/hero';
import Projects from './components/projects';
import TechStack from './components/techStack';
import './index.css';

function App() {
  return (
    <>
      {/* Subtle top gradient for depth */}
      <div className="pointer-events-none fixed top-0 z-10 h-12 w-full bg-gradient-to-b from-zinc-300/60 to-transparent dark:from-zinc-900/70" />

      <main role="main" className="container space-y-10 pt-24 pb-20 md:max-w-3xl md:space-y-12">
        <Hero />
        <Projects />
        <Experience />
        <TechStack />
      </main>

      <Footer />
    </>
  );
}

export default App;
