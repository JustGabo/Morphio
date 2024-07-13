"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const path = usePathname();
  const [justify, setJustify] = useState("start");

  const gettingMarginTop = () => {
    if (path === "/") {
      setJustify("start");
    } else if (path === "/about") {
      setJustify("center");
    } else if (path === "/supported") {
      setJustify("end");
    }
  };

  useEffect(() => {
    gettingMarginTop();
  }, [path]);


  return (
    <>
      <section className="hidden lg:flex bg-[#252525] flex-col text-neutral-200 gap-10 w-[230px] h-[100dvh] fixed ">
        <article className="flex text-yellow-500 items-center relative gap-1 p-5">
          <Link href={"/"} className="w-full flex items-center gap-1">
            <div className="w-[50px] relative h-[30px]">
              <Image src={"/logo-yellow.svg"} alt="Logo" fill />
            </div>
            <h2 className="uppercase text-sm font-bold">Morphio</h2>
          </Link>
        </article>

        <article className="flex ml-5">
          <div
            style={{ justifyContent: justify }}
            className={` w-[2px] rounded-lg flex flex-col  h-[120px] bg-neutral-600`}
          >
            <div
              className={` h-[40px] w-full  transition-all duration-300 bg-yellow-600 rounded-lg`}
            ></div>
          </div>
          <ul className="flex flex-col  text-sm relative">
            <Link href={"/"}>
              <li
                className={`${
                  path === "/" && "text-yellow-500"
                } h-[40px] flex items-center px-5 font-semibold cursor-pointer hover:text-yellow-800 transition-all duration-300`}
              >
                Home
              </li>
            </Link>

            <Link href={"/about"}>
              <li
                className={`${
                  path === "/about" && "text-yellow-500"
                } h-[40px] flex items-center px-5 font-semibold cursor-pointer hover:text-yellow-800 transition-all duration-300`}
              >
                About
              </li>
            </Link>

            <Link href={"/supported"}>
              <li
                className={`${
                  path === "/supported" && "text-yellow-500"
                } h-[40px] flex items-center px-5 font-semibold cursor-pointer hover:text-yellow-800 transition-all duration-300`}
              >
                Supported
              </li>
            </Link>
          </ul>
        </article>
      </section>
      <section className="lg:hidden bg-[#252525]">
        <Sheet>
          <SheetHeader className="flex p-3 items-center justify-between">
            <SheetTitle className="text-yellow-500">
              <Link href={"/"} className="w-full flex items-center gap-1">
                <div className="lg:w-[50px] lg:h-[30px] w-[40px] h-[30px] relative">
                  <Image src={"/logo-yellow.svg"} alt="Logo" fill />
                </div>
                <h2 className="uppercase lg:text-sm text-xs font-bold">
                  Morphio
                </h2>
              </Link>
            </SheetTitle>
            <SheetTrigger>
              <Menu className="text-neutral-400" />
            </SheetTrigger>
          </SheetHeader>

          <SheetContent className="pt-20 bg-[#252525] text-neutral-400">
            <SheetTitle>
              <Link href={"/"}>
                <li
                  className={`${
                    path === "/" && "text-yellow-500"
                  } h-[40px] flex items-center px-5 font-semibold cursor-pointer hover:text-yellow-800 transition-all duration-300`}
                >
                  Home
                </li>
              </Link>
            </SheetTitle>

            <SheetTitle>
              <Link href={"/about"}>
                <li
                  className={`${
                    path === "/about" && "text-yellow-500"
                  } h-[40px] flex items-center px-5 font-semibold cursor-pointer hover:text-yellow-800 transition-all duration-300`}
                >
                  About
                </li>
              </Link>
            </SheetTitle>

            <SheetTitle>
              <Link href={"/supported"}>
                <li
                  className={`${
                    path === "/supported" && "text-yellow-500"
                  } h-[40px] flex items-center px-5 font-semibold cursor-pointer hover:text-yellow-800 transition-all duration-300`}
                >
                  Supported
                </li>
              </Link>
            </SheetTitle>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
};

export default Sidebar;
