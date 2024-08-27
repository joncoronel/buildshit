import {
  Idea1,
  Idea2,
  Idea5,
  Idea6,
  Idea7,
} from "./components/challenges/1/main";

export default function Home() {
  return (
    <div className="font-sans  min-h-screen p-8 pb-20  sm:p-20">
      <main className="flex flex-col gap-8 w-full">
        {/* build shit challenge 1 */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Build Shit Challenge 1</h1>
          <div className="flex  w-full gap-4 flex-wrap">
            <Idea1 />
            <Idea2 />

            <Idea5 />
            <Idea6 />
            <Idea7 />
          </div>
        </div>
      </main>
    </div>
  );
}
