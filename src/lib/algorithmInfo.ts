import type { SortingAlgorithmType } from "../types";

type IAlgorithmInfo = {
   [key in SortingAlgorithmType]: {
      title: string;
      worstCase: string;
      averageCase: string;
      bestCase: string;
   };
};

export const algorithmInfo: IAlgorithmInfo = {
   bubble: {
      title: "Bubble Sort",
      worstCase: "O(n²)",
      averageCase: "O(n²)",
      bestCase: "O(n)",
   },
   insertion: {
      title: "Insertion Sort",
      worstCase: "O(n²)",
      averageCase: "O(n²)",
      bestCase: "O(n)",
   },
   selection: {
      title: "Selection Sort",
      worstCase: "O(n²)",
      averageCase: "O(n²)",
      bestCase: "O(n²)",
   },
   merge: {
      title: "Merge Sort",
      worstCase: "O(n log n)",
      averageCase: "O(n log n)",
      bestCase: "O(n log n)",
   },
   quick: {
      title: "Quick Sort",
      worstCase: "O(n²)",
      averageCase: "O(n log n)",
      bestCase: "O(n log n)",
   },
};
