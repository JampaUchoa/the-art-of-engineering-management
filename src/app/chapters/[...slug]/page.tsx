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

  return {
    title,
    description: post.description,
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
