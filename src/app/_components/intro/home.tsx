// home.tsx
import tableOfContents from "@/lib/toc";
import TableOfContents from "../table-of-contents/table-of-contents";
import "./home.scss";
import "../chapter/navigator.scss";
import { FiArrowRight } from "react-icons/fi";

// Simple SVG Illustration related to Engineering/Management
const HeroIllustration = () => (
    <svg className="hero-illustration" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'var(--accent-color)', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: 'var(--accent-color-secondary)', stopOpacity: 0.6 }} />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'var(--accent-color-secondary)', stopOpacity: 0.5 }} />
                <stop offset="100%" style={{ stopColor: 'var(--accent-color)', stopOpacity: 0.3 }} />
            </linearGradient>
        </defs>
        {/* Abstract shapes */}
        <path d="M 50 50 Q 150 10, 250 50 T 350 50" stroke="url(#grad1)" strokeWidth="4" fill="none" />
        <path d="M 60 80 Q 160 130, 260 80 T 360 80" stroke="url(#grad2)" strokeWidth="3" fill="none" />
        <circle cx="80" cy="120" r="15" fill="url(#grad1)" opacity="0.7"/>
        <rect x="180" y="100" width="30" height="30" rx="5" fill="url(#grad2)" opacity="0.6" transform="rotate(15, 195, 115)"/>
        <path d="M 280 110 L 310 140 L 250 140 Z" fill="url(#grad1)" opacity="0.5"/>

        {/* Subtle gear elements */}
         <circle cx="120" cy="60" r="10" fill="none" stroke="var(--secondary-text)" strokeWidth="1.5" strokeDasharray="3 3"/>
         <circle cx="300" cy="90" r="12" fill="none" stroke="var(--secondary-text)" strokeWidth="1.5" strokeDasharray="4 4"/>
    </svg>
);


export function Home() {
  const chapter1 = tableOfContents[0].subtopics[0];

  return (
    <div className="home-page">
       <div className="hero-section">
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
                 <div className="cta-button-container">
                    <div className="chapter-navigator">
                    <a className="next primary-cta" href={`/chapters/${chapter1.slug}`}>
                        <span>Start Reading</span>
                        <FiArrowRight />
                    </a>
                    </div>
                </div>
            </div>
            <HeroIllustration />
       </div>

      <div className="chapters-section">
        <h2>Chapters</h2>
        <TableOfContents />
      </div>
    </div>
  );
}