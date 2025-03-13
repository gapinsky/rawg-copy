import { ReactNode } from "react";
import { FaCirclePlus } from "react-icons/fa6";

interface Props {
  children: ReactNode;
}

const GamePageButton = ({ children }: Props) => {
  return (
    <button className="pb-1 pt-3 px-3 relative  text-lg flex gap-2   rounded-lg bg-neutral-700 text-neutral-50 hover:cursor-pointer hover:opacity-90">
      <span className=" absolute top-0.5 text-xs">Add to</span>
      {children}
    </button>
  );
};

export default GamePageButton;
