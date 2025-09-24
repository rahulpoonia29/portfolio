import { ClientOnly } from 'vite-react-ssg/single-page';
import Experience from './components/experience';
import Footer from './components/footer';
import Hero from './components/hero';
import Projects from './components/projects';
import TechStack from './components/techStack';
import { ThemeProvider } from './components/theme-provider';
import ThemeToggle from './components/theme-toggle';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      {/* <ThemeToggle /> */}
      <ClientOnly>{() => <ThemeToggle />}</ClientOnly>
      {/* <div className="pointer-events-none fixed top-0 z-10 h-12 w-full bg-gradient-to-b from-zinc-300/80 to-transparent dark:from-zinc-900/70" /> */}
      <main className="mx-auto items-center justify-center space-y-4 py-20 pb-16 font-mono md:max-w-3xl">
        <Hero />
        {/* <About /> */}
        <Projects />
        <Experience />
        <TechStack />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
