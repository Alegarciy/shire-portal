
// ===== Contributors.jsx — wizards, horizontal card showcase, minimal =====
import React from 'react';

const Contributors = ({ data }) => {
  const [active, setActive] = React.useState(0);
  const list = data.contributors;
  const c = list[active];

  return (
    <div className="page">
      <div className="container" style={{ paddingTop: 56, paddingBottom: 32 }}>
        <header style={{ marginBottom: 40 }}>
          <div className="eyebrow">wizards</div>
          <h1 style={{ marginTop: 16, fontSize: "clamp(40px, 5vw, 56px)", letterSpacing: "-0.03em" }}>
            in residence
          </h1>
          <p style={{ marginTop: 16, color: "var(--ink-soft)", maxWidth: 520, fontSize: 14, lineHeight: 1.7 }}>
            the contributors who keep the gardens. click a card to read about the wizard.
          </p>
        </header>
      </div>

      <div className="wizard-strip-wrap">
        <div className="wizard-strip">
          <div className="strip-spacer" />
          {list.map((w, i) => (
            <WizardCard
              key={w.handle}
              wizard={w}
              active={active === i}
              index={i}
              onClick={() => setActive(i)}
            />
          ))}
          <div className="strip-spacer" />
        </div>
      </div>

      <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
        <WizardDetail wizard={c} />
      </div>

      <style>{`
        .wizard-strip-wrap {
          position: relative;
          padding: 0 0 8px;
        }
        .wizard-strip {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 12px 0 24px;
          scrollbar-width: thin;
          scrollbar-color: var(--rule) transparent;
        }
        .wizard-strip::-webkit-scrollbar { height: 4px; }
        .wizard-strip::-webkit-scrollbar-track { background: transparent; }
        .wizard-strip::-webkit-scrollbar-thumb { background: var(--rule); }
        .strip-spacer {
          flex: 0 0 max(32px, calc((100vw - 1080px) / 2 + 32px));
        }
      `}</style>
    </div>
  );
};

const WizardCard = ({ wizard, active, onClick, index }) => {
  const w = wizard;
  return (
    <button
      className={"wizard-card" + (active ? " active" : "")}
      onClick={onClick}
    >
      <div className="wizard-card-num mono">w_{String(index + 1).padStart(2, "0")}</div>

      <div className="wizard-mark">
        <WizardGlyph seed={w.handle} active={active} />
      </div>

      <div className="wizard-card-body">
        <div className="wizard-name">{w.name}</div>
        <div className="wizard-handle mono">@{w.handle}</div>
        <div className="wizard-title">{w.title}</div>
      </div>

      <div className="wizard-card-foot mono">
        <span>{w.commits} commits</span>
        <span className="dim">·</span>
        <span>{w.repos} repos</span>
      </div>

      <style>{`
        .wizard-card {
          flex: 0 0 280px;
          padding: 20px;
          background: var(--card);
          border: 1px solid var(--rule);
          text-align: left;
          font-family: inherit;
          color: inherit;
          cursor: pointer;
          scroll-snap-align: start;
          transition: border-color 220ms ease, transform 220ms ease;
          display: flex;
          flex-direction: column;
          gap: 16px;
          appearance: none;
        }
        .wizard-card:hover {
          border-color: var(--ink-faint);
        }
        .wizard-card.active {
          border-color: var(--accent);
        }
        .wizard-card-num {
          font-size: 10px;
          color: var(--ink-faint);
          letter-spacing: 0;
        }
        .wizard-mark {
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          border: 1px solid var(--rule);
        }
        .wizard-name {
          font-size: 16px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 4px;
        }
        .wizard-handle {
          font-size: 11px;
          color: var(--ink-faint);
          margin-bottom: 8px;
        }
        .wizard-title {
          font-size: 12px;
          color: var(--ink-soft);
          line-height: 1.5;
        }
        .wizard-card-foot {
          display: flex;
          gap: 8px;
          font-size: 11px;
          color: var(--ink-soft);
          padding-top: 14px;
          border-top: 1px dashed var(--rule);
          margin-top: auto;
        }
        .wizard-card-foot .dim { color: var(--ink-faint); }
      `}</style>
    </button>
  );
};

