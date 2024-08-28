import { bubbleSort, insertionSort, mergeSort, quickSort, selectionSort } from "../algorithms";
import type { AnimationArrayType, SortingAlgorithmType } from "../types";

interface RunAlgorithmArgs {
   selectedAlgorithm: SortingAlgorithmType;
   animations: AnimationArrayType;
   array: Array<number>;
}

function runAlgorithm({ animations, array, selectedAlgorithm }: RunAlgorithmArgs) {
   switch (selectedAlgorithm) {
      case "bubble":
         bubbleSort({ animations, array });
         break;
      case "insertion":
         insertionSort({ animations, array });
         break;
      case "merge":
         return mergeSort(array);
      case "quick":
         quickSort({ animations, array, begin: 0, finish: array.length - 1 });
         break;
      case "selection":
         selectionSort({ animations, array });
         break;
      default:
         break;
   }
}

interface GenerateAnimationArrayArgs {
   selectedAlgorithm: SortingAlgorithmType;
   isSorting: boolean;
   array: Array<number>;
   runAnimation: (animations: AnimationArrayType) => void;
}

export function generateAnimationArray({ array, isSorting, runAnimation, selectedAlgorithm }: GenerateAnimationArrayArgs) {
   if (isSorting) return;
   if (array.length <= 1) return [];

   const animations: AnimationArrayType = [];
   const auxiliaryArray = array.slice();

   const returnedAnimations = runAlgorithm({ animations, array: auxiliaryArray, selectedAlgorithm });
   runAnimation(returnedAnimations ?? animations);
}
