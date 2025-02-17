import tableOfContents from "@/lib/toc";
import Link from "next/link";
import "./table-of-contents.scss";
export default function TableOfContents() {

    const table = tableOfContents;

    return (
        <div className={"chapters"}>
            {table.map((chapter, index) => (
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
    );
}
