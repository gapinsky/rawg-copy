import { GrGift } from "react-icons/gr";
import { VscLibrary } from "react-icons/vsc";
import { Link } from "react-router-dom";

const AsideNavList = () => {
  return (
    <ul className="w-[40%] px-2  space-y-8 md:w-fit  lg:px-0 lg:space-y-4 lg:w-full  ">
      <li className="text-2xl font-bold ">
        <Link to="" className="hover:opacity-60">
          Home
        </Link>
      </li>
      <li>
        <Link to={`profile/nickname`} className="text-lg flex items-center">
          nickname
          <img
            src="/images/noImage.png"
            alt=""
            className="ml-2 h-8 rounded-full border"
          />
        </Link>
      </li>
      <li>
        <Link to={`library/nickname`} className="text-lg flex items-center">
          <VscLibrary className="text-2xl mr-2" />
          My library
        </Link>
      </li>
      <li>
        <Link to={`wishlist/nickname`} className="text-lg flex items-center">
          <GrGift className="text-2xl mr-2" /> Wishlist
        </Link>
      </li>
    </ul>
  );
};

export default AsideNavList;
