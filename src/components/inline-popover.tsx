import { motion } from 'motion/react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';

interface InlinePopoverProps {
  label: ReactNode;
  children: ReactNode;
  side?: 'top' | 'bottom'; // initial hint
  placement?: 'top' | 'bottom' | 'auto';
  offset?: number;
}

type Coords = { top: number; left: number; side: 'top' | 'bottom'; arrowLeft: number };

export function InlinePopover({
  label,
  children,
  side = 'top',
  placement = 'auto',
  offset = 12,
}: InlinePopoverProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const triggerRef = useRef<HTMLSpanElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeout = useRef<number | null>(null);
  const [coords, setCoords] = useState<Coords | null>(null);

  // Close on outside click
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return;
      const t = e.target as Node | null;
      if (panelRef.current?.contains(t as Node)) return;
      if (triggerRef.current?.contains(t as Node)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  // Reposition the panel relative to trigger using DOM rects
  const reposition = useCallback(() => {
    if (!triggerRef.current || !panelRef.current) return;
    const tr = triggerRef.current.getBoundingClientRect();
    const pr = panelRef.current.getBoundingClientRect();

    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    const spaceAbove = tr.top;
    const spaceBelow = window.innerHeight - tr.bottom;
    let resolvedSide: 'top' | 'bottom' = side;
    if (placement === 'auto') {
      resolvedSide = spaceBelow >= spaceAbove ? 'bottom' : 'top';
    } else if (placement === 'top' || placement === 'bottom') {
      resolvedSide = placement;
    }

    const top =
      resolvedSide === 'bottom'
        ? tr.bottom + offset + scrollY
        : tr.top - pr.height - offset + scrollY;

    // Center horizontally over trigger; then clamp to viewport padding
    const rawLeft = tr.left + tr.width / 2 - pr.width / 2 + scrollX;
    const padding = 8;
    const maxLeft = window.innerWidth - pr.width - padding + scrollX;
    const minLeft = padding + scrollX;
    const left = Math.max(minLeft, Math.min(maxLeft, rawLeft));
    const arrowLeft = tr.left + tr.width / 2 + scrollX - left;

    setCoords({ top, left, side: resolvedSide, arrowLeft });
  }, [offset, placement, side]);

  useLayoutEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(reposition);
    const onScroll = () => reposition();
    const onResize = () => reposition();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [open, reposition]);

  const currentSide = coords?.side ?? side;
  const yClosed = currentSide === 'top' ? 8 : -8;
  const origin = currentSide === 'top' ? 'origin-bottom' : 'origin-top';

  return (
    <span
      ref={triggerRef}
      className="relative inline-flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
        hoverTimeout.current = window.setTimeout(() => setOpen(false), 120);
      }}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        className="focus-visible:ring-ring/60 rounded underline decoration-wavy decoration-accent-foreground/40 underline-offset-4 focus:outline-none focus-visible:ring-2"
        onClick={() => setOpen((o) => !o)}
      >
        {label}
      </button>

      {open &&
        createPortal(
          <motion.div
            id={id}
            ref={panelRef}
            role="dialog"
            aria-modal={false}
            initial={{ opacity: 0, y: yClosed, scale: 0.98 }}
            animate={{ opacity: open ? 1 : 0, y: open ? 0 : yClosed, scale: open ? 1 : 0.98 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            style={{
              pointerEvents: open ? 'auto' : 'none',
              position: 'absolute',
              top: coords?.top ?? -9999,
              left: coords?.left ?? -9999,
            }}
            className={`z-50 ${origin} bg-popover text-popover-foreground supports-[backdrop-filter]:bg-popover/75 max-w-[min(92vw,420px)] min-w-[260px] rounded-xl border border-black/5 shadow-lg ring-1 shadow-black/5 ring-black/5 backdrop-blur`}
            onMouseEnter={() => {
              if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
            }}
            onMouseLeave={() => setOpen(false)}
          >
            <div className="p-3.5">
              <div className="text-foreground/90 text-sm/6">{children}</div>
            </div>
          </motion.div>,
          document.body,
        )}
    </span>
  );
}
