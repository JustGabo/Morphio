import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { MotionWrapper } from "headless-motion";
import Head from "next/head";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morphio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Morphio - Convert Your Code Seamlessly</title>
        <meta
          name="description"
          content="Morphio is the ultimate tool for converting your code across databases, styles, frameworks, and more. Seamlessly transform your projects with ease and efficiency."
        />
        <meta
          name="keywords"
          content="code conversion, database conversion, style conversion, framework conversion, Morphio, SQL, HTML, CSS, React, Vue, Tailwind, Next.js"
        />
        <meta name="author" content="KetchaoDev" />
        <meta
          property="og:title"
          content="Morphio - Convert Your Code Seamlessly"
        />
        <meta
          property="og:description"
          content="Morphio is the ultimate tool for converting your code across databases, styles, frameworks, and more. Seamlessly transform your projects with ease and efficiency."
        />
        <meta property="og:image" content="/logo-yellow.svg" />
        <meta property="og:url" content="https://www.morphio.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Morphio - Convert Your Code Seamlessly"
        />
        <meta
          name="twitter:description"
          content="Morphio is the ultimate tool for converting your code across databases, styles, frameworks, and more. Seamlessly transform your projects with ease and efficiency."
        />
        <meta name="twitter:image" content="/logo-yellow.svg" />
        <link rel="canonical" href="https://www.morphio.com" />
      </Head>
      <body className={nunito.className}>
        <MotionWrapper>{children}</MotionWrapper>
      </body>
    </html>
  );
}
