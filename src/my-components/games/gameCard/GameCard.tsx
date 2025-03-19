import { GamesProps } from "../useGames";
import GameCardActionButtons from "./GameCardActionButtons";
import GameCardMetaScore from "./GameCardMetaScore";
import { Link } from "react-router-dom";
import GameCardPlatforms from "./GameCardPlatforms";

interface Props extends GamesProps {
  gamesDisplay: string;
}

const GameCard = ({
  name,
  released,
  background_image,
  metacritic,
  platforms,
  gamesDisplay,
  slug,
}: Props) => {
  return (
    <div
      className={`${
        gamesDisplay === "col"
          ? "w-[90%] md:w-[80%] xl:w-[50%]"
          : "w-[90%] xl:w-full"
      } flex flex-col justify-between   hover:scale-105 duration-150 ease-in-out border-2  border-neutral-100 my-5 rounded-lg overflow-hidden shadow-lg text-neutral-900  bg-neutral-100 dark:shadow-neutral-900 dark:text-neutral-100 dark:bg-neutral-800 dark:border-neutral-800`}
    >
      <img
        src={background_image}
        alt={`${name} thumbnail`}
        className={`${
          gamesDisplay === "col"
            ? "h-[200px] md:h-[300px] xl:h-[350px]"
            : "md:h-60 "
        }   object-center object-cover   bg-neutral-500 w-full `}
      />
      <div className="px-4">
        <GameCardPlatforms platforms={platforms} />
        <Link
          to={`game/${slug}`}
          className="text-2xl font-semibold lg:text-3xl my-2 hover:opacity-70"
        >
          {name}
        </Link>
      </div>
      <div className="my-2 px-4   ">
        <GameCardMetaScore metacritic={metacritic} />
        <div className=" flex items-center justify-between ">
          <p className="text-sm">Release: {released}</p>
          <GameCardActionButtons />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
