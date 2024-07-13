import React from "react";
import About from "../about/components/content";
import Sidebar from "../components/sidebar";
import SupportedContent from "./components/content";

const SupportedPage = () => {
  return (
    <main className="bg-[#1E1E1E] flex  w-full">
      <Sidebar />

      <section className="w-full ml-[230px]">
        <SupportedContent/>
      </section>
    </main>
  );
};

export default SupportedPage;
