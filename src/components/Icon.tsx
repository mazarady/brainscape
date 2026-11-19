/**
 * Small SVG icon set. Using SVG instead of text characters (▶ ✎ ✕ •••) keeps
 * icons exactly centred — glyph position otherwise depends on font metrics and
 * varies between devices.
 */
const PATHS = {
  // Triangle drawn a touch right of centre so it *looks* centred (optical balance).
  play: <path d="M5.5 3.2v9.6L13 8z" fill="currentColor" />,
  more: (
    <g fill="currentColor">
      <circle cx="3" cy="8" r="1.6" />
      <circle cx="8" cy="8" r="1.6" />
      <circle cx="13" cy="8" r="1.6" />
    </g>
  ),
  close: <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />,
  check: <path d="M3 8.5l3.2 3.2L13 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  edit: (
    <path
      d="M10.6 2.6l2.8 2.8-7.6 7.6-3.4.6.6-3.4zM9.4 3.8l2.8 2.8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  trash: (
    <path
      d="M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.7 8.5h5.6l.7-8.5M6.8 7v4M9.2 7v4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  menu: <path d="M2.5 4h11M2.5 8h11M2.5 12h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />,
  plus: <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />,
  chevron: <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
} as const;

export type IconName = keyof typeof PATHS;

export default function Icon({ name, size = 16 }: { name: IconName; size?: number }) {
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      {PATHS[name]}
    </svg>
  );
}
