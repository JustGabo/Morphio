import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Code, Home, Info, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside className="h-[100dvh] px-2 w-[5%] hidden lg:flex flex-col gap-10 items-center py-5 bg-[#252525]">
        <div className="w-full">
          <Link href={"/"}>
            <div className="w-full  relative h-[30px] cursor-pointer">
              <Image src={"/logo-yellow.svg"} alt="Logo" fill />
            </div>
          </Link>
        </div>
      </aside>
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
                  className={`h-[40px] flex items-center px-5 font-semibold cursor-pointer hover:text-yellow-800 transition-all duration-300`}
                >
                  Home
                </li>
              </Link>
            </SheetTitle>

            <SheetTitle>
              <Link href={"/about"}>
                <li
                  className={` h-[40px] flex items-center px-5 font-semibold cursor-pointer hover:text-yellow-800 transition-all duration-300`}
                >
                  About
                </li>
              </Link>
            </SheetTitle>

            <SheetTitle>
              <Link href={"/supported"}>
                <li
                  className={` h-[40px] flex items-center px-5 font-semibold cursor-pointer hover:text-yellow-800 transition-all duration-300`}
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
