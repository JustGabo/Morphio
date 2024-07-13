"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Content = () => {

  return (
    <article className="flex flex-wrap gap-5 w-full h-full">
      <div className="flex flex-wrap gap-3 w-full">
        <Link href={"/convert?to=React"}>
          <div
            className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200 flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md "
          >
            <Image
              src={"/react.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">React</p>
          </div>
        </Link>

        <Link href={"/convert?to=Vue"}>
          <div
            className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md "
          >
            <Image
              src={"/vue.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">Vue</p>
          </div>
        </Link>

        <Link href={"/convert?to=Angular"}>
          <div
            className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md "
          >
            <Image
              src={"/angular.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">Angular</p>
          </div>
        </Link>

        {/* <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
          <p className="text-lg">Data</p>
        </div> */}
      </div>
    </article>
  );
};

export default Content;
