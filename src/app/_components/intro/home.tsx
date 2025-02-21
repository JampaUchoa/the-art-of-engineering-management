import tableOfContents from "@/lib/toc";
import TableOfContents from "../table-of-contents/table-of-contents";
import "./home.scss";
import "../chapter/navigator.scss";
import { FiBook, FiBookOpen } from "react-icons/fi";
export function Home() {
  const chapter1 = tableOfContents[0].subtopics[0];

  return (
    <div className="home-page">
      <div className="intro-text">
        <h2>
          From starting to mastering the craft
        </h2>
        <p>
          In this book, you'll find practical advice drawn from real-world experiences that shows how the Engineering Managenent role varies significantly across different scenarios — and how to suceed no matter which.
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
              <span className="chapter-title">{"Read"}</span>
            </div>
          </a>
        </div>
      </div>
      <div className="released-chapters">
        <h2> Chapters</h2>
        <TableOfContents />
      </div>
      {/* <picture>
          <source media="(prefers-color-scheme: dark)" srcSet="https://github.com/user-attachments/assets/f521777e-98b9-46cf-90a0-f6528da20cc3" />
        <source media="(prefers-color-scheme: light)" srcSet="https://github.com/user-attachments/assets/dcdcb977-25b9-4cee-98c6-5a461a4e7158" />
          <img src="https://github.com/user-attachments/assets/be896e4d-3afa-4e85-af72-da7da8edb838" />
        </picture> */}

    </div>
  );
}
