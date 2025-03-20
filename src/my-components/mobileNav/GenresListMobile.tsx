import useGenres from "../aside/genres/useGenres";
import GenreItemMobile from "./GenreItemMobile";

const GenresListMobile = () => {
  const { data: genres, isLoading } = useGenres();
  if (isLoading)
    return (
      <div className="flex flex-col  px-2 lg:px-0  md:w-[40%] lg:w-full ">
        <p className="text-2xl  font-bold">Genres</p>
        <ul className=" space-y-3  overflow-y-scroll md:space-y-4  py-4 lg:space-y-5 lg:overflow-y-auto overflow-x-hidden">
          <li>Loading...</li>
          <li>Loading...</li>
          <li>Loading...</li>
          <li>Loading...</li>
          <li>Loading...</li>
          <li>Loading...</li>
          <li>Loading...</li>
          <li>Loading...</li>
          <li>Loading...</li>
        </ul>
      </div>
    );
  return (
    <div className="flex flex-col  px-2 lg:px-0  md:w-[40%] lg:w-full ">
      <p className="text-2xl  font-bold">Genres</p>
      <ul className=" space-y-3  overflow-y-scroll md:space-y-4  py-4 lg:space-y-5 lg:overflow-y-auto overflow-x-hidden">
        {genres?.map((genre) => (
          <GenreItemMobile
            name={genre.name}
            image={genre.image_background}
            slug={genre.slug}
            key={genre.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default GenresListMobile;
