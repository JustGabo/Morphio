import React from "react";

const Header = () => {
  return (
    <article className="flex flex-col gap-3">
      <h1 className="text-5xl text-neutral-200 font-semibold">
        <span className="text-yellow-500">Data.</span>
      </h1>
      <p className="text-neutral-400 text-sm ">
        Please select the format you're going to
        <span className="text-yellow-500">convert your data to</span>.
      </p>
    </article>
  );
};

export default Header;
