import React from "react";
import Header from "./components/header";
import Content from "./components/content";

const DataPage = () => {
  return (
    <main className="w-full lg:h-[100dvh] h-full px-4 lg:px-7 flex flex-col gap-10">
      <section className="pb-10 pt-10 lg:pt-20 w-full flex flex-col gap-10">
        <Header />
        <Content />
      </section>
    </main>
  );
};

export default DataPage;
