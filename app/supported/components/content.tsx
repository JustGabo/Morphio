import Image from "next/image";
import Link from "next/link";
import React from "react";

const SupportedContent = () => {
  return (
    <main className="w-full text-neutral-300 bg-[#1E1E1E] h-full px-7 py-5 flex flex-col gap-10">
      <article className="pb-10 pt-20 w-full flex flex-col gap-5">
        <h1 className="text-5xl font-semibold">
          Supported <span className="text-yellow-400">Technologies.</span>
        </h1>
        {/* <p className="text-neutral-400 text-sm">
          The Ultimate Code Conversion Solution for Developers.
        </p> */}
        <p className="text- text-sm text-neutral-400 w-[95%]">
          Welcome to the Supported Technologies section! Here, you'll find a
          comprehensive list of programming languages, frameworks, databases,
          and styles that our AI is proficient in. Whether you're working with
          front-end or back-end technologies, our AI is equipped to handle a
          wide variety of conversions to streamline your development process.
        </p>
      </article>
      <div className="flex flex-col gap-20">
        <article className="flex flex-col gap-3 w-full">
          <h2 className="text-lg">Languages.</h2>
          <div className="flex flex-wrap w-full gap-3">
            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200 flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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
        </article>

        <article className="flex flex-wrap gap-5 w-full h-full">
          <h2 className="text-lg">FrameWorks.</h2>
          <div className="flex flex-wrap gap-3 w-full">
            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200 flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

        <article className="flex flex-wrap gap-5 w-full h-full">
          <h2 className="text-lg">Databases.</h2>
          <div className="flex flex-wrap w-full gap-3">
            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200 flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

        <article className="flex flex-wrap gap-5 w-[90%] h-full">
          <h2 className="text-lg">Styles.</h2>
          <div className="flex flex-wrap gap-3 w-full">
            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200 flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
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

        <article className="flex flex-wrap gap-5 w-full h-full">
          <h2 className="text-lg">Data Types.</h2>
          <div className="flex flex-wrap gap-3 w-full">
            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200 flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
                <p className="font-semibold">JSON</p>
              </div>
            </Link>
            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
                <p className="font-semibold">XML</p>
              </div>
            </Link>

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
                <p className="font-semibold">CSV</p>
              </div>
            </Link>

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
                <p className="font-semibold">YAML</p>
              </div>
            </Link>

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
                <p className="font-semibold ">Protocol Buffers</p>
              </div>
            </Link>

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
                <p className="font-semibold">AVRO</p>
              </div>
            </Link>

            <Link href={"/convert"}>
              <div className="w-[220px] cursor-pointer hover:bg-neutral-800/50 transition-all duration-200  flex flex-col gap-3 text-neutral-300 h-[140px]  bg-neutral-800 p-5  items-center justify-center border border-neutral-700 rounded-md ">
                <p className="font-semibold">Parquet</p>
              </div>
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
};

export default SupportedContent;
