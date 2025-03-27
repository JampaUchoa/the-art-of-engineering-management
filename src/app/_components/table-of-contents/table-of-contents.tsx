// table-of-contents.tsx
import tableOfContents from "@/lib/toc";
import Link from "next/link";
import "./table-of-contents.scss"; // Ensure this file is created

export default function TableOfContents() {
    const table = tableOfContents;

    return (
        <div className="table-of-contents">
            {table.map((chapter, index) => (
                <section key={index} className="toc-chapter">
                    <h3 className="toc-chapter-title">{chapter.title}</h3>
                    <ul className="toc-subtopics-list">
                        {chapter.subtopics.map((subtopic, subIndex) => (
                            <li key={subIndex} className="toc-subtopic-item">
                                {subtopic.slug ? (
                                    <Link href={"/chapters/" + subtopic.slug} className="toc-link">
                                        {subtopic.title}
                                    </Link>
                                ) : (
                                    <span className="toc-link coming-soon">{subtopic.title} (Coming Soon)</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
}