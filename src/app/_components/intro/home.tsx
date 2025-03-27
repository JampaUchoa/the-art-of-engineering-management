import tableOfContents from "@/lib/toc";
import TableOfContents from "../table-of-contents/table-of-contents";
import "./home.scss";
import "../chapter/navigator.scss";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";
export function Home() {
  const chapter1 = tableOfContents[0].subtopics[0];

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="intro-text">
          <h2>
            From starting to mastering<br />the craft
          </h2>
          <div className="content">
            <p>
              In this book, you'll find practical advice drawn from real-world experiences that shows how the Engineering Management role varies significantly across different scenarios — and how to succeed no matter which.
            </p>
            <p>
              Learn essential management concepts and gain tools to excel in leading teams to success.
            </p>
          </div>
          <div className="buttons">
            <a className="cta-button" href={`/chapters/${chapter1.slug}`}>
              <span className="icon">
                <FiBookOpen />
              </span>
              <span>Start Reading</span>
              <FiArrowRight className="arrow" />
            </a>
          </div>
        </div>
        <div className="decorative-art">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 50L350 200L200 350L50 200L200 50Z" stroke="var(--accent-color)" stroke-width="2" fill="none"/>
            <path d="M200 80L320 200L200 320L80 200L200 80Z" stroke="var(--accent-color)" stroke-width="2" fill="none"/>
            <path d="M200 110L290 200L200 290L110 200L200 110Z" stroke="var(--accent-color)" stroke-width="2" fill="none"/>
            <circle cx="200" cy="200" r="40" fill="var(--accent-color)" opacity="0.8"/>
          </svg>
        </div>
      </div>
      <div className="released-chapters">
        <h2>Explore Chapters</h2>
        <TableOfContents />
      </div>
    </div>
  );
}