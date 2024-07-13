import React from "react";

const AboutHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-5xl font-semibold">
        About <span className="text-yellow-400">Morphio.</span>
      </h1>
      <p className="text-neutral-400 text-sm">
        The Ultimate Code Conversion Solution for Developers.
      </p>
      <p className="text- text-sm text-neutral-400">
        You can customize the subtitle to emphasize the unique aspects or
        benefits of Morphio, such as its ease of use, efficiency, or support for
        various languages and frameworks. Here are a few cuestions that may
        clarify your doubts:
      </p>
    </div>
  );
};

export default AboutHeader;
