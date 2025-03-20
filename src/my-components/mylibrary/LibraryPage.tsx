import reducerContext from "@/context/LibraryWishlistContext";
import { useContext, useState } from "react";
import GameThumbnail from "./GameThumbnail";
import { BsSearch } from "react-icons/bs";

const LibraryPage = () => {
  const { state } = useContext(reducerContext);
  const [filterInput, setFilterInput] = useState("");
  return (
    <div className="w-full p-5 md:p-8 lg:p-16 ">
      <p className="text-5xl md:text-6xl font-semibold">My Library</p>
      <p className="my-8 text-4xl">
        {`Games: ${state.library.length > 0 ? state.library.length : "0"}`}
      </p>
      <p className="w-[95%] md:w-[80%] mx-auto flex justify-center items-center my-8 ">
        <BsSearch className="text-2xl mr-2  opacity-40" />
        <input
          value={filterInput}
          onChange={(e) => setFilterInput(e.target.value)}
          type="text"
          placeholder="Search library..."
          className="w-full px-2 py-2 text-xl border-b-2 dark:border-neutral-500"
        />
      </p>
      <div className=" grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-4 xl:gap-16">
        {state.library.length === 0 && (
          <p className="text-center col-span-4 text-2xl">
            Your library is empty.
          </p>
        )}
        {state.library
          .filter((item) =>
            item.name.toLowerCase().includes(filterInput.toLowerCase())
          )
          .map((item) => (
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
