import Link from "next/link";
import "./table-of-contents.scss";

interface Subtopic {
  title: string;
  slug?: string;
}

interface TocEntry {
  title: string;
  subtopics: Subtopic[];
}

interface TableOfContentsProps {
  tocEntries: TocEntry[];
}
export default function TableOfContents({ tocEntries }: TableOfContentsProps) {
    return (
        <div className="released-chapters">
            <h2> Chapters </h2>
            <div className={"chapters"}>
                {tocEntries.map((chapter, index) => (
                    <div key={index}>
                        <h3>{chapter.title}</h3>
                        <div className="subtopics">
                            {chapter.subtopics.map((subtopic, subIndex) => (
                                <div key={subIndex} className="subtopic">
                                    {subtopic.slug ? (
                                        <Link href={"/chapters/" + subtopic.slug}>
                                            {subtopic.title}
                                        </Link>
                                    ) : (
                                        <span>{subtopic.title}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
