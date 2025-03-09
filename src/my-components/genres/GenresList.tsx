import useGenres from "./useGenres";
import GenreItem from "./GenreItem";
import GenreSkeleton from "./GenreSkeleton";

const GenresList = () => {
  const { data: genres, isLoading } = useGenres();
  if (isLoading) return <GenreSkeleton />;
  return (
    <ul className="space-y-4 lg:space-y-3">
      <li className="text-2xl font-bold">Genres</li>
      {genres?.map((genre) => (
        <GenreItem
          name={genre.name}
          image={genre.image_background}
          slug={genre.slug}
          key={genre.id}
        />
      ))}
    </ul>
  );
};

export default GenresList;
