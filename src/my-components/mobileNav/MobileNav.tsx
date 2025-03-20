import { useRef, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import AsideNavList from "../aside/AsideNavList";
import navContext from "./NavContext";
import GenresListMobile from "./GenresListMobile";
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };
  return (
    <div>
      <button
        onClick={toggleMenu}
        className="z-30  fixed bottom-3 right-3  overflow-hidden   p-2 rounded-full text-2xl bg-neutral-100 dark:text-neutral-50 dark:bg-neutral-800  lg:hidden "
      >
        <div className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-full">
          {isOpen ? <IoClose /> : <CgMenuGridO />}
        </div>
      </button>
      <div
        ref={menuRef}
        className={`${
          isOpen ? "block" : "hidden"
        }  fixed left-0 top-0 p-2 w-full h-full  bg-neutral-50 dark:bg-neutral-900 z-20 flex justify-center lg:hidden `}
      >
        <navContext.Provider value={{ toggleMenu }}>
          <GenresListMobile />
          <AsideNavList />
        </navContext.Provider>
      </div>
    </div>
  );
};

export default MobileNav;
