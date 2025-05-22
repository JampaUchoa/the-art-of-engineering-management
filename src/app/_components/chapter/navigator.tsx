import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import { FiBook, FiChevronRight, FiClock, FiLock } from "react-icons/fi";
import "./navigator.scss";
export default function ChapterNavigator({ current }: { current: Post }) {

    const allPosts = getAllPosts();
    // find the previous and next posts
    const currentIndex = allPosts.findIndex((post) => post.slug === current.slug);
    let next: Post | undefined;
    let postAvaiableToSubscribers = false;
    if (currentIndex !== -1) {
        next = allPosts[currentIndex + 1];
    }
    if (currentIndex === allPosts.length - 1) {
        postAvaiableToSubscribers = getAllPosts(true).length > allPosts.length;
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
                postAvaiableToSubscribers ? (
                    <a className="next disabled" href=""> <FiClock /> New chapter available for subscribers only, for now. </a>
                ) : (
                    <a className="next disabled" href=""> <FiClock /> New chapters soon! </a>
                )
            }
        </div>
    );
}
