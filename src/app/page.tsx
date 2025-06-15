import Intro from "@/app/_components/intro/intro";
import TableOfContents from "./_components/table-of-contents/table-of-contents";
import Footer from "./_components/footer/Footer";
import HomePageBodyManager from '@/app/_components/home-page-body-manager/home-page-body-manager';
import tableOfContents from '@/lib/toc';

export default function Index() {

  return (
    <>
      <HomePageBodyManager />
      <Intro />
      <TableOfContents tocEntries={tableOfContents} />
      <Footer/>
    </>
  );
}
