import tableOfContents from "@/lib/toc";
import "./intro.scss";
import "../chapter/navigator.scss";
import { FiBookOpen } from "react-icons/fi";

export default function Intro() {
  const chapter1 = tableOfContents[0].subtopics[0];

  return (
    <div className="home-page">
      <div className="intro-text">
        <h2>
          Build high-impact teams, with a practical approach.
        </h2>
        <p>
          Learn effective strategies to master engineering management and deliver great products.
        </p>
      </div>
      <div className="buttons intro-text">
        <a className="get-started" href={`/chapters/${chapter1.slug}`}>
          <div>
            <span className="chapter-title">Read &gt;</span>
          </div>
        </a>
      </div>
    </div>
  );
}
