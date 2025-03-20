import reducerContext from "@/context/LibraryWishlistContext";
import { GameProps } from "@/reducer/reducer";
import { useContext } from "react";
import { GoPlus } from "react-icons/go";
import { GrGift } from "react-icons/gr";
import { VscLibrary } from "react-icons/vsc";
import { toast } from "sonner";

interface Props {
  game: GameProps;
}

const GameCardActionButtons = ({ game }: Props) => {
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
    <p className="flex space-x-4 justify-end ">
      <button
        onClick={() => handleWishlist(game)}
        className="flex items-center bg-neutral-200 border-neutral-300 border text-neutral-800   px-2 py-1 rounded-md  dark:bg-neutral-500 dark:text-neutral-50 dark:border-neutral-600 hover:cursor-pointer  active:scale-90"
      >
        <GrGift className="mr-1" />
        <GoPlus className="text-xl" />
      </button>
      <button
        onClick={() => handleLibrary(game)}
        className="flex items-center bg-neutral-200 border-neutral-300 border text-neutral-800   px-2 py-1 rounded-md font-semibold dark:bg-neutral-500 dark:text-neutral-50 dark:border-neutral-600 hover:cursor-pointer  active:scale-90"
      >
        <VscLibrary className="mr-1" /> Add
      </button>
    </p>
  );
};

export default GameCardActionButtons;
