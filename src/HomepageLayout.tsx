import { Outlet } from "react-router-dom";
import Aside from "./my-components/aside/Aside";
import MobileNavButton from "./my-components/mobileNav/MobileNav";
import Navbar from "./my-components/navbar/Navbar";

const HomepageLayout = () => {
  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900">
      <Navbar />
      <div className="flex px-6 py-2 ">
        <Aside />
        <Outlet />
      </div>
      <MobileNavButton />
    </div>
  );
};

export default HomepageLayout;
