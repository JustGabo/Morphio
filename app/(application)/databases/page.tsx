import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./components/header";
import Content from "./components/content";

const DatabasesPage = () => {
  return (
    <main className="w-full px-4 lg:px-7 h-[100dvh]  flex flex-col gap-10">
      <section className="pb-10 lg:pt-20 pt-10 w-full flex flex-col gap-10">
        <Header />
        <Content />
      </section>
    </main>
  );
};

export default DatabasesPage;
