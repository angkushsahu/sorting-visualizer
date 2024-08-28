import type { SortingAlgorithmType } from "../types";
import { algorithmInfo } from "../lib";

interface AlgorithmInformationProps {
   selectedAlgorithm: SortingAlgorithmType;
}

export function AlgorithmInformation({ selectedAlgorithm }: AlgorithmInformationProps) {
   const { averageCase, bestCase, title, worstCase } = algorithmInfo[selectedAlgorithm];

   return (
      <article className="rounded-lg bg-neutral-600 px-5 py-4 shadow-lg">
         <p className="mb-4 text-2xl font-semibold">{title}</p>
         <section className="space-y-1 text-gray-300 [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:gap-x-20">
            <div>
               <span>Best Case</span>
               <span>{bestCase}</span>
            </div>
            <div>
               <span>Average Case</span>
               <span>{averageCase}</span>
            </div>
            <div>
               <span>Worst Case</span>
               <span>{worstCase}</span>
            </div>
         </section>
      </article>
   );
}
