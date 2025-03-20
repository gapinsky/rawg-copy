import reducerContext from "@/context/LibraryWishlistContext";
import { useContext } from "react";
import GameThumbnail from "./GameThumbnail";

const LibraryPage = () => {
  const { state } = useContext(reducerContext);
  console.log(state);
  return (
    <div className="w-full p-16 space-y-12">
      <p className="text-6xl font-semibold">My Library</p>
      <div className=" grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-4 xl:gap-16">
        {state.library.length === 0 && (
          <p className="text-center col-span-4 text-2xl">
            Your library is empty.
          </p>
        )}
        {state.library.map((item) => (
          <GameThumbnail
            key={item.id}
            name={item.name}
            slug={item.slug}
            background_image={item.background_image}
            id={item.id}
            type="library"
          />
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;
