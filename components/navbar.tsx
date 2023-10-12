"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AlignJustify, Diamond, Square } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";

export const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const pathname = usePathname();

  const menus = [
    {
      menu: "anggaran dasar",
      href: "/anggarandasar",
    },
    {
      menu: "anggaran rumah tangga",
      href: "/anggaranrumahtangga",
    },
    {
      menu: "surat keputusan",
      href: "/suratkeputusan",
    },
    {
      menu: "pengurus",
      href: "/pengurus",
    },

    {
      menu: "surat ketetapan",
      href: "/suratketetapan",
    },
    {
      menu: "mantan ketua",
      href: "/mantanketua",
    },
  ];

  const toggleClick = () => {
    SetIsOpen((prev) => !prev);
  };

  const docs =
    pathname === "/suratkeputusan" ||
    pathname === "/pengurus" ||
    pathname === "/mantanketua" ||
    pathname === "/suratketetapan";
  return (
    <nav
      className={cn("w-full max-md:h-[60px] bg-slate-200", docs && "w-[610px]")}
    >
      <div className="max-md:px-6 h-full">
        <div className="flex  items-center h-full">
          <h1 className=" space-x-4 uppercase font-bold ">panggarean</h1>
          <AlignJustify className="ml-auto" onClick={toggleClick} />
        </div>
      </div>
      <Sheet open={isOpen} onOpenChange={toggleClick}>
        <SheetContent className="w-[280px]">
          <div className=" pt-20">
            {menus.map((menu) => (
              <div
                key={menu.href}
                className=" p-2 font-medium text-[12px] items-center flex relative"
              >
                {menu.href === pathname ? (
                  <Square className="w-3 h-3 mr-2" />
                ) : (
                  <Diamond className="w-3 h-3 mr-2" />
                )}
                <Link
                  className={cn(
                    " block uppercase w-full text-slate-800",
                    menu.href === pathname && "underline text-black"
                  )}
                  href={menu.href}
                  target="_parent"
                >
                  {menu.menu}
                </Link>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
