import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";

import type { AnimationArrayType, ISortingAlgorithm, SortingAlgorithmType } from "../types";
import { generateRandomNumberFromInterval } from "../lib";
import { MAX_ANIMATION_SPEED } from "../lib";

const SortingAlgorithmContext = createContext<ISortingAlgorithm | undefined>(undefined);

export function SortingAlgorithmProvider({ children }: PropsWithChildren) {
   const [selectedAlgorithm, setSelectedAlgorithm] = useState<SortingAlgorithmType>("bubble");
   const [animationSpeed, setAnimationSpeed] = useState(MAX_ANIMATION_SPEED);
   const [isAnimationComplete, setIsAnimationComplete] = useState(false);
   const [arrayToSort, setArrayToSort] = useState<Array<number>>([]);
   const [isSorting, setIsSorting] = useState(false);

   const requiresReset = isAnimationComplete || isSorting;

   useEffect(() => {
      resetArrayAndAnimation();
      window.addEventListener("resize", resetArrayAndAnimation);

      return () => window.removeEventListener("resize", resetArrayAndAnimation);
   }, []);

   function resetArrayAndAnimation() {
      const contentContainer = document.getElementById("content-container");
      if (!contentContainer) return;

      const contentContainerWidth = contentContainer.clientWidth;
      const temporaryArray: Array<number> = [];
      const numberOfLines = contentContainerWidth / 8;
      const containerHeight = window.innerHeight;
      const maxLineHeight = Math.max(containerHeight - 420, 100);

      for (let i = 0; i < numberOfLines; i++) {
         const randomNumber = generateRandomNumberFromInterval({ max: maxLineHeight - 100, min: 100 });
         temporaryArray.push(randomNumber);
      }

      setArrayToSort(temporaryArray);
      setIsAnimationComplete(false);
      setIsSorting(false);

      const highestId = setTimeout(() => {
         for (let i = highestId; i >= 0; i--) clearTimeout(i);
      }, 0);

      setTimeout(() => {
         const arrayLines = document.getElementsByClassName("array-line") as HTMLCollectionOf<HTMLElement>;

         for (let i = 0; i < arrayLines.length; i++) {
            if (arrayLines[i]) {
               arrayLines[i].classList.remove("change-line-color");
               arrayLines[i].classList.add("default-line-color");
            }
         }
      }, 0);
   }

   function runAnimation(animations: AnimationArrayType) {
      setIsSorting(true);

      const inverseSpeed = (1 / animationSpeed) * 200;
      const arrayLines = document.getElementsByClassName("array-line") as HTMLCollectionOf<HTMLElement>;

      function updateClassList(indexes: Array<number>, addClassName: string, removeClassName: string) {
         indexes.forEach((index) => {
            if (arrayLines[index]) {
               arrayLines[index].classList.add(addClassName);
               arrayLines[index].classList.remove(removeClassName);
            }
         });
      }

      function updateHeightValue(lineIndex: number, newHeight: number | undefined) {
         if (!newHeight) return;
         if (arrayLines[lineIndex]) arrayLines[lineIndex].style.height = `${newHeight}px`;
      }

      animations.forEach((animation, index) => {
         setTimeout(() => {
            const [values, isSwap] = animation;
            if (!isSwap) {
               updateClassList(values, "change-line-color", "default-line-color");
               setTimeout(() => {
                  updateClassList(values, "default-line-color", "change-line-color");
               }, inverseSpeed);
            } else {
               const [lineIndex, newHeight] = values;
               updateHeightValue(lineIndex, newHeight);
            }
         }, index * inverseSpeed);
      });

      const finalTimeout = animations.length * inverseSpeed;
      setTimeout(() => {
         Array.from(arrayLines).forEach((line) => {
            if (line) {
               line.classList.add("pulse-animation", "change-line-color");
               line.classList.remove("default-line-color");
            }
         });

         setTimeout(() => {
            Array.from(arrayLines).forEach((line) => {
               if (line) {
                  line.classList.remove("pulse-animation", "change-line-color");
                  line.classList.add("default-line-color");
               }
            });

            setIsSorting(false);
            setIsAnimationComplete(true);
         }, 1000);
      }, finalTimeout);
   }

   const value = {
      selectedAlgorithm,
      setSelectedAlgorithm,
      animationSpeed,
      setAnimationSpeed,
      isAnimationComplete,
      setIsAnimationComplete,
      arrayToSort,
      setArrayToSort,
      isSorting,
      setIsSorting,
      resetArrayAndAnimation,
      runAnimation,
      requiresReset,
   };

   return <SortingAlgorithmContext.Provider value={value}>{children}</SortingAlgorithmContext.Provider>;
}

export function useSortingAlgorithm() {
   const context = useContext(SortingAlgorithmContext);
   if (!context) throw new Error("useSortingAlgorithm context must be used within a SortingAlgorithmProvider");
   return context;
}
