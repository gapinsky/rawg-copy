import useGenres from "./useGenres";
import GenreItem from "./GenreItem";
import GenreSkeleton from "./GenreSkeleton";

const GenresList = () => {
  const { data: genres, isLoading } = useGenres();
  if (isLoading) return <GenreSkeleton />;
  return (
    <div className="flex flex-col space-y-4 px-2 lg:px-0">
      <p className="text-2xl  font-bold">Genres</p>
      <ul className=" space-y-3  overflow-y-scroll lg:overflow-y-auto">
        {/* <li className="text-xl lg:text-2xl font-bold hidden lg:block">
          Genres
        </li> */}
        {genres?.map((genre) => (
          <GenreItem
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

export default GenresList;
