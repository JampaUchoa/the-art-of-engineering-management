import markdownToHtml from "@/lib/markdownToHtml";
import fs from "fs";
import matter from "gray-matter";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import "../../chapters/[...slug]/page.scss"
import "../about.scss";

export default async function WhyNoAI() {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const fullPath = join(__dirname, "article.md");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const markdown = matter(fileContents).content;
    const content = await markdownToHtml(markdown);
  
  return (
  <div className="content about-page">
    <article>
      <div
        className="book-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  </div>
  )
}