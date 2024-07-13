import { Braces, Brush, Code, Database, Framer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Welcome = () => {
  return (
    <main className="w-full px-4 lg:h-full h-[100dvh] lg:px-7 py-5 flex flex-col gap-10">
      <section className="pb-10 lg:pt-20 pt-10 lg:w-[80%] w-full flex flex-col gap-10">
        <article className="flex flex-col gap-3">
          <h1 className="text-5xl text-neutral-200 font-semibold">
            Welcome to <span className="text-yellow-500">Morphio.</span>
          </h1>
          <p className="text-neutral-400 text-sm lg:ml-2">
            Select the technology you're going to convert.
          </p>
        </article>

        <article className="flex  flex-wrap  gap-3 lg:w-[90%] w-full h-full">
          <Link href={"/languages"}>
            <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200 flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
              <Code className="w-12 h-12" strokeWidth={1.5} />
              <p className="text-lg">Languages</p>
              {/* <Image src={'/next.svg'} alt="Logo" width={200} height={200} className="text-neutral-400"/> */}
            </div>
          </Link>
          <Link href={"/frameworks"}>
            <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200 flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
              <Framer className="w-12 h-12" strokeWidth={1.5} />
              <p className="text-lg">FrameWorks</p>
              {/* <Image src={'/next.svg'} alt="Logo" width={200} height={200} className="text-neutral-400"/> */}
            </div>
          </Link>

          <Link href={"/styles"}>
            <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
              <Brush className="w-12 h-12" strokeWidth={1.5} />
              <p className="text-lg">Styles</p>
              {/* <Image src={'/next.svg'} alt="Logo" width={200} height={200} className="text-neutral-400"/> */}
            </div>
          </Link>

          <Link href={"/databases"}>
            <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
              <Database className="w-12 h-12" strokeWidth={1.5} />
              <p className="text-lg">Databases</p>
              {/* <Image src={'/next.svg'} alt="Logo" width={200} height={200} className="text-neutral-400"/> */}
            </div>
          </Link>

          <Link href={"/data"}>
            <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
              <Braces className="w-12 h-12" strokeWidth={1.5} />
              <p className="text-lg">Data</p>
              {/* <Image src={'/next.svg'} alt="Logo" width={200} height={200} className="text-neutral-400"/> */}
            </div>
          </Link>
        </article>
      </section>
    </main>
  );
};

export default Welcome;
