import reducerContext from "@/context/LibraryWishlistContext";
import { useContext } from "react";

const WishlistPage = () => {
  const { state, dispatch } = useContext(reducerContext);
  return (
    <div>
      {state.wishlist.map((game) => (
        <p>{game.name}</p>
      ))}
    </div>
  );
};

export default WishlistPage;
