import tableOfContents from "@/lib/toc";
import TableOfContents from "../table-of-contents/table-of-contents";
import "./home.scss";
import "../chapter/navigator.scss";
import { FiBookOpen } from "react-icons/fi";

export function Home() {
  const chapter1 = tableOfContents[0].subtopics[0];

  return (
    <div className="home-page">
      <div className="intro-text">
        <FiBookOpen className="book-icon" />
        <h2>From starting to mastering the craft</h2>
        <p>
          In this book, you'll find practical advice drawn from real-world experiences that shows how the Engineering Management role varies significantly across different scenarios — and how to succeed no matter which.
        </p>
        <p>
          Learn essential management concepts and gain tools to excel in leading teams to success.
        </p>
      </div>
      <div className="buttons">
        <div className="chapter-navigator">
          <a className="next" href={`/chapters/${chapter1.slug}`}>
            <FiBookOpen />
            <div>
              <span className="chapter-title">Read</span>
            </div>
          </a>
        </div>
      </div>
      <div className="released-chapters">
        <h2>Chapters</h2>
        <TableOfContents />
      </div>
    </div>
  );
}