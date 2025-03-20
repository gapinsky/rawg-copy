import reducerContext from "@/context/LibraryWishlistContext";
import { useContext } from "react";
import GameThumbnail from "../mylibrary/GameThumbnail";
import { BsSearch } from "react-icons/bs";

const WishlistPage = () => {
  const { state } = useContext(reducerContext);
  return (
    <div className="w-full p-5 md:p-8 lg:p-16">
      <p className="text-5xl md:text-6xl font-semibold">My Wishlist</p>
      <p className="my-8 text-4xl">
        {`Games: ${state.wishlist.length > 0 ? state.wishlist.length : "0"}`}
      </p>
      <p className="w-[95%] md:w-[80%] mx-auto flex justify-center items-center my-8 ">
        <BsSearch className="text-2xl mr-2  opacity-40" />
        <input
          type="text"
          placeholder="Search wishlist..."
          className="w-full px-2 py-2 text-xl border-b-2 dark:border-neutral-500"
        />
      </p>
      <div className=" grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-4 xl:gap-16">
        {state.wishlist.length === 0 && (
          <p className="text-center col-span-4 text-2xl">
            Your wishlist is empty.
          </p>
        )}
        {state.wishlist.map((item) => (
          <GameThumbnail
            key={item.id}
            name={item.name}
            slug={item.slug}
            background_image={item.background_image}
            id={item.id}
            type="wishlist"
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
