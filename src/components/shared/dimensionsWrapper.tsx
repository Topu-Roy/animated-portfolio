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
    <div className={cn("mx-auto h-[75vh] max-w-[90rem]", className)}>
      {children}
    </div>
  );
}
