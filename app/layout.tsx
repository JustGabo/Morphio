import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { MotionWrapper } from "headless-motion";
import Providers from "./components/providers";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          <MotionWrapper>{children}</MotionWrapper>
        </Providers>
      </body>
    </html>
  );
}
