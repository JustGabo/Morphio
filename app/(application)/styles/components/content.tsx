"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <article className="flex flex-wrap gap-5 w-full h-full">
      <div className="flex flex-wrap  gap-3 w-full">
        <Link href={"/convert?to=CSS"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200 flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/css-3.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">Css</p>
          </div>
        </Link>

        <Link href={"/convert?to=Tailwind"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/tailwindcss.svg"}
              alt="Logo"
              width={75}
              height={75}
              className="text-neutral-400"
            />
            <p className="font-semibold">Tailwind</p>
          </div>
        </Link>

        <Link href={"/convert?to=Bootstrap"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/bootstrap.svg"}
              alt="Logo"
              width={75}
              height={75}
              className="text-neutral-400"
            />
            <p className="font-semibold">Bootstrap</p>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Content;
