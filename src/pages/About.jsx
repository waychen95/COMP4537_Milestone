// AboutPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Heart, Lightbulb, Target } from "lucide-react";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.headerSection}>
        <div className={styles.headerContainer}>
          <Link to="/" className={styles.backButton}>
            <ArrowLeft size={20} className={styles.arrowIcon} /> Back to Home
          </Link>
          <h1 className={styles.pageTitle}>About This Book</h1>
          <p className={styles.pageSubtitle}>A personal journey through web computing</p>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.cardsContainer}>

          <div className={styles.card}>
            <div className={styles.cardIcon}><Target size={50} /></div>
            <h2 className={styles.cardTitle}>Purpose</h2>
            <div className={styles.cardContent}>
              <p>
                This book collects my notes, tips, code examples, and reflections on web computing. It helps students understand complex concepts with clear explanations and practical examples.
              </p>
              <p>
                From JavaScript and OS basics to security and architecture, it connects theory with real-world web development.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}><BookOpen size={50} className={styles.bookOpen} /></div>
            <h2 className={styles.cardTitle}>Who This Is For</h2>
            <div className={styles.cardContent}>
              <p>
                This book is written for fellow students with basic knowledge of HTML, CSS, and JavaScript. If you're
                looking to deepen your understanding of web computing, explore advanced concepts, or prepare for
                technical interviews, you're in the right place.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}><Lightbulb size={50} className={styles.lightbulb} /></div>
            <h2 className={styles.cardTitle}>What You'll Find</h2>
            <div className={styles.cardContent}>
              <ul>
                <li><strong>JavaScript Fundamentals:</strong> Hoisting, closures, async programming, and the event loop</li>
                <li><strong>Web Security:</strong> Understanding vulnerabilities and best practices</li>
                <li><strong>Architecture Patterns:</strong> Monolithic, layered, microservices, and event-driven architectures</li>
                <li><strong>Performance:</strong> Memory leaks, optimization techniques, and best practices</li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}><Heart size={50} className={styles.heart} /></div>
            <h2 className={styles.cardTitle}>How to Use This Book</h2>
            <div className={styles.cardContent}>
              <p>
                This book is designed to be explored in any order. Start with topics that interest you most, or follow
                the chapters sequentially for a structured learning path.
              </p>
              <p>
                Each chapter includes practical code examples, key concepts, and connections to broader computer science
                principles. Take your time, experiment with the code, and make it your own.
              </p>
            </div>
          </div>

          <div className={styles.startReading}>
            <Link to="/topics" className={styles.startButton}>
              Start Reading
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
