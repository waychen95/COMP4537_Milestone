import React from "react";
import { BookOpen } from "lucide-react"
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";


export default function Home() {
    return (
        <div class={styles.main}>
            <BookOpen size={50} className={styles.bookOpen}></BookOpen>
            <div className={styles.title_container}>
                <h3>A Personal Collection</h3>
                <h1>Web Computing</h1>
                <p>A comprehensive exploration of web development fundamentals, from JavaScript internals to architectural patterns, security practices, and performance optimization.</p>
            </div>
            <div>
                <NavLink className={styles.begin_button} to="/topics">Begin Reading</NavLink>
            </div>
        </div>
    )
}