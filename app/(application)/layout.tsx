import React from "react";
import Sidebar from "../components/sidebar";
import Providers from "../components/providers";

type Props = {
  children: React.ReactNode;
};

const ApplicationLayout = ({ children }: Props) => {
  return (
    <Providers>
      <main>
        <Sidebar />
        <section className="lg:pl-[230px] bg-[#1E1E1E]  h-full">
          <div className="max-w-[1056px] mx-auto pt-6 h-full">{children}</div>
        </section>
      </main>
    </Providers>
  );
};

export default ApplicationLayout;
