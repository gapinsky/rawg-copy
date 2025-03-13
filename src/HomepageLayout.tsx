import { Outlet } from "react-router-dom";
import Aside from "./my-components/aside/Aside";
import MobileNav from "./my-components/mobileNav/MobileNav";
import Navbar from "./my-components/navbar/Navbar";

const HomepageLayout = () => {
  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
      <Navbar />
      <div className="relative flex    ">
        <Aside />
        <Outlet />
      </div>
      <MobileNav />
    </div>
  );
};

export default HomepageLayout;
