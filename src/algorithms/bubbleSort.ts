import type { CommonAlgorithmArgs } from "./types";

export function bubbleSort({ animations, array }: CommonAlgorithmArgs) {
   const arrayLength = array.length;

   for (let i = 0; i < arrayLength - 1; i++) {
      let isSorted = true;

      for (let j = 0; j < arrayLength - i - 1; j++) {
         animations.push([[j, j + 1], false]);

         if (array[j] > array[j + 1]) {
            isSorted = false;
            animations.push([[j, array[j + 1]], true]);
            animations.push([[j + 1, array[j]], true]);
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
         }
      }

      if (isSorted) return;
   }
}
