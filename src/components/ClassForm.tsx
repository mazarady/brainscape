import { useState } from 'react';
import { CLASS_COLORS, CLASS_ICONS } from '../seed';

export interface ClassFormValues {
  name: string;
  icon: string;
  color: string;
  description: string;
}

export default function ClassForm({
  initial,
  submitLabel,
  onSubmit,
}: {
  initial?: ClassFormValues;
  submitLabel: string;
  onSubmit: (v: ClassFormValues) => void;
}) {
  const [v, setV] = useState<ClassFormValues>(
    initial ?? { name: '', icon: CLASS_ICONS[0], color: CLASS_COLORS[0], description: '' },
  );
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (v.name.trim()) onSubmit({ ...v, name: v.name.trim() });
      }}
    >
      <label>
        Class name
        <input autoFocus value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} placeholder="e.g. Organic Chemistry" />
      </label>
      <label>
        Description <span className="muted">(optional)</span>
        <textarea rows={2} value={v.description} onChange={(e) => setV({ ...v, description: e.target.value })} />
      </label>
      <div className="field-label">Icon</div>
      <div className="swatches">
        {CLASS_ICONS.map((i) => (
          <button type="button" key={i} className={`swatch icon ${v.icon === i ? 'on' : ''}`} onClick={() => setV({ ...v, icon: i })}>
            {i}
          </button>
        ))}
      </div>
      <div className="field-label">Color</div>
      <div className="swatches">
        {CLASS_COLORS.map((c) => (
          <button
            type="button"
            key={c}
            aria-label={c}
            className={`swatch ${v.color === c ? 'on' : ''}`}
            style={{ background: c }}
            onClick={() => setV({ ...v, color: c })}
          />
        ))}
      </div>
      <div className="form-actions">
        <button className="btn primary" type="submit" disabled={!v.name.trim()}>
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
