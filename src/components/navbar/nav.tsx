import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Nav() {
  return (
    <header className="mx-auto w-full bg-slate-600 py-8">
      <NavBar />
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
  );
}

function LinkItem({
  className,
  title,
  flex,
}: {
  className?: string;
  title: string;
  flex: "START" | "END";
}) {
  return (
    <Link
      className={cn(
        `
            relative isolate flex items-center border-neutral-800 bg-neutral-950 py-16 
            text-4xl font-semibold text-white 
            transition-all ease-in-out
            hover:bg-neutral-950/85
        `,
        className,
        flex === "START" ? "justify-start" : "",
        flex === "END" ? "justify-end" : "",
      )}
      href={"#"}
    >
      <div className="w-[44.6rem]">{title}</div>
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span>
    </Link>
  );
}

function NavBar() {
  return (
    <nav className="mx-auto w-full max-w-[90rem] py-16">
      <ul className="flex items-center justify-between">
        <li className="text-2xl font-bold">Topu</li>
        <ul className="flex items-center justify-end gap-4">
          <li>
            <Button className="rounded-full bg-black p-3 font-semibold">
              Contact
            </Button>
          </li>
          <li>Menu</li>
        </ul>
      </ul>
    </nav>
  );
}
