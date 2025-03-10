import { BsGrid } from "react-icons/bs";
import { BsLayoutThreeColumns } from "react-icons/bs";

interface Props {
  gamesDisplay: string;
  setGamesDisplay: (type: string) => void;
}

const GamesDisplayOptions = ({ gamesDisplay, setGamesDisplay }: Props) => {
  return (
    <div className="hidden lg:flex items-center space-x-3">
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
  );
};

export default GamesDisplayOptions;
