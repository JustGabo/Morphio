import React from "react";
import AboutHeader from "./header";

const About = () => {
  return (
    <main className="w-full text-neutral-300 bg-[#1E1E1E] h-full px-7 py-5 flex flex-col gap-10">
      <article className="pb-10 pt-20 w-[80%] flex flex-col gap-3">
        <AboutHeader />
      </article>
      <article className="flex flex-col gap-3 w-[80%]">
        <h2 className="text-lg font-semibold">What is Morphio?</h2>
        <p className="text-sm text-neutral-400">
          Morphio is a cutting-edge conversion tool designed to seamlessly
          transform code across various programming languages and frameworks.
          Whether you’re working with front-end frameworks, SQL queries, or
          styling languages, Morphio ensures your code is converted accurately
          and efficiently.
        </p>
      </article>

      <article className="flex flex-col gap-3 w-[80%]">
        <h2 className="text-lg font-semibold">What is it used for?</h2>
        <p className="text-sm text-neutral-400 w-[90%]">
          Morphio is used to simplify the process of converting code from one
          format to another. It's ideal for developers who need to:
        </p>

        <ul className="flex flex-col gap-3 text-[13px] list-disc ml-5 text-neutral-400">
          <li>Migrate projects from one framework to another.</li>
          <li>Convert SQL queries between different database systems.</li>
          <li>Transform CSS styles into modern frameworks like Tailwind.</li>
          <li>
            Automate repetitive conversion tasks to save time and reduce errors.
          </li>
        </ul>
      </article>

      <article className="flex flex-col gap-3 w-[80%]">
        <h2 className="text-lg font-semibold">How does it work?</h2>
        <p className="text-sm text-neutral-400">
          Morphio leverages advanced algorithms and AI models to analyze your
          source code and accurately convert it to the target format. By
          understanding the syntax and semantics of various programming
          languages and frameworks, Morphio ensures that the converted code
          maintains functionality and readability.
        </p>
      </article>

      <article className="flex flex-col gap-3 w-[80%]">
        <h2 className="text-lg font-semibold">
          Who can benefit from using Morphio?
        </h2>
        <p className="text-sm text-neutral-400">
          Developers, software engineers, and IT professionals who frequently
          work with multiple programming languages and frameworks can greatly
          benefit from Morphio. It is also valuable for teams involved in code
          migration projects and those looking to standardize their codebase
          across different technologies.
        </p>
      </article>

      <article className="flex flex-col gap-3 w-[80%]">
        <h2 className="text-lg font-semibold">
          What makes it different from other conversion tools?
        </h2>
        <p className="text-sm text-neutral-400">
          Morphio stands out due to its comprehensive support for a wide range
          of programming languages and frameworks, user-friendly interface, and
          the ability to handle complex code structures. Additionally, Morphio
          continuously updates its algorithms to stay current with the latest
          developments in software technology.
        </p>
      </article>

      <article className="flex flex-col gap-3 w-[80%]">
        <h2 className="text-lg font-semibold">Is Morphio secure to use?</h2>
        <p className="text-sm text-neutral-400">
          Yes, Morphio prioritizes the security and privacy of your code. All
          conversions are processed securely, and we ensure that your code
          remains confidential throughout the conversion process. Our platform
          adheres to industry-standard security practices to protect your data.
        </p>
      </article>

      <article className="flex flex-col gap-3 w-[80%]">
        <h2 className="text-lg font-semibold">
          Can Morphio handle large codebases?
        </h2>
        <p className="text-sm text-neutral-400">
          Absolutely. Morphio is designed to efficiently handle large codebases,
          making it suitable for enterprise-level projects. Our advanced
          processing capabilities ensure that even the most extensive code
          conversions are completed quickly and accurately.
        </p>
      </article>

      <article className="flex flex-col gap-3 w-[80%]">
        <h2 className="text-lg font-semibold">
          Is there a learning curve for using Morphio?
        </h2>
        <p className="text-sm text-neutral-400">
          Morphio is designed with ease of use in mind. Its intuitive interface
          allows users to start converting code with minimal setup.
          Comprehensive documentation and support resources are available to
          help users make the most of Morphio’s features.
        </p>
      </article>
    </main>
  );
};

export default About;
