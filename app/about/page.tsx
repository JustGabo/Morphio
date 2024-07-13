import React from "react";
import About from "./components/content";
import Sidebar from "../components/sidebar";

const AboutPage = () => {
  return (
    <main className="bg-[#1E1E1E] flex  w-full">
      <Sidebar />

      <section className="w-full ml-[230px]">
        <About />
      </section>
    </main>
  );
};

export default AboutPage;
