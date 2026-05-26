// ===== Contributors.jsx — wizards, ultra-minimal =====
import React from 'react';

const Contributors = ({ data }) => {
  const [active, setActive] = React.useState(0);
  const list = data.contributors;
  const w = list[active];

  return (
    <>
      <div className="page wizards-page">
        <div className="container" style={{ paddingTop: 56, paddingBottom: 80, position: "relative" }}>
          <header style={{ marginBottom: 48, position: "relative", zIndex: 1 }}>
            <div className="eyebrow">wizards</div>
            <h1 style={{ marginTop: 16, fontSize: "clamp(40px, 5vw, 56px)", letterSpacing: "-0.03em" }}>
              in residence
            </h1>
          </header>

          {/* Horizontal name strip — no cards, no boxes */}
          <div className="wizard-strip-wrap" aria-label="wizards">
            <div className="wizard-strip">
              {list.map((wz, i) => (
                <button
                  key={wz.handle}
                  className={"wizard-pill" + (active === i ? " active" : "")}
                  onClick={() => setActive(i)}
                >
                  <span className="wizard-pill-name">{wz.name.split(" ")[0].toLowerCase()}</span>
                  <span className="wizard-pill-handle mono">@{wz.handle.toLowerCase()}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Detail — plain text, no panel */}
          <article key={w.handle} className="wizard-detail page">
            <div className="wizard-detail-line mono">
              <span className="dim">$</span>{" "}
              <span>cat ./wizards/{w.handle.toLowerCase()}.md</span>
            </div>

            <h2 className="wizard-detail-name">{w.name}</h2>
            <div className="wizard-detail-title">— {w.title}</div>

            <p className="wizard-detail-bio">{w.bio}</p>

            <dl className="wizard-detail-fields mono">
              <div>
                <dt>handle</dt>
                <dd>@{w.handle}</dd>
              </div>
              <div>
                <dt>location</dt>
                <dd>{w.location}</dd>
              </div>
              <div>
                <dt>commits</dt>
                <dd>{w.commits}</dd>
              </div>
              <div>
                <dt>repos</dt>
                <dd>{w.repos}</dd>
              </div>
              <div>
                <dt>tags</dt>
                <dd>{w.badges.split(',').map(b => b.toLowerCase()).join(", ")}</dd>
              </div>
            </dl>

            <a
              href={`https://github.com/${w.handle}`}
              target="_blank"
              rel="noopener"
              className="link"
              style={{ marginTop: 8 }}
            >
              visit on github <span>→</span>
            </a>
          </article>
        </div>


        <style>{`
          .wizard-strip-wrap {
            padding: 4px 0 24px;
            margin: 0 -32px;
            border-bottom: 1px solid var(--rule-soft);
          }
          @media (max-width: 720px) {
            .wizard-strip-wrap { margin: 0 -20px; }
          }
          .wizard-strip {
            display: flex;
            gap: 4px;
            overflow-x: auto;
            padding: 8px 32px 20px;
            scrollbar-width: thin;
            scrollbar-color: var(--rule) transparent;
          }
          @media (max-width: 720px) {
            .wizard-strip { padding: 8px 20px 20px; }
          }
          .wizard-strip::-webkit-scrollbar { height: 3px; }
          .wizard-strip::-webkit-scrollbar-track { background: transparent; }
          .wizard-strip::-webkit-scrollbar-thumb { background: var(--rule); }

          .wizard-pill {
            appearance: none;
            background: none;
            border: 0;
            padding: 8px 14px 8px 0;
            margin-right: 8px;
            font-family: inherit;
            color: var(--ink-faint);
            cursor: pointer;
            display: inline-flex;
            align-items: baseline;
            gap: 8px;
            white-space: nowrap;
            flex-shrink: 0;
            transition: color 180ms ease;
            border-bottom: 1px solid transparent;
          }
          .wizard-pill:hover { color: var(--ink); }
          .wizard-pill.active {
            color: var(--ink);
            border-bottom-color: var(--accent);
          }
          .wizard-pill-name {
            font-size: 14px;
          }
          .wizard-pill-handle {
            font-size: 11px;
            color: var(--ink-faint);
          }
          .wizard-pill.active .wizard-pill-handle {
            color: var(--ink-soft);
          }

          .wizard-detail {
            margin-top: 56px;
            max-width: 560px;
          }
          .wizard-detail-line {
            font-size: 11px;
            color: var(--ink-soft);
            margin-bottom: 24px;
          }
          .wizard-detail-line .dim { color: var(--ink-faint); }
          .wizard-detail-name {
            font-size: clamp(36px, 4.5vw, 48px);
            letter-spacing: -0.03em;
            margin-bottom: 6px;
          }
          .wizard-detail-title {
            color: var(--ink-soft);
            font-size: 16px;
            margin-bottom: 28px;
          }
          .wizard-detail-bio {
            font-size: 15px;
            line-height: 1.75;
            color: var(--ink);
            margin-bottom: 36px;
          }

          /* Field list — plain key/value, no boxes */
          .wizard-detail-fields {
            font-size: 12px;
            margin: 0 0 36px;
            padding: 0;
            display: grid;
            gap: 6px;
          }
          .wizard-detail-fields > div {
            display: grid;
            grid-template-columns: 100px 1fr;
            gap: 16px;
          }
          .wizard-detail-fields dt {
            color: var(--ink-faint);
            margin: 0;
          }
          .wizard-detail-fields dd {
            margin: 0;
            color: var(--ink);
          }
        `}</style>
      </div>
    
      <WizardHillBottom />
    </>
  );
};

// Bottom-right hill + windmill — spans the viewport, drawn in with SVG paths
const WizardHillBottom = () => (
  <div className="wizard-corner-bottom" aria-hidden="true">
    <svg
      viewBox="0 0 800 560"
      preserveAspectRatio="xMaxYMax slice"
      fill="none"
    >
      {/* A long rising hill — reaches the bottom-left edge, exits the right edge */}
      <path
        d="M 0 560 Q 140 460 280 380 Q 440 290 800 240"
        className="wcb-hill"
      />

      {/* Windmill #2 — MEDIUM, middle of the slope */}
      <g className="wcb-windmill wcb-w2">
        <line x1="406" y1="325" x2="410" y2="170" className="wcb-stroke" />
        <g className="wcb-rotor" style={{ transformOrigin: "410px 170px" }}>
          <line x1="410" y1="170" x2="411" y2="128" className="wcb-blade" />
          <line x1="410" y1="170" x2="446" y2="190" className="wcb-blade" />
          <line x1="410" y1="170" x2="376" y2="196" className="wcb-blade" />
        </g>
      </g>

      {/* Windmill #3 — SMALLEST, near the right edge */}
      <g className="wcb-windmill wcb-w3">
        <line x1="632" y1="268" x2="636" y2="154" className="wcb-stroke wcb-tower-sm" />
        <g className="wcb-rotor wcb-rotor-fast" style={{ transformOrigin: "636px 154px" }}>
          <line x1="636" y1="154" x2="637" y2="126" className="wcb-blade wcb-blade-sm" />
          <line x1="636" y1="154" x2="662" y2="168" className="wcb-blade wcb-blade-sm" />
          <line x1="636" y1="154" x2="612" y2="174" className="wcb-blade wcb-blade-sm" />
        </g>
      </g>
    </svg>

    <style>{`
      .wizard-corner-bottom {
        position: fixed; 
        bottom: -80px; 
        right: -80px;
        width: clamp(800px, 95vw, 1500px);
        height: clamp(560px, 75vw, 1000px);
        pointer-events: none;
        z-index: 0; 
        --field: #4a7a3a;
      }
      [data-theme="dark"] .wizard-corner-bottom {
        --field: #7fb066;
      }
      .wizard-corner-bottom svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      @media (max-width: 960px) {
        .wizard-corner-bottom { display: none; }
      }
      
      .wcb-hill {
        stroke: var(--field);
        stroke-width: 1.5;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
        stroke-dasharray: 1400;
        stroke-dashoffset: 1400;
        animation: wcbDraw 2.2s cubic-bezier(0.4, 0, 0.2, 1) 600ms forwards;
      }

      /* Base stroke settings for towers and blades */
      .wcb-stroke, .wcb-blade {
        stroke: var(--field);
        stroke-width: 1.5;
        stroke-linecap: round;
        fill: none;
        /* INCREASED dasharray to 300 to fully cover lines before they draw! */
        stroke-dasharray: 300;
        stroke-dashoffset: 300;
        animation: wcbDraw 1.2s ease-out forwards;
      }

      /* Hub styling so it fades in smoothly as the blades draw */
      .wcb-hub {
        fill: var(--field);
        opacity: 0;
        animation: wcbFade 0.6s ease-out forwards;
      }
      
      /* Specific widths */
      .wcb-tower-lg, .wcb-blade-lg { stroke-width: 2; }
      .wcb-tower-sm, .wcb-blade-sm { stroke-width: 1.2; }

      /* Staggered drawing delays — linked up the tower, blades, and hub */
      .wcb-w1 .wcb-stroke, .wcb-w1 .wcb-blade, .wcb-w1 .wcb-hub { animation-delay: 1800ms; }
      .wcb-w2 .wcb-stroke, .wcb-w2 .wcb-blade, .wcb-w2 .wcb-hub { animation-delay: 2200ms; }
      .wcb-w3 .wcb-stroke, .wcb-w3 .wcb-blade, .wcb-w3 .wcb-hub { animation-delay: 2600ms; }

      /* Rotation settings */
      .wcb-rotor {
        animation: wcbSpin 60s linear infinite;
      }
      .wcb-rotor-slow { animation-duration: 55s; }
      .wcb-rotor-fast { animation-duration: 54s; }

      /* Keyframes */
      @keyframes wcbDraw { to { stroke-dashoffset: 0; } }
      @keyframes wcbFade { to { opacity: 1; } }
      @keyframes wcbSpin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }

      /* Accessibility */
      @media (prefers-reduced-motion: reduce) {
        .wcb-rotor, .wcb-rotor-slow, .wcb-rotor-fast { animation: none; }
      }
    `}</style>
  </div>
);

export default Contributors;
