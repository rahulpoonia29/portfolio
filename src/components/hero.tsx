import { IconCode } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Timer } from './timer';
import { CONTACT_DETAILS } from '@/constants/contactDetails';
import { motion } from 'motion/react';

function useLocalTime() {
  // Default to string of
  const [time, setTime] = useState<string>('00:00:00 PM');
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
      );
    update();
    const id = setInterval(update, 600);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Hero() {
  const time = useLocalTime();

  return (
    <section id="home" className="flex scroll-mt-20 flex-col gap-4" aria-labelledby="hero-heading">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
        <IconCode
          size={28}
          className="text-foreground cursor-pointer transition-transform duration-300 hover:-rotate-12"
          aria-hidden="true"
        />
        <h1 id="hero-heading" className="text-2xl font-semibold text-zinc-900 dark:text-zinc-200">
          Rahul Poonia
        </h1>
        <Timer value={time} />
      </div>
      <div className="space-y-3">
        <p className="text-muted-foreground max-w text-base leading-relaxed text-pretty">
          I build reliable, accessible web products with a focus on developer experience &
          performance. I enjoy working across the stack—turning ambiguous ideas into shipped,
          maintainable features.
        </p>
        <div className="flex flex-wrap gap-2 text-sm font-medium">
          {CONTACT_DETAILS.map((c) => (
            <motion.a
              href={c.link}
              className="border-border hover:border-ring inline-flex cursor-pointer items-center overflow-hidden rounded-md border p-1 transition-colors"
              key={c.link}
              initial="hidden"
              whileHover="visible"
              variants={{}} // Empty variants to propagate to children
            >
              <c.icon className="text-foreground/80 size-5" stroke={1.5} />
              <motion.span
                variants={{
                  hidden: { width: 0, opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } },
                  visible: {
                    width: 'auto',
                    opacity: 1,
                    transition: { duration: 0.2, ease: 'easeOut' },
                  },
                }}
                className="text-foreground/80 ps-1 whitespace-nowrap"
              >
                {c.cta}
              </motion.span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
