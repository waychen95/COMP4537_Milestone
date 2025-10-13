// src/pages/TopicDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import topics from "../data/topics";

export default function TopicDetail() {
  const { id } = useParams();
  const topic = topics.find((t) => t.id === id);

  if (!topic) return (
    <div className="p-8">
      <Link to="/" className="">← Back</Link>
      <h2 className="">Topic not found</h2>
      <p>We could not find a topic with the ID "{id}".</p>
    </div>
  );

  return (
    <div className="">
      <Link to="/" className="">← Back</Link>

      <h1 className="">{topic.title}</h1>
      <p className="">{topic.description}</p>

      <div className="">
        <ReactMarkdown>{topic.content}</ReactMarkdown>
      </div>
    </div>
  );
}
