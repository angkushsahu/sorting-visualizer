import type { AnimationArrayType } from "../types";

interface MergeArgs {
   animations: AnimationArrayType;
   array: Array<number>;
   begin: number;
   middle: number;
   finish: number;
}

function merge({ animations, array, begin, finish, middle }: MergeArgs) {
   const left = array.slice(begin, middle);
   const right = array.slice(middle, finish);
   let i = 0,
      j = 0,
      k = begin;

   while (i < left.length && j < right.length) {
      animations.push([[begin + i, middle + j], false]);

      if (left[i] <= right[j]) {
         animations.push([[k, left[i]], true]);
         array[k] = left[i];
         i++;
      } else {
         animations.push([[k, right[j]], true]);
         array[k] = right[j];
         j++;
      }

      k++;
   }

   while (i < left.length) {
      animations.push([[begin + i], false]);
      animations.push([[k, left[i]], true]);
      array[k] = left[i];
      i++;
      k++;
   }

   while (j < right.length) {
      animations.push([[middle + j], false]);
      animations.push([[k, right[j]], true]);
      array[k] = right[j];
      j++;
      k++;
   }
}

export function mergeSort(array: Array<number>) {
   const animations: AnimationArrayType = [];
   const arrayLength = array.length;

   for (let k = 1; k < arrayLength; k = 2 * k) {
      for (let i = 0; i < arrayLength; i += 2 * k) {
         const begin = i;
         const middle = i + k;
         const finish = Math.min(i + 2 * k, arrayLength);
         merge({ array, begin, middle, finish, animations });
      }
   }

   return animations;
}
