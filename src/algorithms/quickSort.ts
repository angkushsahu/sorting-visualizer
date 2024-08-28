import type { AnimationArrayType } from "../types";

interface QuickSortArgs {
   animations: AnimationArrayType;
   array: Array<number>;
   begin: number;
   finish: number;
}

function partition({ animations, array, begin, finish }: QuickSortArgs) {
   let i = begin;
   let j = finish + 1;
   const condition = true;
   const pivot = array[begin];

   while (condition) {
      while (array[++i] <= pivot) {
         if (i === finish) break;
         animations.push([[i], false]);
      }

      while (array[--j] >= pivot) {
         if (j === begin) break;
         animations.push([[j], false]);
      }

      if (j <= i) break;
      animations.push([[i, array[j]], true]);
      animations.push([[j, array[i]], true]);
      [array[i], array[j]] = [array[j], array[i]];
   }

   animations.push([[begin, array[j]], true]);
   animations.push([[j, array[begin]], true]);
   [array[begin], array[j]] = [array[j], array[begin]];

   return j;
}

export function quickSort({ animations, array, begin, finish }: QuickSortArgs) {
   if (begin >= finish) return;

   const pivot = partition({ array, begin, finish, animations });
   quickSort({ array, begin, finish: pivot - 1, animations });
   quickSort({ array, begin: pivot + 1, finish, animations });
}
