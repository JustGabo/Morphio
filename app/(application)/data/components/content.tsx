"use client";
import Link from "next/link";
import React from "react";
import { usingToConvertContext } from "../../../context/to-convert-context";

const Content = () => {
  const { setTo } = usingToConvertContext();

  return (
    <article className="flex flex-wrap gap-5 w-full h-full">
      <div className="flex flex-wrap gap-3 w-full">
        <Link href={`/convert?to=JSON`}>
          <div
            onClick={() => setTo("JSON")}
            className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200 flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md "
          >
            <p className="font-semibold">JSON</p>
          </div>
        </Link>
        <Link href={`/convert?to=XML`}>
          <div
            onClick={() => setTo("XML")}
            className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md "
          >
            <p className="font-semibold">XML</p>
          </div>
        </Link>

        <Link href={`/convert?to=CSV`}>
          <div
            onClick={() => setTo("CVS")}
            className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md "
          >
            <p className="font-semibold">CSV</p>
          </div>
        </Link>

        <Link href={`/convert?to=YAML`}>
          <div
            onClick={() => setTo("YAML")}
            className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md "
          >
            <p className="font-semibold">YAML</p>
          </div>
        </Link>

        <Link href={`/convert?to=ProtocolBuffers`}>
          <div
            onClick={() => setTo("Protocol Buffers")}
            className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md "
          >
            <p className="font-semibold ">Protocol Buffers</p>
          </div>
        </Link>

        <Link href={`/convert?to=AVRO`}>
          <div
            onClick={() => setTo("AVRO")}
            className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md "
          >
            <p className="font-semibold">AVRO</p>
          </div>
        </Link>

        <Link href={`/convert?to=Parquet`}>
          <div
            onClick={() => setTo("Parquet")}
            className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md "
          >
            <p className="font-semibold">Parquet</p>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Content;
