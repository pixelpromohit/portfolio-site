import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About'; // make sure this exists
import Skills from './components/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div  className="scroll-smooth bg-white dark:bg-gray-900 min-h-screen transition-colors duration-500">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <About /> {/* No padding top since it's the first section */}
      <Skills />
    </div>
  );
}

export default App;
