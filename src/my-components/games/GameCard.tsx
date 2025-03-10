import { IoMdDesktop } from "react-icons/io";
import { LiaXbox } from "react-icons/lia";
import { FaPlaystation } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { GamesProps } from "./useGames";
import { GrGift } from "react-icons/gr";
import { VscLibrary } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";
const GameCard = ({
  name,
  released,
  background_image,
  metacritic,
  platforms,
}: GamesProps) => {
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
    <div className="border-2  border-neutral-300 my-5 rounded-lg overflow-hidden shadow-lg max-w-lg bg-neutral-100 dark:bg-neutral-700">
      <img
        src={background_image}
        alt={`${name} thumbnail`}
        className="h-52  object-cover md:h-64 "
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
