import React from "react";
import { OrbitingIcons } from "@/components/home/orbit";
import Nav from "@/components/navbar/nav";
import DimensionsWrapper from "@/components/shared/dimensionsWrapper";

export default function HomePage() {
  return (
    <>
      <main className="relative bg-neutral-950 pt-2">
        {/* //* Navbar */}
        <Nav />
        

        {/* //*  Hero */}
        <div className="h-12 w-full rounded-tl-full rounded-tr-full bg-white" />
        <section className="w-full bg-white text-black">
          <DimensionsWrapper className="rounded-3xl pt-24">
            <div className="flex w-full items-center justify-between">
              <div className="space-y-8">
                <h1 className="text-balance text-7xl font-semibold">
                  Award-winning development studio based in Denmark.
                </h1>

                <p className="w-[80%] text-xl leading-8 text-black/70">
                  We are a development studio working at the intersection of
                  design and technology. It&apos;s a really busy intersection
                  though — a lot of our staff have been involved in hit and
                  runs.
                </p>
              </div>
              <OrbitingIcons />
            </div>
          </DimensionsWrapper>
        </section>
      </main>
    </>
  );
}
