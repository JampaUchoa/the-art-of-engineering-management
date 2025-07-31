import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_chapters");

function getChapterNumber(slug: string): number {
  return parseInt(slug.split('/')[0]);
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getChapters() {
  const files = fs.readdirSync(postsDirectory);
  return files.map(file => {
    return file.split("_")[0];
  })
}

export function getPostBySlug(slug: string) {
  return getPostById(slug[0]);
}

export function getPostById(id: string) {
  const filePath = fs.readdirSync(postsDirectory).find(slug => slug.startsWith(`${id}_`))
  const fullPath = join(postsDirectory, filePath!);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: `${id}/${data.slug}`, content } as Post;
}


export function getAllPosts(showHidden: boolean = false): Post[] {
  const chapterIds = getChapters();
  const posts = chapterIds.map(id => getPostById(id)).filter(post => showHidden || post.ready);
  return posts.sort((a, b) => getChapterNumber(a.slug) - getChapterNumber(b.slug));
}
