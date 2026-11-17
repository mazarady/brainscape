import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

export interface MenuItem {
  label: string;
  onClick: () => unknown;
  danger?: boolean;
}

export default function Menu({ items }: { items: MenuItem[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);
  return (
    <div className="menu" ref={ref}>
      <button className="icon-btn dots" aria-label="More options" onClick={() => setOpen((o) => !o)}><Icon name="more" /></button>
      {open && (
        <div className="menu-pop">
          {items.map((it) => (
            <button
              key={it.label}
              className={it.danger ? 'danger' : ''}
              onClick={() => {
                setOpen(false);
                it.onClick();
              }}
            >
              {it.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
