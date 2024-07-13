"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <article className="flex flex-wrap gap-5 w-full h-full">
      <div className="flex flex-wrap w-full gap-3">
        <Link href={"/convert?to=MySQL"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200 flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/mysql.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">MySQL</p>
          </div>
        </Link>

        <Link href={"/convert?to=PostgreSQL"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/postgresql.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">PostgreSQL</p>
          </div>
        </Link>

        <Link href={"/convert?to=SQLite"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/sqlite.svg"}
              alt="Logo"
              width={100}
              height={100}
              className="text-neutral-400"
            />
            <p className="font-semibold">SQLite</p>
          </div>
        </Link>

        <Link href={"/convert?to=MongoDB"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/mongodb.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">MongoDB</p>
          </div>
        </Link>

        <Link href={"/convert?to=Oracle"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/oracle.svg"}
              alt="Logo"
              width={150}
              height={150}
              className="text-neutral-400 mt-3"
            />
            <p className="font-semibold ">Oracle</p>
          </div>
        </Link>

        <Link href={"/convert?to=Cassandra"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/cassandra.svg"}
              alt="Logo"
              width={100}
              height={100}
              className="text-neutral-400"
            />
            <p className="font-semibold">Cassandra</p>
          </div>
        </Link>

        <Link href={"/convert?to=MicrosoftSQL"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/microsoftsqlserver.svg"}
              alt="Logo"
              width={100}
              height={100}
              className="text-neutral-400"
            />
            <p className="font-semibold">Microsoft SQL</p>
          </div>
        </Link>

        <Link href={"/convert?to=Firebase"}>
          <div className="lg:w-[220px] w-[170px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
            <Image
              src={"/firebase-1.svg"}
              alt="Logo"
              width={50}
              height={50}
              className="text-neutral-400"
            />
            <p className="font-semibold">Firebase</p>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Content;
