import reducerContext from "@/context/LibraryWishlistContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { state } = useContext(reducerContext);
  return (
    <section className="  p-12 w-full">
      <div className="flex flex-col items-center space-y-16 ">
        <p className="flex text-5xl md:text-7xl font-semibold">
          nickname
          <img
            src="/images/noImage.png"
            alt="profile pic"
            className="rounded-full h-14 md:h-20 aspect-square ml-6 border-2 border-neutral-900 "
          />
        </p>
        <div className="w-full text-3xl  ">
          <Link to="/library/nickname">Library</Link>
          <div className="mt-4 grid grid-cols-1  gap-6 md:grid-cols-3 xl:grid-cols-5">
            {state.library.map((item) => (
              <div className="text-lg border-2 rounded-lg overflow-hidden shadow-md ">
                <img
                  src={item.background_image}
                  className="max-h-36 w-full object-cover"
                />
                <p className="p-2 font-semibold ">
                  <Link to={`/game/${item.slug}`} className="hover:opacity-60">
                    {item.name}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full   text-3xl">
          <Link to="/wishlist/nickname">Wishlist</Link>
          <div className="mt-4 grid  grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-5">
            {state.wishlist.map((item) => (
              <div className="text-xl border-2 rounded-lg overflow-hidden shadow-md">
                <img
                  src={item.background_image}
                  className="max-h-36 w-full object-cover"
                />
                <p className="p-2 font-semibold ">
                  <Link to={`/game/${item.slug}`} className="hover:opacity-60">
                    {item.name}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
