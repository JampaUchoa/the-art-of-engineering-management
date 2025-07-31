import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/app/_components/post-body";
import ChapterNavigator from "@/app/_components/chapter/navigator";
import "./page.scss";
import SubscribeForm from "@/app/_components/subscribe-form/Form";
import Footer from "@/app/_components/footer/Footer";

export default async function(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <article>
      <div className="book-content">
        <PostBody content={content} />
      </div>
      <ChapterNavigator current={post} />
      <SubscribeForm/>
      <Footer />
    </article>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | The Art of Engineering Management`;
  const chapterUrl = `https://taoem.com/chapters/${post.slug}`;

  return {
    title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description || "Learn effective strategies to master engineering management and deliver great products.",
      url: chapterUrl,
      siteName: "The Art of Engineering Management",
      images: [{
        url: "https://taoem.com/favicon/web-app-manifest-192x192.png",
        width: 192,
        height: 192,
        alt: "The Art of Engineering Management Logo",
      }],
      type: "article",
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description || "Learn effective strategies to master engineering management and deliver great products.",
      images: ["https://taoem.com/favicon/web-app-manifest-192x192.png"],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts(true);

  const slugs = posts.map((post) => ({
    slug: post.slug.split("/"),
  }));
  console.log(slugs);
  return slugs;
}
