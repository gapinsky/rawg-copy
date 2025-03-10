import { Outlet } from "react-router-dom";
import Aside from "./my-components/aside/Aside";
import MobileNav from "./my-components/mobileNav/MobileNav";
import Navbar from "./my-components/navbar/Navbar";

const HomepageLayout = () => {
  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900 ">
      <Navbar />
      <div className="flex px-2 py-2  lg:px-6 ">
        <Aside />
        <Outlet />
      </div>
      <MobileNav />
    </div>
  );
};

export default HomepageLayout;
