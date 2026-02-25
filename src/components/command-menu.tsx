import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      if (e.key === '?' || ((e.ctrlKey || e.metaKey) && e.key === 'k')) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      // if (!isOpen) return; // Only handle other keys if open

      switch (e.key) {
        case 'Escape':
          setIsOpen(false);
          break;
        case 't':
          document.getElementById('theme-toggle')?.click();
          break;
        case 'g':
          window.open('https://github.com/rahulpoonia29', '_blank');
          break;
        case 'l':
          window.open('https://www.linkedin.com/in/rahulpoonia', '_blank');
          break;
        case 'i':
          window.open('https://www.instagram.com/rahulpoonia029', '_blank');
          break;
        case 'e':
          window.open('mailto:rahulpoonia229@gmail.com', '_self');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="border-border bg-card animate-in fade-in zoom-in-95 w-full max-w-md overflow-hidden rounded-lg border p-0 shadow-2xl duration-200">
        <div className="border-border bg-muted/50 border-b px-4 py-3">
          <h2 className="text-foreground flex items-center gap-2 font-mono text-sm font-bold">
            <span className="text-primary">&gt;</span> Command Menu
          </h2>
        </div>
        <div className="p-2">
          <div className="grid gap-1">
            <CommandItem keyKey="t" label="Toggle Theme" />
            <CommandItem keyKey="g" label="Visit GitHub" />
            <CommandItem keyKey="l" label="Visit LinkedIn" />
            <CommandItem keyKey="i" label="Visit Instagram" />
            <CommandItem keyKey="e" label="Send Email" />
            <CommandItem keyKey="Ctrl+K" label="Toggle Menu" />
            <CommandItem keyKey="Esc" label="Close" />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function CommandItem({ keyKey, label }: { keyKey: string; label: string }) {
  return (
    <div className="text-muted-foreground hover:bg-muted/50 hover:text-foreground flex items-center justify-between rounded px-3 py-2 text-sm transition-colors">
      <span>{label}</span>
      <kbd className="kbd">{keyKey}</kbd>
    </div>
  );
}
