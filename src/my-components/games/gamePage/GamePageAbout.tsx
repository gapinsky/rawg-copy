import { useState } from "react";

interface Props {
  gameDescription: string | undefined;
}

const GamePageAbout = ({ gameDescription }: Props) => {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <>
      <p className="text-2xl font-semibold opacity-60">About</p>
      <p>
        {isExpand ? gameDescription : gameDescription?.slice(0, 500)}{" "}
        <button
          onClick={() => setIsExpand((prev) => !prev)}
          className="bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 text-sm px-1 rounded-sm hover:opacity-90 hover:cursor-pointer"
        >
          {isExpand ? "Show less" : "Read more"}
        </button>
      </p>
    </>
  );
};

export default GamePageAbout;
