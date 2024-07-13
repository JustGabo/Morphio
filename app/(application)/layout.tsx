import React from "react";
import Sidebar from "../components/sidebar";

type Props = {
  children: React.ReactNode;
};

const ApplicationLayout = ({ children }: Props) => {
  return (
    <main>
      <Sidebar />
      <section className="lg:pl-[230px] bg-[#1E1E1E]  h-full">
        <div className="max-w-[1056px] mx-auto pt-6 h-full">{children}</div>
      </section>
    </main>
  );
};

export default ApplicationLayout;