// Tiny line glyph — variant per wizard. No fills, no gradients.
const WizardGlyph = ({ seed, active }) => {
  const hash = React.useMemo(() => {
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
    return Math.abs(h);
  }, [seed]);
  const v = hash % 5;
  const color = active ? "var(--accent)" : "var(--ink)";

  const stroke = { stroke: color, strokeWidth: 1.2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };

  if (v === 0) {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="9" {...stroke} />
        <line x1="14" y1="5" x2="14" y2="23" {...stroke} />
      </svg>
    );
  }
  if (v === 1) {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28">
        <polygon points="14,4 24,22 4,22" {...stroke} />
      </svg>
    );
  }
  if (v === 2) {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28">
        <rect x="6" y="6" width="16" height="16" {...stroke} />
        <line x1="6" y1="6" x2="22" y2="22" {...stroke} />
      </svg>
    );
  }
  if (v === 3) {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28">
        <polygon points="14,4 23,14 14,24 5,14" {...stroke} />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 28 28">
      <path d="M 4 14 Q 14 4 24 14 Q 14 24 4 14 Z" {...stroke} />
    </svg>
  );
};

const WizardDetail = ({ wizard }) => {
  const w = wizard;

  return (
    <div key={w.handle} className="wizard-detail page">
      <div className="wizard-detail-meta mono">
        <span>id:</span>
        <span>@{w.handle}</span>
        <span className="dim">·</span>
        <span>location:</span>
        <span>{w.location}</span>
      </div>

      <h2 className="wizard-detail-name">{w.name}</h2>
      <div className="wizard-detail-title">— {w.title}</div>

      <p className="wizard-detail-bio">{w.bio}</p>

      <div className="wizard-detail-badges mono">
        {w.badges.split(',').map(b => (
          <span key={b} className="badge">[ {b} ]</span>
        ))}
      </div>

      <div className="wizard-stats">
        <div className="wizard-stat">
          <div className="wizard-stat-val">{w.commits}</div>
          <div className="wizard-stat-lbl mono">commits</div>
        </div>
        <div className="wizard-stat">
          <div className="wizard-stat-val">{w.repos}</div>
          <div className="wizard-stat-lbl mono">repos</div>
        </div>
      </div>

      <a
        href={`https://github.com/${w.handle}`}
        target="_blank"
        rel="noopener"
        className="link"
        style={{ marginTop: 32 }}
      >
        visit on github <span>→</span>
      </a>

      <style>{`
        .wizard-detail {
          max-width: 640px;
          padding-top: 8px;
        }
        .wizard-detail-meta {
          display: flex;
          gap: 8px;
          font-size: 11px;
          color: var(--ink-soft);
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .wizard-detail-meta .dim { color: var(--ink-faint); }
        .wizard-detail-name {
          font-size: clamp(36px, 4.5vw, 48px);
          letter-spacing: -0.03em;
          margin-bottom: 6px;
        }
        .wizard-detail-title {
          color: var(--ink-soft);
          font-size: 16px;
          margin-bottom: 24px;
        }
        .wizard-detail-bio {
          font-size: 15px;
          line-height: 1.7;
          color: var(--ink);
          max-width: 540px;
          margin-bottom: 24px;
        }
        .wizard-detail-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 32px;
          font-size: 11px;
          color: var(--ink-soft);
        }
        .wizard-stats {
          display: flex;
          gap: 40px;
          padding-top: 20px;
          border-top: 1px solid var(--rule-soft);
        }
        .wizard-stat-val {
          font-size: 32px;
          font-weight: 500;
          letter-spacing: -0.03em;
          font-variant-numeric: tabular-nums;
        }
        .wizard-stat-lbl {
          font-size: 11px;
          color: var(--ink-faint);
          margin-top: 2px;
        }
      `}</style>
    </div>
  );
};

export default Contributors;

