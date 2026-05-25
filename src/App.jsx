// ===== App.jsx =====

import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';

// 1. Import your brand new boilerplate data
import { SHIRE_DATA } from './data.jsx'; 

const Quests = ({ data }) => <div className="container mono" style={{ padding: 40 }}>Tracking {data.length} active quests...</div>;
const Wizards = ({ data }) => <div className="container mono" style={{ padding: 40 }}>{data.length} wizards online.</div>;
const Grimoire = ({ data }) => <div className="container mono" style={{ padding: 40 }}>{data.length} notes recorded.</div>;

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app" data-screen-label={activeTab}>
      <Nav 
        active={activeTab} 
        onChange={handleTabChange} 
        theme={isDarkMode ? "dark" : "light"} 
        onToggleTheme={() => setIsDarkMode(!isDarkMode)} 
      />

      <main>
        {/* 2. Pass the specific data slices down to your views */}
        {activeTab === "home" && <Home onGo={handleTabChange} data={SHIRE_DATA} />}
        {activeTab === "projects" && <Quests data={SHIRE_DATA.projects} />}
        {activeTab === "contributors" && <Wizards data={SHIRE_DATA.contributors} />}
        {activeTab === "blog" && <Grimoire data={SHIRE_DATA.posts} />}
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="mono">~ $ <span>the-shire</span> — a small portal</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
