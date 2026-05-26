// ===== Home.jsx — minimal hand-drawn-hills hero =====

import React from 'react';
const { useState, useEffect } = React;

// Import Helpers UI components
import Hills from '../helpers/Home/Hills.jsx';
import Hills2 from '../helpers/Home/Hills_2.jsx';

const Hero = ({ onGo, showHills = true }) => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        {showHills && <Hills2 />}

        <div className="hero-text">
          <div className="hero-prompt mono">~/the-shire $ <span className="hero-prompt-cmd">cat welcome.txt</span></div>

          <h1 className="hero-title">the shire</h1>

          <p className="hero-sub">
            a small portal for the projects we tend,
            <br />
            the wizards who tend them,
            <br />
            and the notes left along the way.
          </p>

          <div className="hero-cta">
            <button className="link" onClick={() => onGo("projects")}>
              see the quests <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 64px 0 96px;
        }
        .hero-inner {
          /* position: relative;*/
          /* width: 100%; */
        }
        .hero-text {
          position: relative;
          z-index: 2;
          max-width: 480px;
          margin: 0 auto;
          text-align: center;
          padding: 0 16px;
        }
        .hero-prompt {
          font-size: 12px;
          color: var(--ink-faint);
          margin-bottom: 28px;
          opacity: 0;
          animation: heroFade 600ms ease 200ms forwards;
        }
        .hero-prompt-cmd {
          color: var(--ink-soft);
        }
        .hero-title {
          font-size: clamp(56px, 9vw, 96px);
          font-weight: 500;
          letter-spacing: -0.04em;
          color: var(--ink);
          margin-bottom: 28px;
          opacity: 0;
          animation: heroRise 700ms cubic-bezier(0.22, 0.61, 0.36, 1) 350ms forwards;
        }
        .hero-sub {
          font-size: 14px;
          line-height: 1.7;
          color: var(--ink-soft);
          margin-bottom: 36px;
          opacity: 0;
          animation: heroFade 600ms ease 550ms forwards;
        }
        .hero-cta {
          opacity: 0;
          animation: heroFade 600ms ease 750ms forwards;
        }
        .arrow {
          transition: transform 220ms ease;
        }
        .link:hover .arrow { transform: translateX(3px); }
        @keyframes heroFade {
          to { opacity: 1; }
        }
        @keyframes heroRise {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

// === Below the fold: a single compact summary, very plain ===
const Summary = ({ data, onGo }) => {
  const counts = {
    projects: data.projects.length,
    wizards: data.contributors.length,
    notes: data.posts.length,
  };

  return (
    <section className="summary">
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: 28 }}>currently in the shire</div>

        <div className="summary-grid">
          <SummaryRow
            count={counts.projects}
            label="quests in progress"
            hint="projects we are building and tending"
            onClick={() => onGo("projects")}
            cta="see the quests"
          />
          <SummaryRow
            count={counts.wizards}
            label="wizards in residence"
            hint="contributors who keep the gardens"
            onClick={() => onGo("contributors")}
            cta="meet the wizards"
          />
          <SummaryRow
            count={counts.notes}
            label="entries in the grimoire"
            hint="notes, drafts, half-thoughts"
            onClick={() => onGo("blog")}
            cta="open the grimoire"
          />
        </div>
      </div>

      <style>{`
        .summary {
          padding: 64px 0 96px;
          border-top: 1px solid var(--rule-soft);
        }
        .summary-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        .summary-row {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          gap: 32px;
          padding: 28px 0;
          border-bottom: 1px solid var(--rule-soft);
          align-items: baseline;
        }
        .summary-row:last-child { border-bottom: 0; }
        @media (max-width: 640px) {
          .summary-row {
            grid-template-columns: 60px 1fr;
            gap: 16px;
          }
          .summary-row .summary-cta { grid-column: 1 / -1; }
        }
        .summary-count {
          font-size: 36px;
          font-weight: 500;
          color: var(--ink);
          letter-spacing: -0.04em;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }
        .summary-label {
          font-size: 14px;
          color: var(--ink);
        }
        .summary-hint {
          font-size: 12px;
          color: var(--ink-faint);
          margin-top: 4px;
        }
        .summary-cta {
          font-size: 12px;
        }
      `}</style>
    </section>
  );
};

const SummaryRow = ({ count, label, hint, cta, onClick }) => (
  <button
    className="summary-row"
    onClick={onClick}
    style={{
      appearance: "none",
      background: "none",
      border: 0,
      borderBottom: "1px solid var(--rule-soft)",
      textAlign: "left",
      font: "inherit",
      color: "inherit",
      cursor: "pointer",
      padding: "28px 0",
      width: "100%",
    }}
  >
    <div className="summary-count">{String(count).padStart(2, "0")}</div>
    <div>
      <div className="summary-label">{label}</div>
      <div className="summary-hint">{hint}</div>
    </div>
    <div className="summary-cta link subtle">{cta} →</div>
  </button>
);

const Home = ({ onGo, data, showHills = true }) => {
  return (
    <div className="page">
      <Hero onGo={onGo} showHills={showHills} />
      <Summary data={data} onGo={onGo} />
    </div>
  );
};

export default Home;
