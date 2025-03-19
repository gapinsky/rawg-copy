import { Outlet } from "react-router-dom";
import Aside from "./my-components/aside/Aside";
import MobileNav from "./my-components/mobileNav/MobileNav";
import Navbar from "./my-components/navbar/Navbar";
import { useReducer } from "react";
import { initialState, reducer } from "./reducer/reducer";
import reducerContext from "./context/LibraryWishlistContext.ts";

const HomepageLayout = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <reducerContext.Provider value={{ state, dispatch }}>
      <div className="relative bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
        <Navbar />
        <div className="relative flex ">
          <Aside />
          <Outlet />
        </div>
        <MobileNav />
      </div>
    </reducerContext.Provider>
  );
};

export default HomepageLayout;
