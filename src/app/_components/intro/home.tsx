// home.tsx
import tableOfContents from "@/lib/toc";
import TableOfContents from "../table-of-contents/table-of-contents";
import "./home.scss";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export function Home() {
  const chapter1 = tableOfContents[0].subtopics[0];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="intro-text">
          <h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            Master the Craft of<br />Engineering Leadership
          </h1>
          <div className="intro-content">
            <p className="lead">
              Practical wisdom distilled from real-world experiences, showing how engineering leadership 
              transforms across different scenarios – and how to excel in any situation.
            </p>
            <div whileHover={{ scale: 1.05 }} className="cta-container">
              <a href={`/chapters/${chapter1.slug}`} className="cta-button">
                <FiBookOpen className="icon" />
                <span>Start Reading</span>
                <FiArrowRight className="arrow" />
              </a>
            </div>
          </div>
        </div>
        <div className="decorative-wave"></div>
      </section>

      <section className="chapters-section">
        <div className="section-header">
          <h2>Table of Contents</h2>
          <p>Explore released chapters and stay tuned for updates</p>
        </div>
        <TableOfContents />
      </section>
    </div>
  );
}