"use client";
import Link from "next/link";
import Logo from "@/logo";
import "./header.scss";
import { FiGithub, FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";
const Header = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  useEffect(() => {
    if (!theme) {
      const defaultTheme = preferedTheme();
      localStorage.setItem('theme', defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    } else {
      document.documentElement.classList.add(theme);
    }
  })

  function preferedTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function toggleDarkMode() {
    const currentTheme = localStorage.getItem('theme') || preferedTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
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
        <FiGithub />
      </div>
    </div>
  );
};

export default Header;
