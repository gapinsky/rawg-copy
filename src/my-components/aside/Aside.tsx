import GenreItem from "./GenreItem";
import useGenres from "./useGenres";

const Aside = () => {
  const { data: genres, isLoading } = useGenres();
  !isLoading && console.log(genres);
  return (
    <aside>
      <ul>
        {genres?.map((genre) => (
          <GenreItem
            name={genre.name}
            image={genre.image_background}
            slug={genre.slug}
            key={genre.id}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
