// home.tsx
import tableOfContents from "@/lib/toc";
import TableOfContents from "../table-of-contents/table-of-contents";
import "./home.scss";
import "../chapter/navigator.scss";
import { FiBookOpen } from "react-icons/fi";

export function Home() {
  const chapter1 = tableOfContents[0].subtopics[0];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="intro-text">
          <h2>
            From starting to mastering the craft
          </h2>
          <p>
            In this book, you'll find practical advice drawn from real-world experiences that shows how the Engineering Management role varies significantly across different scenarios — and how to succeed no matter which.
          </p>
          <p>
            Learn essential management concepts and gain tools to excel in leading teams to success.
          </p>
          <div className="cta-button">
            <a className="read-button" href={`/chapters/${chapter1.slug}`}>
              <FiBookOpen />
              <span>Start Reading</span>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <HeroIllustration />
        </div>
      </section>

      <section className="chapters-section">
        <h2>Chapters</h2>
        <TableOfContents />
      </section>
    </div>
  );
}

// Simple SVG placeholder component - create this file: hero-illustration.tsx
const HeroIllustration = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'var(--accent-color)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'var(--accent-color-darker)', stopOpacity: 1 }} />
      </linearGradient>
       <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: 'var(--secondary-text)', stopOpacity: 0.1 }} />
        <stop offset="100%" style={{ stopColor: 'var(--secondary-text)', stopOpacity: 0.3 }} />
      </linearGradient>
    </defs>
    {/* Abstract shapes */}
    <path d="M 50 150 Q 150 50 250 150 T 350 150" stroke="url(#grad1)" strokeWidth="6" fill="none" strokeLinecap="round" />
    <path d="M 60 140 Q 160 60 260 140 T 360 140" stroke="url(#grad2)" strokeWidth="15" fill="none" strokeLinecap="round" />
     <circle cx="80" cy="80" r="15" fill="url(#grad1)" opacity="0.7"/>
     <rect x="280" y="60" width="40" height="40" rx="5" fill="url(#grad2)" opacity="0.8" transform="rotate(15 300 80)"/>
     <polygon points="180,30 220,70 180,70 140,30" fill="var(--accent-color)" opacity="0.5"/>
  </svg>
);

export default HeroIllustration;