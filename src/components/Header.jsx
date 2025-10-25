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
            <BookOpen size={32}/>
            <span>Wayne's Web Computing Diary</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <NavLink to="/topics">Topics</NavLink>
            {/* <NavLink to="/about">About</NavLink> */}
          </div>

          {/* Mobile Menu Button */}
          <button variant="ghost" size="icon" className={styles.mobileButton} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={styles.mobileNav}>
            <NavLink href="/chapters" onClick={() => setIsOpen(false)}>Contents</NavLink>
            <NavLink href="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
