// src/pages/TopicDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import topics from "../data/topics";
import styles from "./TopicDetail.module.css";

export default function TopicDetail() {
  const { id } = useParams();
  const currentIndex = topics.findIndex((t) => t.id === id);
  const topic = topics[currentIndex];

  const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

  return (
    <div className={styles.main}>
      {prevTopic ? (
        <Link to={`/topics/${prevTopic.id}`} className={styles.arrows}>
          <p>←</p>
          <p className={styles.arrowTitle}>{prevTopic.title}</p>
        </Link>
      ) : (
        <span className={styles.disabled}></span>
      )}

      <div className={styles.mobileArrow}>
        {prevTopic ? (
          <Link to={`/topics/${prevTopic.id}`} className={styles.arrow}>
            <p>←</p>
            <p className={styles.arrowTitle}>{prevTopic.title}</p>
          </Link>
        ) : (
          <span className={styles.disabled}></span>
        )}
        {nextTopic ? (
          <Link to={`/topics/${nextTopic.id}`} className={styles.arrow}>
            <p className={styles.arrowTitle}>{nextTopic.title}</p>
            <p>→</p>
          </Link>
        ) : (
          <span className={styles.disabled}> </span>
        )}
      </div>

      

      {!topic ? (
        <div className={styles.contentContainer}>
          <h2>Topic not found</h2>
          <p>We could not find a topic with the ID "{id}".</p>
        </div>
      ) : (
        <div className={styles.contentContainer}>
          <h1>{topic.title}</h1>
          <p>{topic.description}</p>
          <div>
            <ReactMarkdown>{topic.content}</ReactMarkdown>
          </div>
        </div>
      )}

      {nextTopic ? (
        <Link to={`/topics/${nextTopic.id}`} className={styles.arrows}>
          <p>→</p>
          <p className={styles.arrowTitle}>{nextTopic.title}</p>
        </Link>
      ) : (
        <span className={styles.disabled}> </span>
      )}
    </div>
  );
}
