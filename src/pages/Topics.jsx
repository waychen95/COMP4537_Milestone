import React from "react"
import { BookOpen } from "lucide-react"
import { NavLink } from "react-router-dom";
import styles from "./Topics.module.css"
import topics from "../data/topics"

export default function Topics() {
    return(
        <>
            <div className={styles.topics_container}>
                <div className={styles.topics_title}>
                    <BookOpen size={50} className={styles.bookOpen}></BookOpen>
                    <h1>Table of Contents</h1>
                </div>
                <div>
                    {topics.map((topic, index) => (
                        <NavLink key={topic.id} className={styles.topic_nav} to={topic.id}>
                            <div className={styles.topic}>
                                <div>
                                    <h1>{topic.number}</h1>
                                </div>
                                <div>
                                    <h1>{topic.title}</h1>
                                    <p>{topic.description}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}