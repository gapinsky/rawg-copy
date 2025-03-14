import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GamePageButton = ({ children }: Props) => {
  return (
    <button className="pb-2 pt-4 px-4 relative  text-lg flex gap-2   rounded-lg bg-neutral-700 text-neutral-50 hover:cursor-pointer hover:opacity-90 xl:text-3xl">
      <span className=" absolute top-0.5 text-xs">Add to</span>
      {children}
    </button>
  );
};

export default GamePageButton;
