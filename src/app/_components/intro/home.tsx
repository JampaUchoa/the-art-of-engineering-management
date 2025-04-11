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
        <h2>
        Build high-impact teams and products, thrive as a technology leader.
        </h2>
        <p>
        Learn practical strategies to master engineering management by leveraging your engineering skills.
        </p>
      </div>
      <div className="buttons intro-text">
        <div className="chapter-navigator">
          <a className="next" href={`/chapters/${chapter1.slug}`}>
            <FiBookOpen />
            <div>
              <span className="chapter-title">{"Read"}</span>
            </div>
          </a>
        </div>
      </div>
      <div className="released-chapters">
        <h2> Chapters</h2>
        <TableOfContents />
      </div>
    </div>
  );
}
