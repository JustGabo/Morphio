import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./components/header";
import Content from "./components/content";

const LanguagesPage = () => {
  return (
    <main className="w-full  lg:px-7 px-4  flex flex-col gap-10">
      <section className="pb-10 lg:pt-20 pt-10  w-full flex flex-col gap-10">
        <Header />
        <Content />
      </section>
    </main>
  );
};

export default LanguagesPage;
