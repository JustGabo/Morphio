"use client";
import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <article className="flex flex-wrap gap-5 w-full h-full">
      <div className="flex flex-wrap gap-3 w-full">
        <Link href={`/convert?to=JSON`}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200 flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <p className="font-semibold">JSON</p>
          </div>
        </Link>
        <Link href={`/convert?to=XML`}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <p className="font-semibold">XML</p>
          </div>
        </Link>

        <Link href={`/convert?to=CSV`}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <p className="font-semibold">CSV</p>
          </div>
        </Link>

        <Link href={`/convert?to=YAML`}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <p className="font-semibold">YAML</p>
          </div>
        </Link>

        <Link href={`/convert?to=ProtocolBuffers`}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <p className="font-semibold ">Protocol Buffers</p>
          </div>
        </Link>

        <Link href={`/convert?to=AVRO`}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <p className="font-semibold">AVRO</p>
          </div>
        </Link>

        <Link href={`/convert?to=Parquet`}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <p className="font-semibold">Parquet</p>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Content;
