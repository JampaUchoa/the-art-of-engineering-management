import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import { FiBook, FiChevronRight } from "react-icons/fi";
import "./navigator.scss";
export default function ChapterNavigator({ current }: { current: Post }) {

    const allPosts = getAllPosts();
    // find the previous and next posts
    const currentIndex = allPosts.findIndex((post) => post.slug === current.slug);
    let next: Post | undefined;
    if (currentIndex !== -1) {
        next = allPosts[currentIndex + 1];
    }
    return (
        <div className="chapter-navigator">
            {next ? (
                <a className="next" href={`/chapters/${next.slug}`}>
                    <div>
                        <span className="subtext">Next Chapter</span>
                        <span className="chapter-title">{next.title}</span>
                    </div>
                    <FiChevronRight />
                </a>
            ) :
                (
                    <a className="next disabled" href="">New chapters soon! <FiBook /></a>
                )
            }
        </div>
    );
}
