import { FaPlayCircle } from "react-icons/fa";
import { RxReset } from "react-icons/rx";

interface PlayResetButtonProps {
   handlePlay: () => void;
   requiresReset: boolean;
}

export function PlayResetButton({ handlePlay, requiresReset }: PlayResetButtonProps) {
   return (
      <section className="flex items-center justify-between">
         <p className="mb-1 text-lg font-semibold">{requiresReset ? "Reset" : "Play"}</p>
         <button type="button" className="flex items-center justify-center rounded-full" onClick={handlePlay}>
            {requiresReset ? <RxReset className="size-8 text-gray-400" /> : <FaPlayCircle className="size-8 text-green-500" />}
         </button>
      </section>
   );
}
