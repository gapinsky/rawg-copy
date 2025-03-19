import { IoMdDesktop } from "react-icons/io";
import { LiaXbox } from "react-icons/lia";
import { FaPlaystation } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { Platforms } from "../useGames";

interface Props {
  platforms: Platforms[];
}

const GameCardPlatforms = ({ platforms }: Props) => {
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
    <div className="flex space-x-3 my-2 ">
      {uniquePlatformArray.map((item, index) => (
        <p className="text-xl " key={index}>
          {getLogo(item)}
        </p>
      ))}
    </div>
  );
};

export default GameCardPlatforms;
