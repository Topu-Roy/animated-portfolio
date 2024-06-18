import React from "react";
import { cn } from "@/lib/utils";

export default function DimensionsWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto min-h-[75vh] max-w-[90rem]", className)}>
      {children}
    </section>
  );
}
