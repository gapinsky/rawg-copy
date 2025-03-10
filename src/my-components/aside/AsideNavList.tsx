import { GrGift } from "react-icons/gr";
import { VscLibrary } from "react-icons/vsc";

const AsideNavList = () => {
  return (
    <ul className="w-[40%] px-2  space-y-4 lg:px-0 lg:space-y-2 lg:w-fit ">
      <li className="text-2xl font-bold">Home</li>
      <li className="text-lg flex items-center">
        nickname
        <img
          src="/images/noImage.png"
          alt=""
          className="ml-2 h-8 rounded-full border"
        />
      </li>
      <li className="text-lg flex items-center">
        <VscLibrary className="text-2xl mr-2" />
        My library
      </li>
      <li className="text-lg flex items-center">
        <GrGift className="text-2xl mr-2" /> Wishlist
      </li>
    </ul>
  );
};

export default AsideNavList;
