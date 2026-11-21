import { useState } from 'react';
import Modal from './Modal';

type Units = 'metric' | 'imperial';

/** Images of each side of the RDP, per unit system. Add imperial pictures here when available. */
const TABLES: Record<Units, { src: string; alt: string }[]> = {
  metric: [
    { src: '/rdp/metric-1.webp', alt: 'RDP metric side 1: Table 1 (no decompression limits and pressure groups) and Table 2 (surface interval credit)' },
    { src: '/rdp/metric-2.webp', alt: 'RDP metric side 2: Table 3 (repetitive dive timetable) and rules' },
  ],
  imperial: [],
};

const UNITS_KEY = 'recall-rdp-units';

/** "RDP table" button that opens the Recreational Dive Planner, with a metric / imperial switch. */
export default function RdpTableButton({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [units, setUnits] = useState<Units>(() => {
    try {
      return localStorage.getItem(UNITS_KEY) === 'imperial' ? 'imperial' : 'metric';
    } catch {
      return 'metric';
    }
  });
  const [zoom, setZoom] = useState(false);
  const pick = (u: Units) => {
    setUnits(u);
    try {
      localStorage.setItem(UNITS_KEY, u);
    } catch {
      /* per-browser convenience only */
    }
  };
  const pages = TABLES[units];
  return (
    <>
      <button type="button" className="btn sm rdp-btn" onClick={() => setOpen(true)}>
        Show RDP table
      </button>
      {open && (
        <Modal wide title="Recreational Dive Planner" onClose={() => setOpen(false)}>
          <div className="rdp-bar">
            <div className="rdp-tabs" role="tablist">
              <button role="tab" aria-selected={units === 'metric'} className={units === 'metric' ? 'on' : ''} onClick={() => pick('metric')}>Metric</button>
              <button role="tab" aria-selected={units === 'imperial'} className={units === 'imperial' ? 'on' : ''} onClick={() => pick('imperial')}>Imperial</button>
            </div>
            {pages.length > 0 && (
              <button type="button" className="btn sm" onClick={() => setZoom((z) => !z)}>{zoom ? 'Fit to screen' : 'Zoom in'}</button>
            )}
          </div>
          {pages.length ? (
            <div className={`rdp-pages ${zoom ? 'zoomed' : ''}`}>
              {pages.map((p) => (
                <img key={p.src} src={p.src} alt={p.alt} />
              ))}
            </div>
          ) : (
            <p className="muted">The imperial (feet) table hasn’t been added yet.</p>
          )}
        </Modal>
      )}
    </>
  );
}
