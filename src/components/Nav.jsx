
// ===== Nav.jsx — terminal-style minimal =====

const TABS = [
  { id: "home",         label: "home" },
  { id: "projects",     label: "quests" },
  { id: "contributors", label: "wizards" },
  { id: "blog",         label: "grimoire" },
];

const Nav = ({ active, onChange, theme, onToggleTheme }) => {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <button className="nav-brand" onClick={() => onChange("home")}>
          <span className="prompt">~ $</span>
          <span className="brand-name">the-shire</span>
          <span className="cursor" />
        </button>

        <nav className="nav-tabs" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              className="nav-tab"
              onClick={() => onChange(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            title={theme === "dark" ? "switch to light" : "switch to dark"}
          >
            {theme === "dark" ? "[ light ]" : "[ dark ]"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
