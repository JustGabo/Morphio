import React from "react";

const Header = () => {
  return (
    <article className="flex flex-col gap-3">
      <h1 className="text-5xl text-neutral-200 font-semibold">
        <span className="text-yellow-500">Languages.</span>
      </h1>
      <p className="text-neutral-400 text-sm lg:w-full w-[90%]">
        Please select the language you're going to <span className="text-yellow-500">convert your code to</span>.
      </p>
    </article>
  );
};

export default Header;
