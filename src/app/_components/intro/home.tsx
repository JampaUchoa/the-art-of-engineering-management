import tableOfContents from "@/lib/toc";
import TableOfContents from "../table-of-contents/table-of-contents";
import "./home.scss";
import { FiBookOpen } from "react-icons/fi";

export function Home() {
  const chapter1 = tableOfContents[0].subtopics[0];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h2>From starting to mastering the craft</h2>
          <p>
            In this book, you'll find practical advice drawn from real-world
            experiences that shows how the Engineering Management role varies
            significantly across different scenarios — and how to succeed no
            matter which.
          </p>
          <p>
            Learn essential management concepts and gain tools to excel in
            leading teams to success.
          </p>
          <div className="hero-buttons">
            <a className="read-button" href={`/chapters/${chapter1.slug}`}>
              <FiBookOpen />
              <span>Read</span>
            </a>
          </div>
        </div>
        <div className="wave" aria-hidden="true">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,288L80,272C160,256,320,224,480,224C640,224,800,256,960,256C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      <section className="released-chapters">
        <h2>Chapters</h2>
        <TableOfContents />
      </section>
    </div>
  );
}