import { motion, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

const fontSize = 16;
const padding = 4;
const height = fontSize + padding;

export function Timer({ value }: { value: string }) {
  const [time, meridiem] = value.split(' '); // "hh:mm" and "AM/PM"
  const units = time.split(':');
  const unitCount = units.length;

  return (
    <div style={{ fontSize }} className="chip flex items-center justify-self-end overflow-hidden">
      {units.map((unit, i) => (
        <div key={i} className="flex text-sm">
          {unit.split('').map((digit, j) => (
            <Digit key={`${i}-${j}`} value={+digit} />
          ))}
          {i < unitCount - 1 && <span>:</span>}
        </div>
      ))}
      <span className="ms-2">{meridiem}</span>
    </div>
  );
}

function Digit({ value }: { value: number }) {
  const spring = useSpring(value, { stiffness: 400, damping: 20 });

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  const y = useTransform(spring, (latest) => -latest * height);

  return (
    <div style={{ height }} className="relative w-[1ch] overflow-hidden tabular-nums">
      <motion.div style={{ y }} className="absolute inset-0">
        {[...Array(10).keys()].map((i) => (
          <span key={i} style={{ height }} className="flex items-center justify-center">
            {i}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
