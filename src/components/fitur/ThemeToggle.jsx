import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
    setTheme(currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, []);

  const switchTheme = (e) => {
    if (e.target.checked) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="theme-switch-wrapper fixed bottom-4 left-5 text-white p-2 rounded-sm shadow-lg">
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={switchTheme} checked={theme === 'dark'} />
        <div className="slider round">
          <div className="icon sun-icon">
            <img src="/sun.png" alt="sun" />
          </div>
          <div className="icon moon-icon">
            <img src="/sleep-mode.png" alt="moon" />
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
