import reducerContext from "@/context/LibraryWishlistContext";
import { useContext } from "react";

const LibraryPage = () => {
  const { state, dispatch } = useContext(reducerContext);
  return (
    <div>
      {state.library.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default LibraryPage;
