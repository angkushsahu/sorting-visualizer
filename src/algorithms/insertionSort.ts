import type { CommonAlgorithmArgs } from "./types";

export function insertionSort({ animations, array }: CommonAlgorithmArgs) {
   for (let i = 1; i < array.length; i++) {
      animations.push([[i], false]);
      const currentValue = array[i];
      let j = i - 1;

      while (j >= 0 && array[j] > currentValue) {
         animations.push([[j, j + 1, i], false]);
         array[j + 1] = array[j];
         animations.push([[j + 1, array[j]], true]);
         j--;
      }

      array[j + 1] = currentValue;
      animations.push([[j + 1, currentValue], true]);
   }
}
