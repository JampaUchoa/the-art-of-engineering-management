import tableOfContents from "@/lib/toc";
import TableOfContents from "../table-of-contents/table-of-contents";
import "./home.scss";
import "../chapter/navigator.scss";
import { FiBookOpen } from "react-icons/fi";

export function Home() {
  const chapter1 = tableOfContents[0].subtopics[0];
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="animated-book">
            <svg viewBox="0 0 200 200" className="book-svg">
              <path className="book-cover" d="M40,40 L160,40 L160,160 L40,160 Z" />
              <path className="book-page" d="M45,45 L155,45 L155,155 L45,155 Z" />
              <path className="book-spine" d="M38,38 L42,42 L42,158 L38,162 Z" />
            </svg>
          </div>
          <div className="intro-text">
            <h2>From starting to mastering the craft</h2>
            <p>
              In this book, you'll find practical advice drawn from real-world experiences
              that shows how the Engineering Management role varies significantly across
              different scenarios — and how to succeed no matter which.
            </p>
            <p>
              Learn essential management concepts and gain tools to excel in leading
              teams to success.
            </p>
            <div className="cta-button">
              <a className="read-button" href={`/chapters/${chapter1.slug}`}>
                <FiBookOpen />
                <span>Start Reading</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="book-features">
        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <circle cx="12" cy="12" r="10" className="icon-bg" />
              <path d="M8,12 L11,15 L16,9" className="icon-path" />
            </svg>
          </div>
          <h3>Practical Advice</h3>
          <p>Real-world experiences and actionable insights</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <circle cx="12" cy="12" r="10" className="icon-bg" />
              <path d="M12,7 L12,17 M7,12 L17,12" className="icon-path" />
            </svg>
          </div>
          <h3>Essential Tools</h3>
          <p>Frameworks and methodologies for effective leadership</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <circle cx="12" cy="12" r="10" className="icon-bg" />
              <path d="M8,14 L12,8 L16,14" className="icon-path" />
            </svg>
          </div>
          <h3>Career Growth</h3>
          <p>Strategies to advance your engineering management journey</p>
        </div>
      </div>

      <div className="released-chapters">
        <h2>Chapters</h2>
        <div className="chapters-container">
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}