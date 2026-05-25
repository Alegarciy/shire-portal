
// ===== Projects.jsx — quests, minimal list =====
import React from 'react';

const Projects = ({ data, onGo }) => {
  const [filter, setFilter] = React.useState("all");
  const all = data.projects;
  const tags = React.useMemo(() => {
    const s = new Set(["all"]);
    all.forEach(p => {
      const projectTagsArray = p.tags ? p.tags.split(',') : [];

      projectTagsArray.forEach(t => {
        const cleanTag = t.trim();
        if (cleanTag) s.add(cleanTag);
      })
    });
    return Array.from(s);
  }, [all]);

  const filtered = filter === "all" ? all : all.filter(p => p.tags.includes(filter));

  return (
    <div className="page">
      <div className="container" style={{ paddingTop: 56, paddingBottom: 80 }}>
        <header style={{ marginBottom: 56 }}>
          <div className="eyebrow">quests</div>
          <h1 style={{ marginTop: 16, fontSize: "clamp(40px, 5vw, 56px)", letterSpacing: "-0.03em" }}>
            projects in progress
          </h1>
          <p style={{ marginTop: 16, color: "var(--ink-soft)", maxWidth: 520, fontSize: 14, lineHeight: 1.7 }}>
            things we are building and tending. each one links to its repository on github.
          </p>
        </header>

        <div className="filter-row">
          <span className="filter-prompt mono">$ filter --by=tag</span>
          <div className="filter-chips">
            {tags.map(t => (
              <button
                key={t}
                className={"chip" + (filter === t ? " active" : "")}
                onClick={() => setFilter(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <ul className="quest-list">
          {filtered.map((p, i) => (
            <QuestRow key={p.title} project={p} index={i} />
          ))}
        </ul>

        <button className="link subtle" style={{ marginTop: 32 }}>
          + add a quest
        </button>
      </div>

      <style>{`
        .filter-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 0;
          border-top: 1px solid var(--rule-soft);
          border-bottom: 1px solid var(--rule-soft);
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .filter-prompt {
          font-size: 11px;
          color: var(--ink-faint);
        }
        .filter-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .chip {
          appearance: none;
          background: none;
          border: 0;
          color: var(--ink-faint);
          padding: 4px 8px;
          font-family: inherit;
          font-size: 12px;
          cursor: pointer;
          transition: color 180ms ease;
          border-radius: 2px;
        }
        .chip:hover { color: var(--ink); }
        .chip.active {
          color: var(--ink);
          background: var(--bg-soft);
        }
        .quest-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

const QuestRow = ({ project, index }) => {
  const p = project;
  return (
    <li className="quest-row" style={{ animationDelay: `${index * 40}ms` }}>
      <a href="#" className="quest-link" onClick={e => e.preventDefault()}>
        <div className="quest-status">
          <span className={"dot dot-" + p.status.toLowerCase()} />
        </div>

        <div className="quest-num mono">{String(index + 1).padStart(2, "0")}</div>

        <div className="quest-body">
          <div className="quest-head">
            <span className="quest-title">{p.title}</span>
            <span className="quest-tagline">— {p.tagline}</span>
          </div>
          <p className="quest-desc">{p.description}</p>
          <div className="quest-meta">
            <span className="mono">@{p.author}</span>
            <span className="dim">·</span>
            <span className="mono">★ {p.stars}</span>
            <span className="dim">·</span>
            <span className="mono">⑂ {p.forks}</span>
            <span className="dim">·</span>
            <span className="mono dim">{p.tags ? p.tags.split(',').join(" · ") : ''}</span>
          </div>
        </div>

        <div className="quest-arrow">→</div>
      </a>

      <style>{`
        .quest-row {
          border-bottom: 1px solid var(--rule-soft);
          animation: rowIn 500ms cubic-bezier(0.22, 0.61, 0.36, 1) both;
        }
        @keyframes rowIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .quest-link {
          display: grid;
          grid-template-columns: 16px 32px 1fr 16px;
          gap: 16px;
          padding: 24px 0;
          color: inherit;
          align-items: start;
          cursor: pointer;
          transition: padding 240ms ease, background 240ms ease;
        }
        .quest-link:hover {
          padding-left: 16px;
          padding-right: 16px;
          background: var(--bg-soft);
        }
        .quest-link:hover .quest-title { color: var(--accent); }
        .quest-link:hover .quest-arrow { transform: translateX(4px); color: var(--accent); }
        .quest-status {
          padding-top: 7px;
        }
        .dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }
        .dot-tended    { background: var(--green); }
        .dot-sapling   { background: var(--accent-soft); }
        .dot-wandering { background: var(--ink-faint); }
        .quest-num {
          padding-top: 4px;
          color: var(--ink-faint);
          font-size: 11px;
        }
        .quest-head {
          margin-bottom: 6px;
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          align-items: baseline;
        }
        .quest-title {
          font-size: 17px;
          font-weight: 500;
          color: var(--ink);
          transition: color 180ms ease;
        }
        .quest-tagline {
          color: var(--ink-soft);
          font-size: 14px;
        }
        .quest-desc {
          font-size: 13px;
          line-height: 1.65;
          color: var(--ink-soft);
          max-width: 64ch;
          margin-bottom: 10px;
        }
        .quest-meta {
          display: flex;
          gap: 8px;
          font-size: 11px;
          color: var(--ink-soft);
          flex-wrap: wrap;
        }
        .quest-meta .dim { color: var(--ink-faint); }
        .quest-meta .mono.dim { color: var(--ink-faint); }
        .quest-arrow {
          padding-top: 4px;
          color: var(--ink-faint);
          font-size: 16px;
          transition: transform 220ms ease, color 220ms ease;
        }
      `}</style>
    </li>
  );
};

export default Projects;
