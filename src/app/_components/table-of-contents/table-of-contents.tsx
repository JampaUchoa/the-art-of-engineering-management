// table-of-contents.tsx
import tableOfContents from "@/lib/toc";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiLock, FiCheckCircle } from "react-icons/fi";
import "./table-of-contents.scss";

export default function TableOfContents() {
  return (
    <div className="chapters-grid">
      {tableOfContents.map((chapter, index) => (
        <div 
          key={index}
          className="chapter-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h3 className="chapter-title">{chapter.title}</h3>
          <div className="subtopics">
            {chapter.subtopics.map((subtopic, subIndex) => (
              <div key={subIndex} className={`subtopic ${!subtopic.slug ? 'upcoming' : ''}`}>
                {subtopic.slug ? (
                  <Link href={`/chapters/${subtopic.slug}`} className="subtopic-link">
                    <FiCheckCircle className="status-icon released" />
                    {subtopic.title}
                  </Link>
                ) : (
                  <div className="subtopic-link">
                    <FiLock className="status-icon upcoming" />
                    <span>{subtopic.title}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}