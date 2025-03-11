import { GoPlus } from "react-icons/go";
import { GrGift } from "react-icons/gr";
import { VscLibrary } from "react-icons/vsc";

const GameCardActionButtons = () => {
  return (
    <p className="flex space-x-4 justify-end ">
      <button className="flex items-center bg-neutral-200 border-neutral-300 border text-neutral-800   px-2 py-1 rounded-md  dark:bg-neutral-500 dark:text-neutral-50 dark:border-neutral-600">
        <GrGift className="mr-1" />
        <GoPlus className="text-xl" />
      </button>
      <button className="flex items-center bg-neutral-200 border-neutral-300 border text-neutral-800   px-2 py-1 rounded-md font-semibold dark:bg-neutral-500 dark:text-neutral-50 dark:border-neutral-600">
        <VscLibrary className="mr-1" /> Add
      </button>
    </p>
  );
};

export default GameCardActionButtons;
