"use client";
import Link from "next/link";
import Logo from "@/logo";
import "./header.scss";
import { FiGithub, FiMoon, FiSun, FiTwitter } from "react-icons/fi";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false); // Prevent hydration mismatch

  useEffect(() => {
    setIsMounted(true);
    // Initialize theme only on client-side
    const storedTheme = window.localStorage.getItem('theme');
    const initialTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.add(initialTheme);
  }, []); // Run only once on mount

  useEffect(() => {
    // Apply theme class when theme state changes after initial mount
    if (!isMounted || !theme) return;
    const currentClasses = document.documentElement.classList;
    if (theme === 'dark' && !currentClasses.contains('dark')) {
      currentClasses.remove('light');
      currentClasses.add('dark');
    } else if (theme === 'light' && !currentClasses.contains('light')) {
      currentClasses.remove('dark');
      currentClasses.add('light');
    }
     window.localStorage.setItem('theme', theme);
  }, [theme, isMounted]);

  function toggleDarkMode() {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  // Render null or a placeholder during server rendering / initial client mount before theme is determined
  if (!isMounted || !theme) {
     return (
       <div className="header header-placeholder">
         {/* Optional: Render a simplified or skeleton header */}
         <div></div>
         <div className="logo-placeholder"></div>
         <div className="side-links-placeholder"></div>
       </div>
     );
  }


  return (
    <header className="header"> {/* Use header semantic tag */}
      <div className="header-left-spacer"></div> {/* Spacer for grid alignment */}
      <Link href="/" className="logo-link" aria-label="Homepage"> {/* Improved semantics */}
        <Logo />
        <div className="title-wrapper"> {/* Wrapper for potentially multi-line title */}
          <h1 className="title">The Art of</h1>
          <span className="subtitle">Engineering Management</span>
        </div>
      </Link>
      <nav className="side-links" aria-label="Site navigation and tools"> {/* Use nav semantic tag */}
        {/* <Link href="/about" className="nav-link about-link">
          About
        </Link> */}
        <button
          onClick={toggleDarkMode}
          className="theme-toggle-button"
          aria-label={theme === 'dark' ? 'Activate light mode' : 'Activate dark mode'}
          title={theme === 'dark' ? 'Activate light mode' : 'Activate dark mode'}
        >
          {theme === 'dark' ?
            <FiSun /> :
            <FiMoon />
          }
        </button>
        <a href="https://github.com/JampaUchoa/the-art-of-engineering-management" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" title="GitHub Repository">
          <FiGithub />
        </a>
      </nav>
    </header>
  );
};

export default Header;