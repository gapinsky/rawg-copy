import { Action, StateProps } from "@/reducer/reducer";
import { createContext } from "react";

type ContextType = {
  state: StateProps;
  dispatch: React.ActionDispatch<[action: Action]>;
};

const reducerContext = createContext<ContextType>({} as ContextType);
export default reducerContext;
