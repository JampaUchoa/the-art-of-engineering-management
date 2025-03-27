// header.tsx
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
    const storedTheme = window.localStorage.getItem('theme');
    const initialTheme = storedTheme || preferedTheme();
    setTheme(initialTheme);
    document.documentElement.classList.add(initialTheme);
  }, []);


  function preferedTheme() {
    // Check preference only on client-side after mount
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light'; // Default server-side or before mount
  }

  function toggleDarkMode() {
     if (!theme) return; // Don't toggle if theme isn't set yet

    const newTheme = theme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
  }

  // Render theme toggle only after mounting to avoid hydration issues
  const renderThemeToggle = () => {
    if (!isMounted || !theme) {
      // Return a placeholder or null during SSR/initial mount
      return <div className="theme-toggle-placeholder"></div>;
    }
    return theme === 'dark' ?
      <FiSun className="theme-icon sun" onClick={toggleDarkMode} aria-label="Switch to light mode" /> :
      <FiMoon className="theme-icon moon" onClick={toggleDarkMode} aria-label="Switch to dark mode" />;
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo-link">
          <Logo />
          <h1 className="title">
            The Art of <br /> Engineering Management
          </h1>
        </Link>
        <nav className="side-links">
          {renderThemeToggle()}
          <a href="https://github.com/JampaUchoa/the-art-of-engineering-management" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
            <FiGithub />
          </a>
          <a href="https://twitter.com/jampauchoa" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
            <FiTwitter />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;