import { GrGift } from "react-icons/gr";
import { VscLibrary } from "react-icons/vsc";

const AsideNavList = () => {
  return (
    <ul className="space-y-4 lg:space-y-2 text-2xl">
      <li className=" font-bold">Home</li>
      <li className="text-lg flex items-center">
        nickname
        <img
          src="/images/noImage.png"
          alt=""
          className="ml-2 h-8 rounded-full border"
        />
      </li>
      <li className="text-lg flex items-center">
        <VscLibrary className=" mr-2" />
        My library
      </li>
      <li className="text-lg flex items-center">
        <GrGift className=" mr-2" /> Wishlist
      </li>
    </ul>
  );
};

export default AsideNavList;
