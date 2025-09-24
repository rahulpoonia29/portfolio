import Experience from './components/experience';
import Footer from './components/footer';
import Hero from './components/hero';
import Projects from './components/projects';
import TechStack from './components/techStack';
import './index.css';

function App() {
  return (
    <>
      <div className="pointer-events-none fixed top-0 z-10 h-12 w-full bg-gradient-to-b from-zinc-300/80 to-transparent dark:from-zinc-900/70" />
      <main className="mx-auto items-center justify-center space-y-4 px-4 py-20 pb-16 font-mono md:max-w-3xl">
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
