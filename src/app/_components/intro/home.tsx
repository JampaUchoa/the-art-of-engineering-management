import tableOfContents from "@/lib/toc";
import TableOfContents from "../table-of-contents/table-of-contents";
import "./home.scss";
import "../chapter/navigator.scss";
import { FiBookOpen } from "react-icons/fi";

export function Home() {
  const chapter1 = tableOfContents[0].subtopics[0];

  return (
    <div className="home-page">
      <div className="hero">
        <div className="hero-illustration">
          {/* Custom SVG illustration representing engineering management */}
          <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 300 Q200 200 400 300 T800 300 V400 H0 Z"
              fill="var(--mountain-color)"
            />
            <path
              d="M100 350 Q300 250 500 350"
              stroke="var(--path-color)"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>
        <div className="intro-text">
          <h2>Unleash Your Engineering Leadership</h2>
          <p>
            Discover practical, real-world insights into the diverse world of Engineering Management — and master the skills to thrive in any scenario.
          </p>
          <p>
            Equip yourself with essential tools and strategies to lead high-performing teams with confidence.
          </p>
        </div>
        <div className="buttons">
          <div className="chapter-navigator">
            <a className="next" href={`/chapters/${chapter1.slug}`}>
              <FiBookOpen />
              <span className="chapter-title">Start Reading</span>
            </a>
          </div>
        </div>
      </div>
      <div className="wave">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="var(--hero-background)"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,154.7C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      <div className="released-chapters">
        <h2>Explore the Chapters</h2>
        <TableOfContents />
      </div>
    </div>
  );
}