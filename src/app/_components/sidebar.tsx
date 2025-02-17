import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import Header from "./header";

export default function Sidebar() {
    const allPosts = getAllPosts();

    return (
        <aside>
            <Header />
            {allPosts.map((post, i) => (
                <Link key={post.slug} href={`/chapters/${post.slug}`}>
                    {i+1}. {post.title}
                </Link>
            ))}
        </aside>
    );
}
