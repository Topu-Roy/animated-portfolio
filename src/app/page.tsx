import { OrbitingIcons } from "@/components/home/orbit";
import Nav from "@/components/navbar/nav";
import DimensionsWrapper from "@/components/shared/dimensionsWrapper";

export default function HomePage() {
  return (
    <>
      <Nav />
      <div className="w-full rounded-xl">
        <DimensionsWrapper className="flex items-center justify-center bg-slate-800">
          <main className="flex w-full max-w-[90rem] flex-col items-center justify-center">
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
          </main>
        </DimensionsWrapper>
      </div>
    </>
  );
}
