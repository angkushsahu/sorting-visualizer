import type { Dispatch, SetStateAction } from "react";

export type SortingAlgorithmType = "bubble" | "insertion" | "selection" | "merge" | "quick";

export type AnimationArrayType = Array<[Array<number>, boolean]>;

export interface SelectOptionsType {
   value: string;
   label: string;
}

export interface ISortingAlgorithm {
   arrayToSort: Array<number>;
   setArrayToSort: Dispatch<SetStateAction<Array<number>>>;
   selectedAlgorithm: SortingAlgorithmType;
   setSelectedAlgorithm: Dispatch<SetStateAction<SortingAlgorithmType>>;
   animationSpeed: number;
   setAnimationSpeed: Dispatch<SetStateAction<number>>;
   isAnimationComplete: boolean;
   setIsAnimationComplete: Dispatch<SetStateAction<boolean>>;
   isSorting: boolean;
   setIsSorting: Dispatch<SetStateAction<boolean>>;
   resetArrayAndAnimation: () => void;
   runAnimation: (animations: AnimationArrayType) => void;
   requiresReset: boolean;
}
