import { Idea1 } from "./components/challenges/1/main";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* build shit challenge 1 */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Build Shit Challenge 1</h1>
          <div className="flex flex-col gap-4">
            <Idea1 />
          </div>
        </div>
      </main>
    </div>
  );
}
