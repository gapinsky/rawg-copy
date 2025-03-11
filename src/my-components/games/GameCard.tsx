import { IoMdDesktop } from "react-icons/io";
import { LiaXbox } from "react-icons/lia";
import { FaPlaystation } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { GamesProps } from "./useGames";
import { GrGift } from "react-icons/gr";
import { VscLibrary } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";

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
        gamesDisplay === "col" ? "w-[70%]" : "w-full"
      } border-2  border-neutral-300 my-5 rounded-lg overflow-hidden shadow-lg  bg-neutral-100 dark:bg-neutral-700`}
    >
      <img
        src={background_image}
        alt={`${name} thumbnail`}
        className={`${
          gamesDisplay === "col" ? "h-[300px] object-top" : "md:h-64"
        } h-52 object-center object-cover   bg-neutral-500 w-full`}
      />
      <div className="p-2 ">
        <div className="flex space-x-3 ">
          {uniquePlatformArray.map((item) => (
            <p className="text-xl ">{getLogo(item)}</p>
          ))}
        </div>
        <p className="text-2xl font-semibold ">{name}</p>
        <p
          className={`font-bold  ${metacritic < 25 && "text-red-600"} ${
            metacritic < 50 && "text-orange-600"
          } ${metacritic < 75 && "text-yellow-600"} ${
            metacritic <= 100 && "text-green-600"
          }`}
        >
          <span className="font-normal text-neutral-900 dark:text-neutral-50 ">
            Rating:{" "}
          </span>
          {metacritic}{" "}
          <span className="text-neutral-900 dark:text-neutral-50">/100</span>
        </p>
        <div className=" flex items-start justify-between">
          <p>{released}</p>
          <p className="flex space-x-4 justify-end">
            <button className="flex items-center bg-neutral-200 border-neutral-300 border text-neutral-600 shadow-md  px-2 py-1 rounded-md ">
              <GrGift className="mr-1" />
              <GoPlus className="text-xl" />
            </button>
            <button className="flex items-center bg-neutral-200 border-neutral-300 border text-neutral-600 shadow-md  px-2 py-1 rounded-md font-semibold">
              <VscLibrary className="mr-1" /> Add
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
