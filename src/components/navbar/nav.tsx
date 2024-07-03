"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import LinkItem from "./listItem";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={cn(
          "absolute left-0 right-0 top-2 z-20 w-full bg-transparent",
          open ? "text-white" : "text-black",
        )}
      >
        <nav className="mx-auto h-12 w-full max-w-[90rem] py-12">
          <ul className="flex h-full items-center justify-between gap-4">
            <li className="flex-1 text-3xl font-bold">Topu</li>
            <li>
              <Button
                className={cn(
                  "rounded-full px-4 py-2 font-bold text-white",
                  open
                    ? "bg-white text-black hover:bg-slate-200"
                    : "bg-neutral-950",
                )}
              >
                Contact
              </Button>
            </li>
            <li>
              <Button
                variant={"ghost"}
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center rounded-full p-2"
              >
                <X />
              </Button>
            </li>
          </ul>
        </nav>
      </div>

      <header
        className={cn(
          "mx-auto max-h-0 w-full overflow-hidden bg-neutral-950 transition-all duration-300 ease-in-out",
          open ? "max-h-screen pt-36" : "",
        )}
      >
        <div className="grid w-full grid-cols-2">
          <LinkItem
            title="My Work"
            className="border-b border-r border-t"
            flex="END"
          />
          <LinkItem title="About" className="border-b border-t" flex="START" />
          <LinkItem title="Contact" className="border-b border-r" flex="END" />
          <LinkItem title="Blog" className="border-b" flex="START" />
        </div>
      </header>
    </>
  );
}
