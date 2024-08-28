import type { CommonAlgorithmArgs } from "./types";

export function selectionSort({ animations, array }: CommonAlgorithmArgs) {
   const arrayLength = array.length;

   for (let i = 0; i < arrayLength - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < arrayLength; j++) {
         animations.push([[j, minIndex], false]);
         if (array[j] < array[minIndex]) minIndex = j;
      }

      animations.push([[i, array[minIndex]], true]);
      animations.push([[minIndex, array[i]], true]);
      [array[minIndex], array[i]] = [array[i], array[minIndex]];
   }
}
