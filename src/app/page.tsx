import Intro from "@/app/_components/intro/intro";
import TableOfContents from "./_components/table-of-contents/table-of-contents";
import ChapterFooter from "./_components/footer/chapter-footer";

export default function Index() {

  return (
    <>
      <Intro />
      <TableOfContents/>
      <ChapterFooter/>
    </>
  );
}
