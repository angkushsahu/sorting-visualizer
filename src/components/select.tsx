import type { ChangeEvent } from "react";

import type { SelectOptionsType, SortingAlgorithmType } from "../types";

interface SelectProps {
   options: Array<SelectOptionsType>;
   defaultValue: SortingAlgorithmType;
   onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
   isDisabled: boolean;
}

export function Select({ defaultValue, isDisabled, onChange, options }: SelectProps) {
   return (
      <section>
         <p className="mb-2 text-lg">Algorithm</p>
         <div>
            <select
               defaultValue={defaultValue}
               onChange={onChange}
               disabled={isDisabled}
               className="block h-8 w-full appearance-none rounded-lg border border-orange-500 bg-orange-900 px-4 py-1 pr-8 leading-tight text-gray-300 shadow focus:outline-none"
            >
               {options.map((option) => (
                  <option key={option.value} value={option.value}>
                     {option.label}
                  </option>
               ))}
            </select>
         </div>
      </section>
   );
}
