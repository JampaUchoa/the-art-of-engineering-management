import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";

export default function ChapterNavigator({ current }: { current: Post }) {

        const allPosts = getAllPosts();
        // find the previous and next posts
        const currentIndex = allPosts.findIndex((post) => post.slug === current.slug);
        const previous = allPosts[currentIndex - 1];
        const next = allPosts[currentIndex + 1];
        
    return (
        <div>
            {previous && (
            <div>
                <a href={`/${previous.slug}`}>{"<"}</a>
            </div>
            )}
            {next && (
                <div>
                    <a href={`/${next.slug}`}>{next.title}{" >"}</a>
                </div>
            )}
        </div>
    );
}
