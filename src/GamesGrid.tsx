import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./components/ui/select";
import { BsGrid } from "react-icons/bs";
import { BsLayoutThreeColumns } from "react-icons/bs";
const GamesGrid = () => {
  const [gamesDisplay, setGamesDisplay] = useState("grid");

  const active = `bg-neutral-800 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900
bg-neutral-800 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900`;
  return (
    <div className=" w-full h-[90vh] p-5">
      <div className="flex items-center justify-between">
        <div className="flex space-x-6">
          <Select>
            <SelectTrigger className="w-[210px] ">
              <span className="font-bold">Order by:</span>
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="rating">Average rating</SelectItem>
              <SelectItem value="release">Release date</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[190px]">
              <span className="font-bold">Platform:</span>
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none" className="text-red-500">
                None
              </SelectItem>
              <SelectItem value="pc">PC</SelectItem>
              <SelectItem value="playstation">Playstation</SelectItem>
              <SelectItem value="xbox">Xbox</SelectItem>
              <SelectItem value="nintendo">Nintendo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-3">
          <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            Display Options
          </p>
          <button
            className={`text-2xl p-2  rounded-md  bg-neutral-300 opacity-40 cursor-pointer dark:text-neutral-900 ${
              gamesDisplay == "grid" && " opacity-100"
            }`}
            onClick={() => setGamesDisplay("grid")}
          >
            <BsGrid />
          </button>
          <button
            className={`text-2xl p-2  rounded-md bg-neutral-300 opacity-40 cursor-pointer dark:text-neutral-900  ${
              gamesDisplay == "col" && " opacity-100"
            }`}
            onClick={() => setGamesDisplay("col")}
          >
            <BsLayoutThreeColumns className="rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamesGrid;
