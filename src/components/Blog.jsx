// ===== Blog.jsx — grimoire, minimal notion/obsidian feel =====

const Blog = ({ data }) => {
  const [open, setOpen] = React.useState(null);
  const posts = data.posts;

  if (open !== null) {
    const p = posts[open];
    return (
      <div className="page">
        <div className="grimoire-reader">
          <button
            className="link subtle"
            onClick={() => setOpen(null)}
            style={{ marginBottom: 32, fontSize: 12 }}
          >
            ← back to the grimoire
          </button>

          <div className="grimoire-reader-meta mono">
            <span>{p.date}</span>
            <span className="dim">·</span>
            <span>@{p.author}</span>
            <span className="dim">·</span>
            <span>{p.readingTime} read</span>
          </div>

          <h1 className="grimoire-reader-title">{p.title}</h1>

          <div className="grimoire-reader-tags mono">
            {p.tags.map(t => <span key={t}>#{t}</span>)}
          </div>

          <div className="grimoire-reader-body">
            <p className="lede">{p.excerpt}</p>

            <h2># a small beginning</h2>
            <p>
              the idea began on a wet evening in autumn, when nothing in particular
              was happening and i had a spare hour to look out the window. i wrote
              the first draft on the back of a grocery list.
            </p>

            <blockquote>
              <p>
                "the best tools are the ones you keep coming back to without
                noticing — like a path you've walked so many times you no longer
                see it."
              </p>
            </blockquote>

            <h2># what i tried</h2>
            <ul>
              <li>reading the docs slowly, with a cup of tea</li>
              <li>sketching the data model on paper before any code</li>
              <li>asking a friend for the most honest review they could give</li>
            </ul>

            <p>
              i have not yet decided what to do with the result. for now it sits
              in a folder marked <code>~/maybe</code>, where most of my favourite
              projects begin.
            </p>

            <hr />

            <p className="mono dim" style={{ fontSize: 11 }}>
              // this excerpt is for showcase only. real entries will be loaded from your repo's markdown.
            </p>
          </div>
        </div>

        <style>{`
          .grimoire-reader {
            max-width: 640px;
            margin: 0 auto;
            padding: 56px 32px 96px;
          }
          .grimoire-reader-meta {
            display: flex;
            gap: 8px;
            font-size: 11px;
            color: var(--ink-soft);
            margin-bottom: 16px;
          }
          .grimoire-reader-meta .dim { color: var(--ink-faint); }
          .grimoire-reader-title {
            font-size: clamp(32px, 4vw, 44px);
            letter-spacing: -0.03em;
            line-height: 1.15;
            margin-bottom: 14px;
          }
          .grimoire-reader-tags {
            display: flex;
            gap: 10px;
            font-size: 11px;
            color: var(--accent);
            margin-bottom: 40px;
          }
          .grimoire-reader-body {
            font-size: 15px;
            line-height: 1.75;
            color: var(--ink);
          }
          .grimoire-reader-body .lede {
            font-size: 16px;
            line-height: 1.7;
            color: var(--ink-soft);
            margin-bottom: 32px;
          }
          .grimoire-reader-body h2 {
            font-size: 18px;
            font-weight: 500;
            margin: 32px 0 12px;
            color: var(--ink);
          }
          .grimoire-reader-body p { margin: 0 0 18px; }
          .grimoire-reader-body ul { padding-left: 20px; margin: 0 0 18px; }
          .grimoire-reader-body li { margin-bottom: 6px; }
          .grimoire-reader-body blockquote {
            margin: 28px 0;
            padding: 4px 0 4px 16px;
            border-left: 2px solid var(--accent);
            color: var(--ink-soft);
          }
          .grimoire-reader-body blockquote p { margin: 0; }
          .grimoire-reader-body code {
            font-family: inherit;
            font-size: 0.9em;
            background: var(--bg-soft);
            padding: 1px 6px;
            border: 1px solid var(--rule-soft);
          }
          .grimoire-reader-body hr {
            border: 0;
            border-top: 1px solid var(--rule);
            margin: 36px 0;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="grimoire-list-wrap">
        <header style={{ marginBottom: 40 }}>
          <div className="eyebrow">grimoire</div>
          <h1 style={{ marginTop: 16, fontSize: "clamp(40px, 5vw, 56px)", letterSpacing: "-0.03em" }}>
            notes from the road
          </h1>
          <p style={{ marginTop: 16, color: "var(--ink-soft)", maxWidth: 520, fontSize: 14, lineHeight: 1.7 }}>
            short writings — drafts, half-thoughts, the occasional finished piece.
          </p>
        </header>

        <ul className="grimoire-list">
          {posts.map((p, i) => (
            <li key={p.title}>
              <button className="grimoire-row" onClick={() => setOpen(i)}>
                <div className="grimoire-row-date mono">{p.date}</div>
                <div className="grimoire-row-body">
                  <div className="grimoire-row-title">{p.title}</div>
                  <div className="grimoire-row-excerpt">{p.excerpt}</div>
                  <div className="grimoire-row-foot mono">
                    <span>@{p.author}</span>
                    <span className="dim">·</span>
                    <span>{p.readingTime}</span>
                    <span className="dim">·</span>
                    {p.tags.map(t => <span key={t}>#{t}</span>)}
                  </div>
                </div>
                <div className="grimoire-row-arrow">→</div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .grimoire-list-wrap {
          max-width: 720px;
          margin: 0 auto;
          padding: 56px 32px 96px;
        }
        .grimoire-list {
          list-style: none;
          padding: 0;
          margin: 0;
          border-top: 1px solid var(--rule-soft);
        }
        .grimoire-list > li {
          border-bottom: 1px solid var(--rule-soft);
        }
        .grimoire-row {
          width: 100%;
          appearance: none;
          background: none;
          border: 0;
          font-family: inherit;
          color: inherit;
          text-align: left;
          padding: 22px 0;
          display: grid;
          grid-template-columns: 110px 1fr 16px;
          gap: 24px;
          align-items: start;
          cursor: pointer;
          transition: padding 220ms ease, background 220ms ease;
        }
        @media (max-width: 640px) {
          .grimoire-row {
            grid-template-columns: 1fr 16px;
          }
          .grimoire-row-date {
            grid-column: 1 / -1;
            margin-bottom: 4px;
          }
        }
        .grimoire-row:hover {
          background: var(--bg-soft);
          padding-left: 16px;
          padding-right: 16px;
        }
        .grimoire-row:hover .grimoire-row-title { color: var(--accent); }
        .grimoire-row:hover .grimoire-row-arrow { transform: translateX(4px); color: var(--accent); }
        .grimoire-row-date {
          font-size: 11px;
          color: var(--ink-faint);
          padding-top: 4px;
        }
        .grimoire-row-title {
          font-size: 17px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 6px;
          transition: color 180ms ease;
        }
        .grimoire-row-excerpt {
          font-size: 13px;
          line-height: 1.65;
          color: var(--ink-soft);
          max-width: 60ch;
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .grimoire-row-foot {
          display: flex;
          gap: 8px;
          font-size: 11px;
          color: var(--ink-soft);
          flex-wrap: wrap;
        }
        .grimoire-row-foot .dim { color: var(--ink-faint); }
        .grimoire-row-arrow {
          color: var(--ink-faint);
          padding-top: 4px;
          transition: transform 220ms ease, color 220ms ease;
        }
      `}</style>
    </div>
  );
};

export default Blog;
