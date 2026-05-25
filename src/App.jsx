import React, { useState, useEffect } from 'react';

// Load Data
import initSqlJs from 'sql.js';

// Load Components
import Nav from './components/Nav';
import Home from './components/Home';
import Blog from './components/Blog';
import Contributors from './components/Contributors';
import Projects from './components/Projects';


// Dynamic local path mapping for production and development tracking
const wasmConfig = {
  locateFile: file => `${import.meta.env.BASE_URL}${file}`
};

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [dbData, setDbData] = useState({ contributors: [], projects: [], posts: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDatabase() {
      try {
        // Fetch the raw database binary from your local assets path
        const response = await fetch(`${import.meta.env.BASE_URL}shire.db`);
        const buf = await response.arrayBuffer();
        
        // Initialize the local WASM compiler instance
        const SQL = await initSqlJs(wasmConfig);
        const db = new SQL.Database(new Uint8Array(buf));

        // Execute raw SQL statements natively inside the client window browser
        const contributorsResult = db.exec("SELECT * FROM contributors");
        const projectsResult = db.exec("SELECT * FROM projects");
        const postsResult = db.exec("SELECT * FROM posts");

        const parseRows = (result) => {
          if (!result || !result.length) return [];
          const columns = result[0].columns; // ["title", "tagline", ...]
          const values = result[0].values;   // [["Lantern", "..."], ["Hearth", "..."]]
          
          return values.map(row => {
            return columns.reduce((obj, col, index) => {
              obj[col] = row[index];
              return obj;
            }, {});
          });
        };

        setDbData({
          contributors: parseRows(contributorsResult),
          projects: parseRows(projectsResult),
          posts: parseRows(postsResult)
        });
        setLoading(false);
      } catch (err) {
        console.error("Local SQLite compilation halted:", err);
        setLoading(false);
      }
    }
    loadDatabase();
  }, []);

  if (loading) {
    return <div className="container mono" style={{ padding: 40 }}>$ reading local database cells...</div>;
  }

  return (
    <div className="app">
      <Nav active={activeTab} onChange={setActiveTab} />
      <main>
        {activeTab === "home" && <Home data={dbData} />}
        {activeTab === "projects" && <Projects data={dbData} />}
        {/* Pass your clean SQL table rows down to other view components here */}
      </main>
    </div>
  );
};

export default App;
