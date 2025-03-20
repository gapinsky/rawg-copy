import reducerContext from "@/context/LibraryWishlistContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  background_image: string;
  slug: string;
  id: number;
}

const GameThumbnail = ({ name, background_image, slug, id }: Props) => {
  const { dispatch } = useContext(reducerContext);
  return (
    <div className="w-full rounded-md overflow-hidden  shadow-md bg-neutral-50 dark:bg-neutral-800">
      <img
        src={background_image}
        alt={`${name} thumbnail`}
        className="max-h-32 w-full object-cover hover:scale-110 "
      />
      <div className=" py-3 px-4 flex flex-col  space-y-2">
        <Link
          to={`/game/${slug}`}
          className="self-start text-xl font-semibold hover:opacity-60"
        >
          {name}
        </Link>
        <button
        onClick={() => dispatch({type: "removeLibrary", payload: {id: id}})}
        className="text-sm self-end border-2 px-2 py-0.5 rounded-md  font-semibold border-neutral-400 bg-neutral-300 text-neutral-700 hover:cursor-pointer active:scale-90">
          Remove
        </button>
      </div>
    </div>
  );
};

export default GameThumbnail;
