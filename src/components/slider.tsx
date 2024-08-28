import type { ChangeEvent } from "react";
import { MAX_ANIMATION_SPEED, MIN_ANIMATION_SPEED } from "../lib";

interface SliderProps {
   min?: number;
   max?: number;
   step?: number;
   value: number;
   handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
   isDisabled?: boolean;
}

export function Slider(props: SliderProps) {
   const { handleChange, isDisabled = false, max = MAX_ANIMATION_SPEED, min = MIN_ANIMATION_SPEED, step = 10, value } = props;

   return (
      <section>
         <p className="mb-1 text-lg">Speed</p>
         <div className="flex items-center justify-center gap-2">
            <span className="text-center text-gray-300">Slow</span>
            <input
               type="range"
               min={min}
               max={max}
               step={step}
               value={value}
               onChange={handleChange}
               disabled={isDisabled}
               className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700"
            />
            <span className="text-center text-gray-300">Fast</span>
         </div>
      </section>
   );
}
