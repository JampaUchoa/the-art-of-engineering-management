import type { Metadata } from "next";

import "./globals.scss";
import Header from "./_components/header/header";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: `The Art of Engineering Management`,
  description: `📚 Learn effective strategies to master engineering management and deliver great products.`,
  openGraph: {
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta property="og:image" content="https://taoem.com/favicon/web-app-manifest-512x512.png" />
      </head>
      <body>
        <Header />
        <main>
          <div className="content">{children}</div>
          <GoogleAnalytics gaId="G-BZZ49T668Z" />
        </main>
      </body>
    </html>
  );
}
