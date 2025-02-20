"use client";
import Link from "next/link";
import Logo from "@/logo";
import "./header.scss";
import { FiGithub, FiMoon, FiSun, FiTwitter } from "react-icons/fi";
import { useEffect, useState } from "react";
const Header = () => {

  const defaultTheme = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!theme) {
      const defaultTheme = preferedTheme();
      window.localStorage.setItem('theme', defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    } else {
      document.documentElement.classList.add(theme);
    }
  })

  function preferedTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function toggleDarkMode() {
    const currentTheme = window.localStorage.getItem('theme') || preferedTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme)
  }

  return (
    <div className="header">
      <div>
      </div>
      <Link href="/" className="logo">
        <Logo />
        <h1 className="title">
          The Art of <br /> Engineering Management
        </h1>
      </Link>
      <div className="side-links">
        {theme === 'dark' ? 
          <FiSun className="sun" onClick={toggleDarkMode} /> :
          <FiMoon className="moon" onClick={toggleDarkMode} />
        }
        <a href="https://github.com/JampaUchoa/the-art-of-engineering-management" target="_blank" rel="noopener noreferrer">
        <FiGithub />
        </a>
        <a href="https://twitter.com/jampauchoa" target="_blank" rel="noopener noreferrer">
        <FiTwitter />
        </a>
      </div>
    </div>
  );
};

export default Header;
