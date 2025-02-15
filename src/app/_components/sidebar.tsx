import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Sidebar() {
    const allPosts = getAllPosts();

    return (
        <aside>
            {allPosts.map((post) => (
                <div>
                    <Link key={post.slug} href={`/chapters/${post.slug}`} className="hover:underline">
                        {post.title}
                    </Link>
                </div>
            ))}
        </aside>
    );
}
