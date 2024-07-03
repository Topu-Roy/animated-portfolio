import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LinkItem({
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
              isolate flex items-center border-neutral-800 bg-neutral-950 py-16 
              text-4xl font-semibold text-white 
              transition-all ease-in-out
              hover:bg-neutral-950/5
          `,
        className,
        flex === "START" ? "justify-start" : "",
        flex === "END" ? "justify-end" : "",
      )}
      href={"#"}
    >
      <div className={cn("w-[44.6rem]", flex === "START" ? "pl-8" : "")}>
        {title}
      </div>
    </Link>
  );
}
