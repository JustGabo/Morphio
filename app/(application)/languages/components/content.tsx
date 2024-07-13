"use client";
import { usingToConvertContext } from "@/app/context/to-convert-context";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <article className="flex items-center  gap-5  w-full h-full">
      <div className="flex flex-wrap  w-full  gap-3">
        <Link href={"/convert?to=JavaScript"}>
          <div className="lg:w-[220px] w-[170px]  cursor-pointer hover:bg-neutral-800/50 transition-all duration-200 flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/javascript.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">JavaScript</p>
          </div>
        </Link>

        <Link href={"/convert?to=TypeScript"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/typescript.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">TypeScript</p>
          </div>
        </Link>

        <Link href={"/convert?to=Python"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/python.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">Python</p>
          </div>
        </Link>

        <Link href={"/convert?to=Java"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/java.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">Java</p>
          </div>
        </Link>

        <Link href={`/convert?to=CSharp`}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/csharp.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">C#</p>
          </div>
        </Link>

        <Link href={"/convert?to=CPlusPlus"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/c++.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">C++</p>
          </div>
        </Link>

        <Link href={"/convert?to=C"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/c.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">C</p>
          </div>
        </Link>

        <Link href={"/convert?to=Swift"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/swift.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">Swift</p>
          </div>
        </Link>

        <Link href={"/convert?to=Kotlin"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/kotlin.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">Kotlin</p>
          </div>
        </Link>
      </div>

      {/* <div className="h-full flex items-center justify-center">
            <ArrowRight className="w-10 h-10"/>
          </div> */}
    </article>
  );
};

export default Content;
