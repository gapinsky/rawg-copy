import { createContext } from "react";

type NavContextType = {
  toggleMenu: () => void;
};

const navContext = createContext<NavContextType>({} as NavContextType);

export default navContext;
