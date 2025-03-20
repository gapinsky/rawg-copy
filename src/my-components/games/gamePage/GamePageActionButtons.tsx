import reducerContext from "@/context/LibraryWishlistContext";
import { GameProps } from "@/reducer/reducer";
import { useContext } from "react";
import { FaGift } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { toast } from "sonner";

interface Props {
  gameInfo: GameProps;
}

const GamePageActionButtons = ({ gameInfo }: Props) => {
  const { state, dispatch } = useContext(reducerContext);

  const handleLibrary = (game: GameProps) => {
    if (state.library.some((item) => item.id === game.id)) {
      toast.error(`${game.name} is already in your library.`);
      return;
    }
    dispatch({ type: "addLibrary", payload: game });
    toast.success(`${game.name} has been added to your library!`, {});
  };

  const handleWishlist = (game: GameProps) => {
    if (state.wishlist.includes(game)) {
      toast.error(`${game.name} is already in your wishlist.`);
      return;
    }
    dispatch({ type: "addWishlist", payload: game });
    toast.success(`${game.name} has been added to your wishlist!`, {});
  };
  return (
    <p className="flex space-x-8">
      <button
        onClick={() => handleLibrary(gameInfo)}
        className="pb-2 pt-4 px-4 relative  text-lg flex gap-2   rounded-lg bg-neutral-700 text-neutral-50 hover:cursor-pointer hover:opacity-90 xl:text-3xl"
      >
        <span className=" absolute top-0.5 text-xs">Add to</span>
        My Library <FaCirclePlus className=" text-3xl text-lime-400" />
      </button>
      <button
        onClick={() => handleWishlist(gameInfo)}
        className="pb-2 pt-4 px-4 relative  text-lg flex gap-2   rounded-lg bg-neutral-700 text-neutral-50 hover:cursor-pointer hover:opacity-90 xl:text-3xl"
      >
        <span className=" absolute top-0.5 text-xs">Add to</span>
        Wishlist <FaGift className="text-2xl text-neutral-50" />
      </button>
    </p>
  );
};

export default GamePageActionButtons;
