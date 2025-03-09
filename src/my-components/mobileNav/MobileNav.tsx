import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
// import useGenres from "../genres/useGenres";
import GenresList from "../genres/GenresList";
import AsideNavList from "../aside/AsideNavList";
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const { data, isLoading } = useGenres();

  return (
    <div className="">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="z-30 fixed bottom-3 right-3  overflow-hidden   p-2 rounded-full text-2xl bg-neutral-100 dark:text-neutral-50 dark:bg-neutral-800  lg:hidden "
      >
        <div className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-full">
          {isOpen ? <IoClose /> : <CgMenuGridO />}
        </div>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-svw  bg-neutral-50 dark:bg-neutral-900 z-20 flex flex-col items-center  space-x-4`}
      >
        <div className="py-5 ">
          <AsideNavList />
          <GenresList />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
