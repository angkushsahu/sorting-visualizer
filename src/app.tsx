import { AlgorithmInformation, PlayResetButton, Select, Slider } from "./components";
import { algorithmOptions, generateAnimationArray } from "./lib";
import type { SortingAlgorithmType } from "./types";
import { useSortingAlgorithm } from "./context";

export function App() {
   const {
      animationSpeed,
      arrayToSort,
      isSorting,
      requiresReset,
      resetArrayAndAnimation,
      runAnimation,
      selectedAlgorithm,
      setAnimationSpeed,
      setSelectedAlgorithm,
   } = useSortingAlgorithm();

   function handlePlay() {
      if (requiresReset) {
         resetArrayAndAnimation();
         return;
      }

      generateAnimationArray({ selectedAlgorithm, array: arrayToSort, isSorting, runAnimation });
   }

   return (
      <main className="container mx-auto min-h-screen p-5">
         <h1 className="text-center text-3xl font-semibold sm:text-4xl">Sorting Visualizer</h1>
         <section className="my-10 grid gap-10 md:grid-cols-2">
            <AlgorithmInformation selectedAlgorithm={selectedAlgorithm} />
            <article className="gap-4 rounded-lg bg-neutral-800 px-5 py-4 shadow-lg">
               <p className="mb-6 text-2xl font-semibold">Controls</p>
               <div className="space-y-6">
                  <Slider
                     handleChange={(e) => setAnimationSpeed(Number(e.target.value))}
                     isDisabled={isSorting}
                     value={animationSpeed}
                  />
                  <Select
                     onChange={(e) => setSelectedAlgorithm(e.target.value as SortingAlgorithmType)}
                     defaultValue={selectedAlgorithm}
                     options={algorithmOptions}
                     isDisabled={isSorting}
                  />
                  <PlayResetButton handlePlay={handlePlay} requiresReset={requiresReset} />
               </div>
            </article>
         </section>
         <section id="content-container" className="flex items-end justify-center gap-x-1">
            {arrayToSort.map((value, index) => (
               <div
                  key={`Array-element-${index + 1}`}
                  className="array-line default-line-color w-1 rounded-lg opacity-70 shadow-lg"
                  style={{ height: `${value}px` }}
               ></div>
            ))}
         </section>
      </main>
   );
}
