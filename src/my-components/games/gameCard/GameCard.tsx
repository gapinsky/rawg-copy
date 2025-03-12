import { IoMdDesktop } from "react-icons/io";
import { LiaXbox } from "react-icons/lia";
import { FaPlaystation } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { GamesProps } from "../useGames";
import GameCardActionButtons from "./GameCardActionButtons";
import GameCardMetaScore from "./GameCardMetaScore";
import { Link } from "react-router-dom";

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
  const platformArray = platforms.map((item) => {
    if (item.platform.name.toLowerCase().includes("playstation"))
      return "playstation";
    if (item.platform.name.toLowerCase().includes("xbox")) return "xbox";
    if (item.platform.name.toLowerCase().includes("pc")) return "pc";
    if (item.platform.name.toLowerCase().includes("nintendo"))
      return "nintendo";
    return "";
  });

  const uniquePlatformArray = [
    ...new Set(platformArray.filter((item) => item !== "")),
  ];

  const getLogo = (device: string) => {
    if (device.includes("playstation")) return <FaPlaystation />;
    if (device.includes("xbox")) return <LiaXbox />;
    if (device.includes("pc")) return <IoMdDesktop />;
    if (device.includes("nintendo")) return <SiNintendoswitch />;
    return null;
  };

  return (
    <div
      className={`${
        gamesDisplay === "col" ? "w-[70%]" : "lg:w-[80%] xl:w-full"
      } hover:scale-105 duration-150 ease-in-out border-2  border-neutral-100 my-5 rounded-lg overflow-hidden shadow-lg text-neutral-900  bg-neutral-100 dark:shadow-neutral-900 dark:text-neutral-100 dark:bg-neutral-800 dark:border-neutral-800`}
    >
      <img
        src={background_image}
        alt={`${name} thumbnail`}
        className={`${
          gamesDisplay === "col" ? "h-[300px] object-top" : "md:h-64"
        } h-52 object-center object-cover   bg-neutral-500 w-full`}
      />
      <div className="py-2 px-4 flex flex-col ">
        <div className="flex space-x-3 ">
          {uniquePlatformArray.map((item, index) => (
            <p className="text-xl " key={index}>
              {getLogo(item)}
            </p>
          ))}
        </div>

        <Link
          to={`game/${slug}`}
          className="text-2xl font-semibold lg:text-3xl my-1"
        >
          {name}
        </Link>
        <GameCardMetaScore metacritic={metacritic} />
        <div className=" flex items-center justify-between ">
          <p>{released}</p>
          <GameCardActionButtons />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
