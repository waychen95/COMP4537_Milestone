import React, { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react"
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navInner}>
          <NavLink to="/" className={styles.logo}>
            <BookOpen size={32} id="logo"/>
            <span id={styles.title}>Wayne's Web Computing Diary</span>
          </NavLink>

          <div className={styles.desktopNav}>
            <NavLink to="/topics">Topics</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>

          <button variant="ghost" size="icon" className={styles.mobileButton} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className={styles.mobileNav}>
            <NavLink to="/topics" onClick={() => setIsOpen(false)}>Topics</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
