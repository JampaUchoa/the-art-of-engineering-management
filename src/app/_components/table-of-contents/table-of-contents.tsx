import tableOfContents from "@/lib/toc";
import Link from "next/link";
import "./table-of-contents.scss";

export default function TableOfContents() {
  const table = tableOfContents;

  return (
    <div className="chapters">
      {table.map((chapter, index) => (
        <div key={index} className="chapter-card">
          <h3>
            {index + 1}. {chapter.title}
          </h3>
          <div className="subtopics">
            {chapter.subtopics.map((subtopic, subIndex) => (
              <div key={subIndex} className="subtopic">
                {subtopic.slug ? (
                  <Link href={"/chapters/" + subtopic.slug}>
                    {index + 1}.{subIndex + 1} {subtopic.title}
                  </Link>
                ) : (
                  <span>
                    {index + 1}.{subIndex + 1} {subtopic.title}{" "}
                    <small>(coming soon)</small>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}